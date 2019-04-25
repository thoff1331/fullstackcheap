import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Account from "./components/account";
import Signup from "./components/signUp";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/account" component={Account} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
