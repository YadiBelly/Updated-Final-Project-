import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Scheduler, { Resource } from "devextreme-react/scheduler";

export const Notfound = () => {
  return (
    <>
      <div>
        <br></br>
      </div>
      <div class="text-center">
        <h4>404 Not Found!</h4>
        <div class="alert alert-success" role="alert">
          We apologized for any inconvience this may have caused. Please{" "}
          <a href="/" class="alert-link">
            click here
          </a>{" "}
          to go back to the home page.
        </div>
      </div>
    </>
  );
};
