import React from "react";
import "../index.css";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
