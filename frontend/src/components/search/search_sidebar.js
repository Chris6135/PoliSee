import React from "react";

const SearchSidebar = ({
  levels,
  issues,
  toggleOption,
  toggleDesc,
  descending,
  address,
  divisions,
}) => {
  const { federal, state, county, local } = levels;
  const { education, justice, legislation } = issues;

  const ocdIds = Object.keys(divisions);

  const cdId = ocdIds.find((id) => id.match(/\/cd:(\d+)$/));
  const coId = ocdIds.find((id) => id.match(/\/county:(\w+)$/));
  const cd = divisions[cdId];
  const countyDiv = divisions[coId];

  return (
    <div className="search-sidebar">
      <header className="search-sidebar-head">
        <div className="search-sidebar-head-left">
          <h1>{`${address.city}, ${address.state} ${address.zip}`}</h1>
          <h2>{countyDiv ? countyDiv.name : ""}</h2>
          <h3>{cd ? cd.name : ""}</h3>
          <div className="search-sidebar-head-left-county"></div>
          <div className="search-sidebar-head-left-district"></div>
        </div>
        <div className="search-sidebar-head-right">
          <h6>Order By</h6>
          <button
            className={
              descending
                ? "sidebar-order-toggle selected"
                : "sidebar-order-toggle"
            }
            onClick={toggleDesc}
          >
            Trickle Down
          </button>
          <button
            className={
              descending
                ? "sidebar-order-toggle selected"
                : "sidebar-order-toggle"
            }
            onClick={toggleDesc}
          >
            From the Ground Up
          </button>
        </div>
      </header>
      <div className="search-sidebar-district-info">
        <div className="search-sidebar-leaning"></div>
        <div className="search-sidebar-election"></div>
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