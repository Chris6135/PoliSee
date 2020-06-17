import React from "react";

const SearchIndex = ({ levelsObj, levels, getOffices }) => {
  const { federal, state, county, local } = levels;
  return (
    <div className="search-index">
      {Boolean(Object.keys(levelsObj).length) && (
        <ul>
          {federal && (
            <li>
              <h1>FEDERAL</h1>
              <ul>{getOffices("federal")}</ul>
            </li>
          )}
          {state && (
            <li>
              <h1>STATE</h1>
              <ul>{getOffices("state")}</ul>
            </li>
          )}
          {county && (
            <li>
              <h1>COUNTY</h1>
              <ul>{getOffices("county")}</ul>
            </li>
          )}
          {local && (
            <li>
              <h1>LOCAL</h1>
              <ul>{getOffices("local")}</ul>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchIndex;
