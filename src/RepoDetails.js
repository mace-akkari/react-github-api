import React from "react";

function RepoDetails({ details, loading }) {
  if (loading) {
    return <h1 className="loading-state">Loading...</h1>;
  }

  return (
    <section className="repo-details-container">
      <article className="details-row">
        <label className="label">Name:</label>
        <span className="value">{details.name}</span>
      </article>
      <article className="details-row">
        <label className="label">Created:</label>
        <span className="value">{details.created_at}</span>
      </article>
      <article className="details-row">
        <label className="label">URL:</label>
        <span className="value">
          <a href={details.html_url}>{details.html_url}</a>
        </span>
      </article>
      <article className="details-row">
        <label className="label">Forks:</label>
        <span className="value">{details.forks}</span>
      </article>
      <article className="details-row">
        <label className="label">Main language:</label>
        <span className="value"> {details.language}</span>
      </article>
    </section>
  );
}

export default RepoDetails;
