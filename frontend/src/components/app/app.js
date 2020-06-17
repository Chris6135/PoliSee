import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import HeaderContainer from "../headandfoot/HeaderContainer";
import Footer from '../headandfoot/Footer'

function App() {
  return (
    <div className="App">
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route path="/" component={HeaderContainer} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
