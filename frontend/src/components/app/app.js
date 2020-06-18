import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../Splash";
import SearchLanding from "../search/search_landing";
import Footer from "./footer";

// import HeaderContainer from "../headandfoot/HeaderContainer";

function App() {
  return (
    <div className="app">
      <Route exact path={["/"]} component={Splash} />
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route path="/search" component={SearchLanding} />

      {/* <Route path="/" component={HeaderContainer} /> */}

      <Footer />
    </div>
  );
}

export default App;
