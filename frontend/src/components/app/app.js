import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../splash/Splash_Container";
import SearchLanding from "../search/search_landing";
import Footer from "./footer";
import PoliticianShow from "../politician/politician_show";
import Edit from "../user/Edit";
import InfoEditContainer from "../user/InfoEditContainer";
import InterestEditContainer from "../user/InterestEditContainer";
import HeaderContainer from "../header/HeaderContainer";
import RepEditContainer from "../user/RepEditContainer";
import ContactEdit from "../user/contact";
import aboutUs from "../about/about_container"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={["/"]} component={Splash} />
        <Route component={HeaderContainer} />
      </Switch>
      <ProtectedRoute exact path="/edit" component={Edit} />
      <ProtectedRoute path="/edit/info" component={InfoEditContainer} />
      <ProtectedRoute
        path="/edit/interests"
        component={InterestEditContainer}
      />
      <ProtectedRoute
        path="/edit/representatives"
        component={RepEditContainer}
      />
      <ProtectedRoute path="/edit/contact" component={ContactEdit} />

      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route path="/search" component={SearchLanding} />
      <Route path="/officials/:id" component={PoliticianShow} />
      <Route path ="/about" component={aboutUs}></Route>

      <Footer />
    </div>
  );
}

export default App;
