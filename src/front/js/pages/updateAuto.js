import { acquisitionsIncorporated } from "fontawesome";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Auto = () => {
  const { store, actions } = useContext(Context);
  const [model, setModle] = useState("");
  const [color, setColor] = useState("");
  const [make, setMake] = useState("");
  const [mileage, setMileage] = useState("");
  const [year, setYear] = useState("");
  // const [vin, setVin] = useState("");
  // const { store, actions } = useContext(Context);
  return (
    <>
      <div>
        <h1> Car Info</h1>
        <form>
          <input
            type="text"
            onChange={(e) => setModle(e.target.value)}
            placeholder="Car Model"
          ></input>
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="Car Color"
          ></input>
          <input
            type="text"
            onChange={(e) => setMake(e.target.value)}
            placeholder="Car Make"
          ></input>
          <input
            type="text"
            onChange={(e) => setMileage(e.target.value)}
            placeholder="Car Mileage"
          ></input>
          <input
            type="text"
            onChange={(e) => setYear(e.target.value)}
            placeholder="Car Year"
          ></input>
          {/* <input
            type="text"
            onChange={(e) => setVin(e.target.value)}
            placeholder="Car VIN"
          ></input> */}
        </form>
        <button
          onClick={() => actions.Auto({ model, color, make, mileage, year })}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
      <div>
        <br></br>
        <form>
          <input type="text" placeholder="enterVin"></input>
          <button
            onClick={() => actions.Auto({ vin })}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
