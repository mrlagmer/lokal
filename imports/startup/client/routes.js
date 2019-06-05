import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

// route components
import AppContainer from "../../ui/App.js";
import ExperienceForm from "../../ui/ExperienceForm";
import AuthPageSignIn from "../../ui/LoginForm";
import AuthPageJoin from "../../ui/RegisterForm";
import Experiences from "../../ui/Experiences";
import InfoPage from "../../ui/components/InfoPage";
import AboutText from "../../ui/pages/About";
import { privacy } from "../../ui/pages/Privacy";
import { CancelText } from "../../ui/pages/Cancel";
import { TandCText } from "../../ui/pages/TandC";
import { CoDText } from "../../ui/pages/Cod";

const browserHistory = createBrowserHistory();

export const RenderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/experience" component={ExperienceForm} />
      <Route exact path="/experiences" component={Experiences} />
      <Route
        exact
        path="/about"
        render={props => (
          <InfoPage {...props} title="About Us" text={AboutText.AboutText} />
        )}
      />
      <Route
        exact
        path="/privacy"
        render={props => <InfoPage {...props} title="Privacy" text={privacy} />}
      />
      <Route
        exact
        path="/code-of-conduct"
        render={props => (
          <InfoPage {...props} title="Code of Conduct" text={CoDText} />
        )}
      />
      <Route
        exact
        path="/cancelation-policy"
        render={props => (
          <InfoPage {...props} title="Cancelation Policy" text={CancelText} />
        )}
      />
      <Route
        exact
        path="/terms-conditions"
        render={props => (
          <InfoPage {...props} title="Terms & Condictions" text={TandCText} />
        )}
      />
    </Switch>
  </Router>
);
