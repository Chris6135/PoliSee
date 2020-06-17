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
      <div style={{height: "103.5px", color: "blue", width: "100vw"}}/> 
      {/* Remove above when header is present */}
      <Route exact path={["/"]} component={Splash} />
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route exact path="/politician-show-test" component={ PoliticianShow } />
      {/* Change above when paths determined */}
      <Footer />
    </div>
  );
}

export default App;
