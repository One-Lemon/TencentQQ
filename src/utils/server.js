import webSocket from "socket.io-client";
// import React from "react";

const socket = webSocket("http://localhost:4003");
export default socket;

/**
 * 将socket封装入react
 */
// React.socket = socket;
// React.socket.emit("login", "test");
