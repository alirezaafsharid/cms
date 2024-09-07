// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div>{router}</div>
    </>
  );
}

export default App;
