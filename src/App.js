import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { ErrorPage } from "./components/error-page/ErrorPage";
import { NavbarTriggerButton } from "./components/navbar/NavbarTriggerButton";
import { ToDoApp } from "./components/todoapp/ToDoApp";
import { MovieApp } from "./components/movieapp/MovieApp";
import { ToDoAppProvider } from "./components/todoapp/ToDoAppContext";
import { ToastProvider } from "react-toast-notifications";
import { MoviePage } from "./components/movieapp/MoviePage";
import { TeslaRangeCalculator } from "./components/teslarangecalculator/TeslaRangeCalculator";

function App () {
  return (
    <ToastProvider autoDismiss placement="bottom-right">
      <Router>
        <NavbarTriggerButton />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todo-app">
            <ToDoAppProvider>
              <ToDoApp />
            </ToDoAppProvider>
          </Route>
          <Route exact path="/movie-app">
            <MovieApp />
          </Route>
          <Route path="/movie-app/movie/:movieID">
            <MoviePage />
          </Route>
          <Route path="/tesla-range-calculator">
            <TeslaRangeCalculator />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
