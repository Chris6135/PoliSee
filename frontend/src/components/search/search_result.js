import React from "react";

const SearchResult = ({ official, office }) => {
  const [phone] = official.phones ? official.phones : [""];
  return (
    <div className="search-result">
      <header>
        <h2>{official.name}</h2>
        <h3>{office}</h3>
      </header>
      <img src={official.photoUrl} alt="" />
      <footer>
        <h2>{phone}</h2>
        <h3>{`Contact ${official.name}`}</h3>
      </footer>
    </div>
  );
};

export default SearchResult;
