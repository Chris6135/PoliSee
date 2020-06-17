import React from "react";
import {Route} from "react-router-dom";
import {AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import Splash from "../Splash"

function App() {
  return (
    <div className="App">
   authComponents
      <Route exact path={["/"]} component={Splash} />
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
    </div>
  );
}

export default App;
