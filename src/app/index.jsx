import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./../scss/main.scss";


import Demo from './pages/Demo';
import Home from './pages/Home';
import Team from './pages/Team';
import Signup from './pages/Signup';
render(
  <Router>
    <Switch>
      <Route exact path="/" component={Demo} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
