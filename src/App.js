import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

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
      <div key={repo.id}>
        <a className="repo-name" href={repo.url}>
          {repo.name}
        </a>
        <h2 className="repo-name">{repo.id}</h2>
      </div>
    );
  }

  return (
    <div>
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
      </div>
    </div>
  );
}

export default App;
