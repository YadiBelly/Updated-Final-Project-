import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineBell } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import logo from "../../img/logo.png";
//import vmt from "../../img/vmt.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    // <img className="logo" src={logo}></img>

    <div className="text-center mt-5">
      <div className="container-fluid">
        <h1 className="header"> Vehicle Maintenance Tracker</h1>

        <img className="logo" src={logo}></img>

        <Link to="/calendar" className="navbar-brand">
          Schedule appointment
        </Link>
      </div>

      <p className="uppercase mt-5"></p>

      <div className="belle">
        <AiOutlineBell className="bell" alt="..." />
        <p className="p1">
          <strong>
            This application is to help individuals with alerts on a vehicle
            with any necessary maintenance. Individuals , who are not
            knowledgeable on vehicles or sufficient with updated maintenance can
            now keep track of the last and next maintenance needed along with
            obtaining details on why a particular service is needed.
          </strong>
        </p>
      </div>
      <div className="quee">
        <BsQuestionLg className="que" />
        <p className="p2">
          <strong>
            This application is different from others because it allows users to
            stay on schedule with auto services. This app also lets the user
            know the reason for the service and how it can benefit the vehicle.
          </strong>
        </p>

        <div className="body">
          <div className="text-center mt-5">
            <div className="container-fluid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
