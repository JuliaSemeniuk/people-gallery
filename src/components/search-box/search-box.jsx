import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
};
