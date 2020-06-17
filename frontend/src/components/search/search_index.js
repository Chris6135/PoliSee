import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { officesByLevel, officials } from "../../reducers/selectors/selectors";

const SearchIndex = ({ location }) => {
  // const dispatch = useDispatch();
  const o = useSelector((state) => officesByLevel(state));
  const pols = useSelector((state) => officials(state));
  const [levels, setLevels] = useState([]);
  const [issues, setIssues] = useState([]);

  // useEffect(() => {
  //   setOffices(o);
  // }, [o]);

  useEffect(() => {
    const lvls = location.search.match(/\?levels=(.+)&/)[1];
    const iss = location.search.match(/\&issues=(.+)$/)[1];
    setLevels(lvls === "all" ? [] : lvls.split("%20"));
    setIssues(iss === "all" ? [] : iss.split("%20"));
  }, [location.search]);

  // return <div className="search-index">{levels.map(l => (<div>
  //   {}
  // </div>))}</div>;
};

export default SearchIndex;
