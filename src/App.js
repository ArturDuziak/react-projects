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

function App() {
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
          {/* Fix me - i added it so the styles can be different in this specific app */}
          <div id="movie-app">
            <Route exact path="/movie-app">
              <MovieApp />
            </Route>
            <Route
              path="/movie-app/movie/:movieID"
              children={<MoviePage />}
            ></Route>
          </div>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
