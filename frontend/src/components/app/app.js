import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import HeaderContainer from "../headandfoot/HeaderContainer";

function App() {
  return (
    <div className="App">
      {/* <AuthRoute exact path={["/register", "/login"]} component={Session} /> */}
      <Route path="/" component={HeaderContainer} />
    </div>
  );
}

export default App;
