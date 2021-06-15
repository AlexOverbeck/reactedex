import { useState } from "react";

import './Search.css'

function Search() {
  const [search, setSearch] = useState("");

  return (
    <form className="search">
      <label className="search__label" htmlFor="search-input">
        <span className="search__label-text">Search for a pokemon</span>
      </label>
      <input
        id="search-input"
        className="search__input"
        name="search"
        placeholder="Search for a pokemon"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}

export default Search;
