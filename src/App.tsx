import React from "react";
import "./assets/styles/App.scss";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* ? rel="noopener noreferrer" */}
      {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      {/* </header> */}
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
