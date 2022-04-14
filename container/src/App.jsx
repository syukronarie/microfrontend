import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "counter/Counter";

import "./index.css";
import Routers from "./routers";

const App = () => {
  return <Routers />;
};
ReactDOM.render(<App />, document.getElementById("app"));
