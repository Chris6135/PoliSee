import React from "react";
import {Route} from "react-router-dom";
import {AuthRoute, ProtectedRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../Splash";
import Footer from "./footer";

import Edit from "../user/Edit";
import InfoEditContainer from "../user/InfoEditContainer";
import InterestEditContainer from "../user/InterestEditContainer";
// import RepEdit from "../user/RepEdit";
// import ContactEdit from "../user/ContactEdit";

import HeaderContainer from "../headandfoot/HeaderContainer";


// import HeaderContainer from "../headandfoot/HeaderContainer";

function App() {
  return (
    <div className="app">
      <Route path="/" component={HeaderContainer} />
      <ProtectedRoute exact path = "/edit" component={Edit} />
      <ProtectedRoute path = "/edit/info" component={InfoEditContainer}/>
      <ProtectedRoute path="/edit/interests" component={InterestEditContainer} />

      {/* <Route exact path={["/"]} component={Splash} /> */}
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Footer />
    </div>
  );
}

export default App;

