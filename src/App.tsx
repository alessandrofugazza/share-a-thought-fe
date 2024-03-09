import React from "react";
import "./assets/styles/App.scss";
import { Home } from "./components/pages/home/Home";
import { Container } from "react-bootstrap";

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
        <Container>
          <Home />
        </Container>
      </main>
    </div>
  );
}

export default App;
