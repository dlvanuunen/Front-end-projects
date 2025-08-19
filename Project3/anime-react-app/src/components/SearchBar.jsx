import { useEffect, useState } from "react";
import { getAnime } from "../API";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    console.log("Searchinput changed to:" + searchInput);
  }, [searchInput]);

  const searchForAnime = (searchInput) => {
        getAnime(searchInput)
  };

  return (
    <input
      onChange={(e) => setSearchInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          searchForAnime(searchInput);
        }
      }}
      placeholder="Type anime here"
    ></input>
  );
}

export default SearchBar;

