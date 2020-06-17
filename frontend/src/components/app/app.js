import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import Session from "../session/session";
// import Search from "../Search";
import SearchBar from "../search/search_bar";
import SearchIndex from "../search/search_index";

function App() {
  return (
    <div className="App">
      <AuthRoute exact path={["/register", "/login"]} component={Session} />
      <Route path="/search" component={SearchBar} />
      <Route path="/results" component={SearchIndex} />
    </div>
  );
}

export default App;
