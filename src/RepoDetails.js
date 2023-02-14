import React from "react";

function RepoDetails({ details, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <article>
        <label>Name:</label>
        <span>{details.name}</span>
      </article>
      <article>
        <label>Forks Count</label>
        <span>{details.forks}</span>
      </article>
      <article>
        <label>Language</label>
        <span>{details.language}</span>
      </article>
    </section>
  );
}

export default RepoDetails;
