import React from "react";
import SessionForm from "./session_form";

const Session = ({ match, history }) => (
  <div className="session-page">
    <div className="session-form-backdrop">
      <SessionForm match={match} history={history} />
    </div>
  </div>
);

export default Session;
