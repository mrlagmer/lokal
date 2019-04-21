import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

// route components
import AppContainer from "../../ui/App.js";
import ExperienceForm from "../../ui/ExperienceForm";
import AuthPageSignIn from "../../ui/LoginForm";
import AuthPageJoin from "../../ui/RegisterForm";
import Experiences from "../../ui/Experiences";
import AboutUs from "../../ui/pages/aboutus";

const browserHistory = createBrowserHistory();

export const RenderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/experience" component={ExperienceForm} />
      <Route exact path="/experiences" component={Experiences} />
      <Route exact path="/signin" component={AuthPageSignIn} />
      <Route exact path="/join" component={AuthPageJoin} />
      <Route exact path="/about" component={AboutUs} />
    </Switch>
  </Router>
);
