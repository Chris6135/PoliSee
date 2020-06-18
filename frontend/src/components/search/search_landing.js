import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";

import { searchResults } from "../../reducers/selectors/selectors";
import { fetchRepresentatives } from "../../actions/search_actions";
import SearchResult from "./search_result";
import SearchIndex from "./search_index";
import SearchSidebar from "./search_sidebar";

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

const issueMap = {
  justice: ["judge", "highestCourtJudge"],
  education: ["schoolBoard"],
  legislation: ["specialPurposeOfficer", "governmentOfficer"],
  all: [
    "headOfGovernment",
    "deputyHeadOfGovernment",
    "headOfState",
    "legislatorLowerBody",
    "legislatorUpperBody",
    "executiveCouncil",
    "all",
  ],
};

const SearchLanding = ({ location }) => {
  const dispatch = useDispatch();
  const {
    address,
    officials,
    offices,
    divisions,
    levelsObj,
  } = useSelector((state) => searchResults(state));

  const [levels, setLevels] = useState(initialLevels);
  const [issues, setIssues] = useState(initialIssues);
  const [desc, setDesc] = useState(true);

  const setSlice = (type) => {
    const lvls = type === "levels";
    const options = lvls
      ? location.search.match(/&levels=(.+)&/)[1].split("%20")
      : location.search.match(/&issues=(.+)$/)[1].split("%20");

    let newState = Object.assign({}, lvls ? falseLevels : falseIssues);
    options.forEach((o) => {
      if (o === "all") {
        newState = Object.assign({}, lvls ? initialLevels : initialIssues);
      } else {
        newState[o] = true;
      }
    });
    lvls ? setLevels(newState) : setIssues(newState);
  };

  const setState = () => {
    setSlice("levels");
    setSlice("issues");
  };

  useEffect(() => {
    const address = location.search.match(/\?address=(.+)&lev/)[1];
    dispatch(fetchRepresentatives(address)).then(setState());
  }, []);

  const toggleOption = (type, name) => () => {
    if (type === "levels") {
      const bool = levels[name];
      setLevels({ ...levels, [name]: !bool });
    } else {
      const bool = issues[name];
      setIssues({ ...issues, [name]: !bool });
    }
  };

  const toggleDesc = () => setDesc(!desc);

  const chosenIssues = Object.keys(issues).filter((k) => issues[k]);
  const allIssues = chosenIssues.length === Object.keys(issues);

  const getOfficials = (id, office) =>
    offices[id].officials.map((o) => {
      if (o === undefined) return null;
      if (allIssues) {
        return (
          <SearchResult
            key={shortid.generate()}
            official={officials[o]}
            office={office}
          />
        );
      }
      const relevant = chosenIssues.some(
        (i) =>
          issueMap[i].some((r) => office.roles.includes(r)) ||
          issueMap["all"].some((r) => office.roles.includes(r))
      );

      return relevant ? (
        <SearchResult
          key={shortid.generate()}
          official={officials[o]}
          office={office}
        />
      ) : null;
    });

  const getOffices = (lvl) => {
    if (levelsObj[lvl]) {
      return levelsObj[lvl].map((oId) =>
        oId === undefined ? null : (
          <li key={shortid.generate()}>
            <ul>{getOfficials(oId, offices[oId])}</ul>
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
        issues={issues}
        toggleOption={toggleOption}
        toggleDesc={toggleDesc}
        address={address}
        divisions={divisions}
        descending={desc}
      />
      <SearchIndex
        levels={levels}
        getOffices={getOffices}
        levelsObj={levelsObj}
        descending={desc}
      />
    </div>
  );
};

export default SearchLanding;
