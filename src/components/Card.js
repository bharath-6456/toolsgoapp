import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const [hrs, setHrs] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setHrs(e.target.value);
  };

  const handleBookNow = () => {
    navigate("/login");
  };

  const handleSpeakNow = () => {
    const speechText = `Tool Name: ${props.Toolname}, Dealer: ${props.DealerName}, Phone Number: ${props.PhoneNumber}`;
    textToSpeech(speechText);
  };

  const textToSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <div className="card m-3 text-center shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "20rem" }}>
        <img
          src={props.Image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />

        <div className="card-body">
          <h2 className="card-title">{props.Toolname}</h2>
          <h6 className="card-text">Dealer: {props.DealerName}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Phone no: <b>{props.PhoneNumber}</b>
          </li>
        </ul>
        <div className="container w-100">
          <label>Enter No. of Hrs:</label>
          <input
            type="number"
            min={0}
            onChange={handleChange}
            className="h-20 m-2"
            name="hrs"
            style={{ width: "60px" }}
            value={hrs}
          />
        </div>
        <div>
          <h6>Price : {props.Price}</h6>
        </div>
        <div>
          <h5 className="container w-100">
            <h5>Total Price: {hrs * props.Price}</h5>
          </h5>
        </div>
        <button onClick={handleSpeakNow} className="btn btn-info center m-3 mt-1">
          Speak Now
        </button>
        <button onClick={handleBookNow} className="btn btn-success center m-3 mt-1">
          Book Now
        </button>
      </div>
    </div>
  );
}
