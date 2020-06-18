import React from "react";
import {Route} from "react-router-dom";
import {AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../Splash"
import Footer from "./footer";
import PoliticianShow from "../politician/politician_show"


function App() {
  return (
    <div className="app">
      <Route exact path={["/"]} component={Splash} />
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route path="/politician/:id" component={ PoliticianShow } />
      <Footer />
    </div>
  );
}

export default App;
