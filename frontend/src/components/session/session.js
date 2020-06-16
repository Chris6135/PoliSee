import React from "react";
import SessionForm from "./session_form";

const Session = ({ match }) => (
  <div className="session-page">
    <div className="session-form-backdrop">
      <SessionForm match={match} />
    </div>
  </div>
);

export default Session;
