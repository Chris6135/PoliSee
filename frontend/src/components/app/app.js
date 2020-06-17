import React from "react";
import {Route} from "react-router-dom";
import {AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../Splash"
import Footer from "./footer";


function App() {
  return (
    <div className="app">
      <Route exact path={["/"]} component={Splash} />
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Footer />
    </div>
  );
}

export default App;
