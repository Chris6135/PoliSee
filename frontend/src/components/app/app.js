import React from "react";
// import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";

function App() {
  return (
    <div className="App">
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
    </div>
  );
}

export default App;
