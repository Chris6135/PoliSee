import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {withRouter} from "react-router-dom";

import { fetchRepresentatives } from "../../actions/search_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ history }) => {
  const [address, setAddress] = useState("");
  const [levels, setLevels] = useState([]);
  const [issues, setIssues] = useState([]);
  const [hidden, setHidden] = useState({issues: true, levels: true})
  const [selected, setSelected] = useState({ issues: [0], levels: [0] })
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.trim().length) {
      const lvls = levels.join("%20").replace(/\s/, "%20") || "all";
      const issu = issues.join("%20") || "all";
      return dispatch(fetchRepresentatives(address)).then(
        history.push(`/results?levels=${lvls}&issues=${issu}`)
      );
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => setAddress(e.target.value);

  const handleOptions = (type) => (e) => {
    const value = e.target.getAttribute("value");
    if ( type === "levels") {
      if ( value === "all" ) {
        setLevels(["all"])
      } else if ( !levels.includes(value) ) {
        let newLevels = levels.includes("all") ? [value] : levels.concat(value)
        setLevels(newLevels)
      } else {
        const i = levels.indexOf(value)
        levels.splice(i,1)
      }
    } else if ( value === "all" ) {
      setIssues(["all"])
      // setAll({...all, issues: true})
    } else if ( !issues.includes(value) ) {
      let newIssues = issues.includes("all") ? [value] : issues.concat(value)
      // setAll({...all, issues: false})
      setIssues(newIssues)
    } else {
      const i = issues.indexOf(value)
      issues.splice(i,1)
    }
  };

  const levelOpts = [
    { name: "FEDERAL", val: "country" },
    { name: "STATE", val: "administrativeArea1"},
    { name: "COUNTY", val: "administrativeArea2"},
    { name: "LOCAL", val: "locality subLocality1 subLocality2"}
  ].map( level => {
    return (
      <li key={level.name}
        className={ levels.includes(level.val) ? "selected" : "" }
        value={ level.val }
        onClick={ e => handleOptions("levels")(e) }
        >
        { level.name }
      </li>
    )
  } )
  levelOpts.unshift(
    <li key="all"
      value="all"
      className={ levels.includes("all") ? "selected" : "" }
      onClick={ e => handleOptions("levels")(e) }>
        ALL LEVELS
    </li>
  )

  const issueOpts = [
    { name: "JUSTICE", val: "justice"},
    { name: "EDUCATION", val: "education"},
    { name: "LEGISLATION", val: "legislation"}
  ].map( issue => {
    return (
      <li key={issue.name}
        value={ issue.val }
        className={ issues.includes(issue.val) ? "selected" : "" }
        onClick={ e => handleOptions("issues")(e) }
        >
        { issue.name }
      </li>
    )
  } )
  issueOpts.unshift(
    <li key="all"
      value="all"
      className={ issues.includes("all") ? "selected" : "" }
      onClick={ e => handleOptions("issues")(e) }>
        ALL ISSUES
    </li>
  )

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <div className="search-icon">
          <FontAwesomeIcon icon="search" />
        </div>
        <input
          type="text"
          className="address-input"
          value={address}
          onChange={handleChange}
          placeholder="ENTER YOUR ADDRESS TO BEGIN"
        />
        <div className="options-container">
          
          <div
            className="select levels"
            tabIndex="1"
            onFocus={ () => setHidden({ ...hidden, levels: false }) }
            onBlur={ () => setHidden({ ...hidden, levels: true }) }>
              <span>
                ALL <br/> LEVELS
                <div className="triangle" />
              </span>
              <ul className={ hidden.levels ? "hidden" : "" }>
                { levelOpts }
              </ul>

          </div>

          <div
            className="select issues"
            tabIndex="2"
            onFocus={ () => { 
              setHidden({ ...hidden, issues: false })
             } }
            onBlur={ () => {
              setHidden({ ...hidden, issues: true }) 
            }}
            >
              <span>
                ISSUES
                <div className="triangle" />
              </span>
              <ul className={ hidden.issues ? "hidden" : "" }>
                { issueOpts }
              </ul>

          </div>

          <button type="submit">GO</button>
        </div> 
      </div>
      {error && <span className="err-msg">Please enter an address</span>}
    </form>
  );
};

export default withRouter(SearchBar);
