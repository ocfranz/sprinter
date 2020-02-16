import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./../scss/main.scss";


import Demo from './pages/Demo';
render(
  <Router>
    <Switch>
      <Route exact path="/" component={Demo} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
