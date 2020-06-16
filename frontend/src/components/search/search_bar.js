import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepresentatives } from "../../actions/search_actions";

const SearchBar = ({ history }) => {
  const [address, setAddress] = useState("");
  const [levels, setLevels] = useState([]);
  const [issues, setIssues] = useState([]);
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
    return type === "levels"
      ? setLevels(levels.concat(e.target.value))
      : setIssues(issues.concat(e.target.value));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-wrapper">
        <input
          type="text"
          className="address-input"
          value={address}
          onChange={handleChange}
          placeholder="ENTER YOUR ADDRESS TO BEGIN"
        />
        <select
          defaultValue={levels}
          name="level"
          size="4"
          multiple
          onChange={handleOptions("levels")}
        >
          <option value="country">Federal</option>
          <option value="administrativeArea1">State</option>
          <option value="administrativeArea2">County</option>
          <option value="locality subLocality1 subLocality2">Local</option>
        </select>
        <select
          defaultValue={issues}
          name="issue"
          size="3"
          multiple
          onChange={handleOptions("issues")}
        >
          <option value="justice">Justice</option>
          <option value="education">Education</option>
          <option value="legislation">Legislation</option>
        </select>
        <button type="submit">GO</button>
      </div>
      {error && <span className="err-msg">Please enter an address</span>}
    </form>
  );
};

export default SearchBar;
