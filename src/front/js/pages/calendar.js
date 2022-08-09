import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Calendar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      {store.user.email ? (
        <>
          <br />
          <div class="row row-cols-6 justify-content-center">
            <button
              class="btn btn-primary"
              onClick={() => {
                actions.logout();
                navigate("/login");
              }}
            >
              Log Out
            </button>
          </div>
          <div style={{ height: "800px" }}>
            <iframe
              src="https://calendly.com/nnngozi"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </div>
        </>
      ) : (
        useEffect(() => {
          if (!store.user.email) {
            navigate("/login");
          }
        }, [])
      )}
    </div>
  );
};
