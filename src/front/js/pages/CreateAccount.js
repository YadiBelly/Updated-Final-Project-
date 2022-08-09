import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

// import { UploadImages } from "../component/UploadImages";

export const CreateAccount = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  //const profileArray = store.profile;
  //*const [newProfile, setNewProfile] = useState({});//*
  const [first_name, setFirstNameValue] = useState("");
  const [last_name, setLastNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [phone, setPhoneValue] = useState("");
  const [zip_code, setStateZipCodeValue] = useState("");
  const history = useHistory();

  function submit() {
    if (
      email == "" ||
      first_name == "" ||
      last_name == "" ||
      password == "" ||
      phone == "" ||
      zip_code == ""
    ) {
      alert("Fields cannot be empty");
    } else {
      actions.createAccount({
        first_name,
        last_name,
        email,
        password,
        phone,
        zip_code,
      });
      history.push("/login");
    }
  }

  return (
    <>
      {/* <form>
        <div class="form-row">
          <div class="row justify-content-center">
            <div class="text-center">
              <h4>Create an account</h4>
            </div>
            <div class="col-4">
              <label for="inputEmail4">First Name</label>
              <input
                type="text"
                onChange={(e) => setFirstNameValue(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="col-4">
              <label for="inputPassword4">Last Name</label>
              <input
                type="text"
                onChange={(e) => setLastNameValue(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="row justify-content-center">
              <div class="col-4">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmailValue(e.target.value)}
                  class="form-control"
                />
              </div>
              <div class="col-4">
                <label for="inputAddress">Zip Code</label>
                <input
                  type="text"
                  onChange={(e) => setStateZipCodeValue(e.target.value)}
                  class="form-control"
                  placeholder="Zip Code"
                />
              </div>
              <div class="row justify-content-center">
                <div class="col-4">
                  <label for="inputEmail4">Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPasswordValue(e.target.value)}
                    class="form-control"
                  />
                </div>
                <div class="col-4">
                  <label for="inputAddress">Phone</label>
                  <input
                    type="text"
                    onChange={(e) => setPhoneValue(e.target.value)}
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button
            type="submit"
            onClick={() => {
              submit();
            }}
            class="btn btn-primary"
          >
            Sign Up
          </button>
          <div>
            <Link to="/forgot">
              <a className="nav-link">Forgot your password?</a>
            </Link>
          </div>
        </div>
      </form> */}
      red
    </>
  );
};

CreateAccount.propTypes = {};
