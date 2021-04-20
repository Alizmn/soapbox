import { useState } from "react";
import Gighy from "./components/Giphy";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Section from "./components/Section";

import "./App.css";

const App = () => {
  const [status, setStatus] = useState("Trending");
  return (
    <div className="App">
      <NavBar />
      <div className="searchBar">
        <SearchBar />
      </div>
      <Section setStatus={setStatus} />
      <Gighy status={status} />
    </div>
  );
};

export default App;
