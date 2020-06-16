import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";
import SearchBar from "../search/search_bar";

function App() {
  return (
    <div className="App">
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route exact path="/search" component={SearchBar} />
    </div>
  );
}

export default App;
