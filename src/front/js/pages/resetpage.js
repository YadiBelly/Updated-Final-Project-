import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Reset = () => {
  const [updatedPassword, setUpdatePassword] = useState("");
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <br />
        <h5 align="center">Reset your Password below</h5>
        <br />
      </div>
      <div class="row row-cols-4 justify-content-center">
        <form>
          <div class="form-floating">
            <input
              type="password"
              onChange={(e) => setUpdatePassword(e.target.value)}
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Enter New Password Here!</label>
          </div>
          <div>
            <br />
          </div>
          <div class="col-auto text-center">
            <button
              type="submit"
              onClick={() => {
                actions.updatePassword({ updatedPassword });
              }}
              class="btn btn-primary mb-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
