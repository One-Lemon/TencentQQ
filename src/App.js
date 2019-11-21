import React, { Component } from "react";
import Index from "./pages/index";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

/**
 * 路由设置
 */
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Index} />
          {/* <Route path="/talk" component={} /> */}
        </Switch>
      </Router>
    );
  }
}
