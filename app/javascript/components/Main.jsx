import React from "react";
import Index from "./Index";
import Follow from "./Follow";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  HashRouter
} from "react-router-dom";

class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class Main extends React.Component {
  render() {
    console.log("Component");
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/follow" component={Follow} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Main;
