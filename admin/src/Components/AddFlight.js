import React, { useState } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the default CSS
import "../styles/AddFlights.css";

const AddFlight = () => {
  const [clicked, setClicked] = useState(true);
  const [destFrom, setDestFrom] = useState("");
  const [destTo, setDestTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:1128/flights/add", {
        destFrom,
        destTo,
        dateFrom,
        dateTo,
        price,
      })
      .then((response) => {toast.success("Flight added successfully")})
      .catch((error) => { toast.error("Error adding flight") });
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          marginLeft: clicked ? "250px" : "70px",
        }}
      >
        <form className="formadd" onSubmit={handleSubmit}>
          <span className="titleadd">Add a Flight</span>
          <input
            type="text"
            className="input"
            placeholder="Destination From"
            value={destFrom}
            onChange={(event) => setDestFrom(event.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="Destination To"
            value={destTo}
            onChange={(event) => setDestTo(event.target.value)}
          />
          <input
            type="date"
            className="input"
            placeholder="Date From"
            value={dateFrom}
            onChange={(event) => setDateFrom(event.target.value)}
          />
          <input
            type="date"
            className="input"
            placeholder="Date To"
            value={dateTo}
            onChange={(event) => setDateTo(event.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddFlight;
