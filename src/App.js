import { useState, useEffect } from "react";
import Gighy from "./components/Giphy";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Section from "./components/Section";

import "./App.css";

const App = () => {
  const [status, setStatus] = useState("Trending");
  //  ^-----status includes: Trending, Search, Liked ones and Favorites
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) setStatus("Search");
  }, [search]);

  return (
    <div className="App">
      <div style={{ zIndex: 5 }}>
        <NavBar />
      </div>
      <div className="searchBar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <Section setStatus={setStatus} setSearch={setSearch} />
      <Gighy status={status} search={search} />
    </div>
  );
};

export default App;
