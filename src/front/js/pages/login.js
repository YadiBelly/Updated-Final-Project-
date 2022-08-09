import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();
  console.log(email);
  console.log(password);
  function sendInfo(email, password) {
    console.log("sent info");
    actions.login(email, password);
  }
  return (
    <div class="container">
      <div>
        <br />
      </div>
      <div class="text-center">
        <h5>{store.error}</h5>
      </div>
      <div class="row row-cols-4 justify-content-center">
        <form>
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-1">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-1 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            onClick={() => {
              sendInfo({
                email,
                password,
              });
              history.push("/calendar");
            }}
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
