import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function EquipmentForm() {
  const [Toolname, setToolname] = useState('');
  const [DealerName, setDealerName] = useState('');
  const [Image, setImage] = useState('');
  const [Location, setLocation] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('')
  const [Price,setPrice] = useState('')
  const [error, setError] = useState('');
  const [loading,setloading]=useState(false);
  const [successMessage, setSuccessMessage] = useState('');
const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        setloading(true)
      

      const res = await axios.post('http://localhost:5001/addtool', {Toolname,DealerName,PhoneNumber,Image,Price,Location},config
      );
      alert("tool registered successfully")
      navigate('/')

     
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1>Add Tool</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Toolname" className="form-label">Tool Name</label>
          <input type="text" className="form-control" id="Toolname" value={Toolname} onChange={(e) => setToolname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="DealerName" className="form-label">Dealer Name</label>
          <input type="text" className="form-control" id="DealerName" value={DealerName} onChange={(e) => setDealerName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">Price</label>
          <input type="number" className="form-control" id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">Image</label>
          <input type="text" className="form-control" id="Image" onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="Location" className="form-label">Location</label>
          <input type="text" className="form-control" id="Location" value={Location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EquipmentForm;
