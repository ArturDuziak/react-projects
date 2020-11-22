import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { ErrorPage } from "./components/error-page/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
