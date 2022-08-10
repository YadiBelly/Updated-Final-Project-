import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
      <Link class="navbar-brand p-2" to="/calendar">
        Schedule Appointment
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link p-2" to="/">
              <i class="fa fa-home fa-2x p-2" aria-hidden="true"></i>
              Home
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link p-2" to="/carinfo">
              <i class="fa fa-car fa-2x p-2" aria-hidden="true"></i>
              Update Auto <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2" href="#">
              <i class="fa fa-calendar fa-2x p-2" aria-hidden="true"></i>
              Calendar
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2" href="#">
              <i class="fa fa-search fa-2x p-2" aria-hidden="true"></i>
              Roadside assistance
            </a>
          </li>
          <li class="nav-item icon">
            <Link class="nav-link p-2 icon" to="/createaccount">
              <i
                class="fa fa-user-circle fa-2x p-2 icon"
                aria-hidden="true"
              ></i>
              Create Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
