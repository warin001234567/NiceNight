import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import History from "./page/History";
import Suggest from "./page/Suggest";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/suggest" component={Suggest} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// background #343a40
