import React, { Component } from "react";
import Index from "./pages/index";
import Room from "./pages/room/index";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import "./utils/server";
import webSocket from "socket.io-client";
let socket = webSocket("http://localhost:4003");
React.socket = socket;

/**
 * 路由设置
 */
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/room/:user" component={Room} />
          <Route path="/index" component={Index} />
          <Redirect to="/index" />
        </Switch>
      </Router>
    );
  }
}
