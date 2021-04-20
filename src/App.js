import { useState } from "react";
import Gighy from "./components/Giphy";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Section from "./components/Section";

import "./App.css";

const App = () => {
  const [status, setStatus] = useState("Trending");
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <NavBar />
      <div className="searchBar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <Section setStatus={setStatus} setSearch={setSearch} />
      <Gighy status={status} search={search} />
    </div>
  );
};

export default App;
