import { useEffect, useState } from "react";

import './Search.css'

function Search(props) {
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    if (props.setSearch) {
      const timeoutId = setTimeout(() => props.setSearch(inputValue), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [inputValue]);

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
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
}

export default Search;
