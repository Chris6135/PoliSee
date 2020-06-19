import React from "react";
import shortid from "shortid";

const SearchIndex = ({ levelsObj, levels, getOffices, descending }) => {
  const desc = Object.keys(levels).filter((k) => levels[k]);
  const ordered = descending ? desc : desc.reverse();

  return (
    <div className="search-index">
      {Boolean(Object.keys(levelsObj).length) && (
        <ul>
          {ordered.map((level) => (
            <li key={shortid.generate()}>
              <h1>{level.toUpperCase()}</h1>
              <ul>{getOffices(level)}</ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchIndex;
