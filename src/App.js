import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  async function fetchData() {
    try {
      const res = await axios.get("http://103.74.254.195:8000");
      setData(res);
    } catch (err) {
      setData(null);
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 5555555
        </a>
        <button onClick={fetchData}>fetch</button>
        {data ? <p>{data}</p> : null}
      </header>
    </div>
  );
}
export default App;
