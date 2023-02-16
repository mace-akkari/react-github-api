import React, { useEffect, useState } from "react";
import RepoDetails from "./RepoDetails";
import "./App.css";
import axios from "axios";

function App() {
  const [username, setUername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    setRepos([]);
    setDetails({});
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "GET",
      url: `https:api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
      console.log("repo data:", res.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2 className="repo-name">{repo.name}</h2>
      </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "GET",
      url: `https:api.github.com/repos/${username}/${repoName}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="repos-list">
          <form className="form">
            <input
              className="input"
              value={username}
              placeholder="Enter Github username"
              onChange={(e) => setUername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>
              {loading ? "Searching...." : "Search user"}
            </button>
          </form>

          <div>{repos.map(renderRepo)}</div>
        </div>
        <RepoDetails details={details} loading={detailsLoading} />
      </div>
    </div>
  );
}

export default App;
