import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMember, fetchSenators } from "../../actions/propublica_actions";

const SearchSidebar = ({
  levels,
  issues,
  toggleOption,
  toggleDesc,
  descending,
  address,
  divisions,
}) => {
  const dispatch = useDispatch();

  const { federal, state, county, local } = levels;
  const { education, justice, legislation } = issues;

  const [member, setMember] = useState(false);
  const [senators, setSenators] = useState(false);

  const ocdIds = Object.keys(divisions);

  const cdId = ocdIds.find((id) => id.match(/\/cd:(\d+)$/));
  const coId = ocdIds.find((id) => id.match(/\/county:(\w+)$/));
  const cd = divisions[cdId];
  const countyDiv = divisions[coId];

  useEffect(() => {
    if (cdId && address.state && !member) {
      const cdNum = cdId.match(/\/cd:(\d+)$/)[1];
      dispatch(fetchMember(address.state, cdNum)).then(setMember(true));
    }
    if (address.state && !senators) {
      dispatch(fetchSenators(address.state)).then(setSenators(true));
    }
  }, [cdId]);

  return (
    <div className="search-sidebar">
      <header className="search-sidebar-head">
        <div className="search-sidebar-head-left">
          <h1>{`${address.city}, ${address.state} ${address.zip}`}</h1>
          <h2>{countyDiv ? countyDiv.name : ""}</h2>
          <h3>{cd ? cd.name : ""}</h3>
        </div>
        <div className="search-sidebar-head-right">
          <h6>Order By</h6>
          <button
            className={
              descending
                ? "sidebar-order-toggle"
                : "sidebar-order-toggle selected"
            }
            onClick={toggleDesc}
          >
            LOCAL
          </button>
          <button
            className={
              descending
                ? "sidebar-order-toggle selected"
                : "sidebar-order-toggle"
            }
            onClick={toggleDesc}
          >
            FEDERAL
          </button>
        </div>
      </header>
      <div className="search-sidebar-district-info">
        <div className="search-sidebar-leaning"></div>
        <div className="search-sidebar-election">
          <div className="alert">!</div>
          <div className="elections">
            <h3>Election day is coming up on</h3>
            <h2>Tuesday November 3rd, 2020</h2>
          </div>
        </div>
      </div>
      <div className="search-sidebar-issues">
        <button
          className={
            justice ? "sidebar-issues-btn selected" : "sidebar-issues-btn"
          }
          onClick={toggleOption("issues", "justice")}
        >
          Justice
        </button>
        <button
          className={
            education ? "sidebar-issues-btn selected" : "sidebar-issues-btn"
          }
          onClick={toggleOption("issues", "education")}
        >
          Education
        </button>
        <button
          className={
            legislation ? "sidebar-issues-btn selected" : "sidebar-issues-btn"
          }
          onClick={toggleOption("issues", "legislation")}
        >
          Legislation
        </button>
      </div>
      <div className="search-sidebar-levels">
        <button
          className={
            federal ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={toggleOption("levels", "federal")}
        >
          Federal
        </button>
        <button
          className={
            state ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={toggleOption("levels", "state")}
        >
          State
        </button>
        <button
          className={
            county ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={toggleOption("levels", "county")}
        >
          County
        </button>
        <button
          className={
            local ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={toggleOption("levels", "local")}
        >
          Local
        </button>
      </div>
    </div>
  );
};

export default SearchSidebar;
