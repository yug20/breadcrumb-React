import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import Home from "./App";

ReactDOM.render(
  <HashRouter>
    <Home />
  </HashRouter>,
  document.getElementById('root'),
);