import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { clearEntities } from "../../actions/search_actions";

const Edit = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearEntities());
  }, []);

  return (
    <div className="user-edit">
      <div className="user-edit-backdrop">
        <div className="user-edit-options">
          <h1></h1>
          <Link to="/edit/representatives">Edit your representatives</Link>
          <Link to="/edit/interests">Edit your interests</Link>
          <Link to="/edit/contact">Edit your contact settings</Link>
          <Link to="/edit/info">Edit your information</Link>
        </div>
      </div>
    </div>
  );
};

export default Edit;
