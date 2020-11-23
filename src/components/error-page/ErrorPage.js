import React from "react";
import { BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./styles.css";

export const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <BiErrorAlt className="error-icon" />

      <span>Page not found...</span>
      <Link to="/" className="btn">
        Go back home
      </Link>
    </div>
  );
};
