import React from "react";
import { useDispatch } from "react-redux";

import { saveRepresentative } from "../../actions/search_actions";

const SearchResult = ({ official, history }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const payload = Object.assign({}, official);
    delete payload.id;
    dispatch(saveRepresentative(payload)).then((action) =>
      history.push(`/officials/${action.official._id}`)
    );
  };

  return (
    <div className="search-result" onClick={handleClick}>
      <header>
        <h2>{official.name}</h2>
        <h3>{official.office}</h3>
      </header>
      <img src={official.photoUrl} alt="" />
      <footer>
        <h2>{official.phone || ""}</h2>
        <h3>{`Contact ${official.name}`}</h3>
      </footer>
    </div>
  );
};

export default SearchResult;
