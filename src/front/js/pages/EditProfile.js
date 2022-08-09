import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { UploadImages } from "../component/UploadImages";

export const EditProfile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="edit-box text-center">
      <div className="p-5 d-flex justify-content-spacebetween row">
        <div className="col-6 mb-3">
          <input
            className="w-50"
            type="text"
            placeholder="Username/Email"
            name="fname"
          />
        </div>
        <div className="col-6 mb-3">
          <input
            className="w-50"
            type="text"
            placeholder="Password"
            name="fname"
          />
        </div>
        <div className="col-6 mb-3">
          <input
            className="w-50"
            type="text"
            placeholder="First Name"
            name="fname"
          />
        </div>
        <div className="col-6 mb-3">
          <input
            className="w-50"
            type="text"
            placeholder="Last Name"
            name="fname"
          />
        </div>
        <div className="col-6 mb-3">
          <input
            className="w-50"
            type="text"
            placeholder="Phone"
            name="fname"
          />
        </div>
        <div className="col-6 mb-3">
          <input
            className="w-50"
            type="text"
            placeholder="State/Zip code"
            name="fname"
          />
        </div>
        <button
          className="w-50 btn submit-btn btn-primary"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  match: PropTypes.object,
};
