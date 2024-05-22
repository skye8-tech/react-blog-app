import "./App.css";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="content">
            <div>
              <p className="badge">Our blog</p>
              <h1>Resources and insights</h1>
              <p>
                The latest industry news, interviews, technologies, and
                resources.
              </p>
            </div>
            <input className="search-bar" type="search" placeholder="Search" />
          </div>
        </div>
      </header>
      <MainSection />
    </div>
  );
}

export default App;
