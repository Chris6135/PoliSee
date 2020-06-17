import React from "react";

const SearchSidebar = ({ levels, issues, handleToggle, address }) => {
  const { federal, state, county, local } = levels;
  const { education, justice, legislation } = issues;

  return (
    <div className="search-sidebar">
      <header className="search-sidebar-head">
        <div className="search-sidebar-head-left">
          <h1>{address.city}</h1>
          <h2>{address.state}</h2>
          <div className="search-sidebar-head-left-county"></div>
          <div className="search-sidebar-head-left-district"></div>
        </div>
        <div className="search-sidebar-head-right">
          <div className="order-by"></div>
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
          onClick={handleToggle("issues", "justice")}
        >
          Justice
        </button>
        <button
          className={
            education ? "sidebar-issues-btn selected" : "sidebar-issues-btn"
          }
          onClick={handleToggle("issues", "education")}
        >
          Education
        </button>
        <button
          className={
            legislation ? "sidebar-issues-btn selected" : "sidebar-issues-btn"
          }
          onClick={handleToggle("issues", "legislation")}
        >
          Legislation
        </button>
      </div>
      <div className="search-sidebar-levels">
        <button
          className={
            federal ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={handleToggle("levels", "federal")}
        >
          Federal
        </button>
        <button
          className={
            state ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={handleToggle("levels", "state")}
        >
          State
        </button>
        <button
          className={
            county ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={handleToggle("levels", "county")}
        >
          County
        </button>
        <button
          className={
            local ? "sidebar-levels-btn selected" : "sidebar-levels-btn"
          }
          onClick={handleToggle("levels", "local")}
        >
          Local
        </button>
      </div>
    </div>
  );
};

export default SearchSidebar;
