// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes);
  return <div>{router}</div>;
}

export default App;
