import React, { useState, useEffect } from "react";
import shortid from "shortid";

import { useDispatch, useSelector } from "react-redux";
import { searchResults } from "../../reducers/selectors/selectors";
import { fetchRepresentatives } from "../../actions/search_actions";
import SearchResult from "./search_result";
import SearchIndex from "./search_index";
import SearchSidebar from "./search_sidebar";

const SearchLanding = ({ location }) => {
  const dispatch = useDispatch();
  const initialLevels = {
    federal: true,
    state: true,
    county: true,
    local: true,
  };

  const falseLevels = {
    federal: false,
    state: false,
    county: false,
    local: false,
  };

  const initialIssues = {
    justice: true,
    education: true,
    legislation: true,
  };

  const falseIssues = {
    justice: false,
    education: false,
    legislation: false,
  };

  const [levels, setLevels] = useState(initialLevels);
  const [issues, setIssues] = useState(initialIssues);
  const {
    address,
    officialsObj,
    officesObj,
    levelsObj,
  } = useSelector((state) => searchResults(state));

  const setState = () => {
    const lvls = location.search.match(/&levels=(.+)&/)[1].split("%20");
    const iss = location.search.match(/&issues=(.+)$/)[1].split("%20");

    let newLvls = Object.assign({}, falseLevels);
    let newIss = Object.assign({}, falseIssues);
    lvls.forEach((l) => {
      if (l === "all") {
        newLvls = Object.assign({}, initialLevels);
      } else {
        newLvls[l] = true;
      }
    });
    iss.forEach((i) => {
      if (i === "all") {
        newIss = Object.assign({}, initialIssues);
      } else {
        newIss[i] = true;
      }
    });
    setLevels(newLvls);
    setIssues(newIss);
  };

  useEffect(() => {
    const address = location.search.match(/\?address=(.+)&lev/)[1];
    dispatch(fetchRepresentatives(address)).then(setState());
  }, []);

  // useEffect(() => {
  //   filterOffices();
  // }, [levelsObj]);

  // useEffect(() => {
  //   setState();
  // }, [location.search]);

  const handleToggle = (type, name) => () => {
    if (type === "levels") {
      const bool = levels[name];
      setLevels({ ...levels, [name]: !bool });
    } else {
      const bool = issues[name];
      setIssues({ ...issues, [name]: !bool });
    }
  };

  const { federal, state, county, local } = levels;

  const getOfficials = (id, office) =>
    officesObj[id].officials.map((o) => (
      <SearchResult
        key={shortid.generate()}
        official={officialsObj[o]}
        office={office}
      />
    ));

  const getOffices = (lvl) => {
    if (levelsObj[lvl]) {
      return levelsObj[lvl].map((oId) =>
        oId === undefined ? null : (
          <li key={shortid.generate()}>
            <ul>{getOfficials(oId, officesObj[oId].name)}</ul>
          </li>
        )
      );
    } else {
      return <li>Sorry, we couldn't find data for this level!</li>;
    }
  };

  return (
    <div className="search-landing">
      <SearchSidebar
        levels={levels}
        handleToggle={handleToggle}
        address={address}
      />
      <SearchIndex
        levels={levels}
        getOffices={getOffices}
        levelsObj={levelsObj}
      />
    </div>
  );
};

export default SearchLanding;
