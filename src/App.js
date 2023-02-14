import React, { useState } from "react";
import RepoDetails from "./RepoDetails";
import axios from "axios";

function App() {
  const [username, setUername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

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
      console.log(res.data);
    });
  }

  function renderRepo(repo) {
    return (
      <div onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2 className="repo-name">{repo.name}</h2>
      </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "GET",
      url: `https:api.github.com/users/${username}/${repoName}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div className="page">
      <div className="container">
        <div>
          <form>
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
