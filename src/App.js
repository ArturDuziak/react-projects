import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { ErrorPage } from "./components/error-page/ErrorPage";
import { NavbarTriggerButton } from "./components/navbar/NavbarTriggerButton";
import { ToDoApp } from "./components/todoapp/ToDoApp";
import { ToDoAppProvider } from "./components/todoapp/ToDoAppContext";

function App() {
  return (
    <Router>
      <NavbarTriggerButton />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/TODO-App">
          <ToDoAppProvider>
            <ToDoApp />
          </ToDoAppProvider>
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
