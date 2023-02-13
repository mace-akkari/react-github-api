import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <div>
          <form>
            <input
              className="input"
              value={""}
              placeholder="Enter Github username"
            />
            <button className="button">Click me</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
