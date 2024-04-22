import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const [hrs, setHrs] = useState(0);

  const handleChange = (e) => {
    setHrs(e.target.value);
  };

  return (
    <div>
      <div className="card text-centers" style={{ width: "18rem" , boxShadow: "0 4px 8px rgba(0,0,0,0.1)",background:"#fff"}}>
        <img src={props.image} className="card-img-top" alt='...' />

        <div className="card-body">
          <h1 className="card-title ">{props.dealerName}</h1>
          <p className="card-text">{props.toolName}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.contactno}</li>
        </ul>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <label htmlFor="hours" className="form-label">Enter number of hours:</label>
            </div>
            <div className="col">
              <input type="number" id="hours" className="form-control" value={hrs} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h5>Total Prize: {hrs*500}</h5>
        </div>

        <div className="text-center">
          <Link to='/Login'>
            <button className="btn btn-success" type="submit">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
