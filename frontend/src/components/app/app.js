import React from "react";

import { AuthRoute } from "../../util/route_util";
import SessionForm from "../session/session_form";

function App() {
  return (
    <div className="App">
      <AuthRoute exact path={["/register", "/login"]} component={SessionForm} />
    </div>
  );
}

export default App;
