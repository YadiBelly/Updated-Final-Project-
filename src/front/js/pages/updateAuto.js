import React, { useContext, useState } from "react";

export const Auto = () => {
  //   const { store, actions } = useContext(Context);
  const [model, setModle] = useState("");
  const [color, setColor] = useState("");
  const [make, setMake] = useState("");
  const [mileage, setMileage] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");

  return (
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
        <input
          type="text"
          onChange={(e) => setVin(e.target.value)}
          placeholder="Car VIN"
        ></input>
      </form>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </div>
  );
};
