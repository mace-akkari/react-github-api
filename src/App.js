import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUername] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="container">
        <div>
          <form>
            <input
              className="input"
              value={""}
              placeholder="Enter Github username"
              onChange={(e) => setUername(e.target.value)}
            />
            <button className="button" onClick={handleSubmit}>
              {loading ? "Searching...." : "Search user"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
