import React from "react";
import {Route,Switch} from "react-router-dom";
import {AuthRoute, ProtectedRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../Splash";
import Footer from "./footer";
import PoliticianShow from "../politician/politician_show"
import Edit from "../user/Edit";
import InfoEditContainer from "../user/InfoEditContainer";
import InterestEditContainer from "../user/InterestEditContainer";
// import RepEdit from "../user/RepEdit";
// import ContactEdit from "../user/ContactEdit";
import HeaderContainer from "../headandfoot/HeaderContainer";

function App() {
  return (
    <div className="app">

      <Switch> 
        <Route exact path={["/"]} component={Splash} />
       < Route component={HeaderContainer}/>
      </Switch>
      <ProtectedRoute exact path = "/edit" component={Edit} />
      <ProtectedRoute path = "/edit/info" component={InfoEditContainer}/>
      <ProtectedRoute path="/edit/interests" component={InterestEditContainer} />
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route path="/politician/:id" component={ PoliticianShow } />


      <Footer />
    </div>
  );
}

export default App;

