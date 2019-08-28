import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as Layouts from "./App/Layouts";
import * as Containers from "./App/Containers";

function App() {
  return (
    <Router>
      <Switch>
        <Layouts.Private exact path="/" component={Containers.Home} />
        <Layouts.Private exact path="/order" component={Containers.Order} />
        <Layouts.Public exact path="/login" component={Containers.Login} />
      </Switch>
    </Router>
  );
}

export default App;
