import React from "react";
// import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import Search from "../Search";

function App() {
  return (
    <div className="App">
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <AuthRoute path={"/"} component={Search} />

    </div>
  );
}

export default App;
