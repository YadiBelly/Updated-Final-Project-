import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import logo from "../../img/logo.png";
//import vmt from "../../img/vmt.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="container-fluid">
        <h1 className="header"> Vehicle Maintenance Tracker</h1>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 text">
              <p className="p1">
                <i class="fa fa-bell fa-2x p-2" aria-hidden="true"></i>
                <strong>
                  This application is to help individuals with alerts on a
                  vehicle with any necessary maintenance. Individuals , who are
                  not knowledgeable on vehicles or sufficient with updated
                  maintenance can now keep track of the last and next
                  maintenance needed along with obtaining details on why a
                  particular service is needed.
                </strong>
              </p>
              <p className="p2">
                <i class="fa fa-question fa-2x p-2" aria-hidden="true"></i>
                <strong>
                  This application is different from others because it allows
                  users to stay on schedule with auto services. This app also
                  lets the user know the reason for the service and how it can
                  benefit the vehicle.
                </strong>
              </p>
            </div>
            <div className="col-4 image">
              <img className="logo" src={logo}></img>
            </div>
          </div>
        </div>
      </div>

      <p className="uppercase mt-5"></p>
    </div>
  );
};
