import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from 'react-hot-toast';

const Events = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [binSize, setBinSize] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [submit, setSubmit] = useState(false);
  const [emptySubmit, setEmptySubmit] = useState(false);

  useEffect(() => {
    setSubmit(fullName && address && email && serviceType && binSize && pickupTime && pickupDate );
  }, [fullName, address, email, serviceType, binSize, pickupTime, pickupDate, ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setFullName(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "serviceType") {
      setServiceType(value);
    } else if (name === "binSize") {
      setBinSize(value);
    } else if (name === "pickupTime") {
      setPickupTime(value);
    } else if (name === "pickupDate") {
      setPickupDate(value);
    }
  };

  const handleEmptySubmit = () => {
    setEmptySubmit(true);
  };

  const sendData = async (e) => {
    e.preventDefault();

    const newEvent = {
      fullName,
      address,
      email,
      serviceType,
      binSize,
      pickupTime,
      pickupDate,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/Events", newEvent);
      if (response.status === 200) {
        toast.success("Event Added Successfully");
        setEmptySubmit(false);
        setFullName("");
        setAddress("");
        setEmail("");
        setServiceType("");
        setBinSize("");
        setPickupTime("");
        setPickupDate("");
      } else {
        throw new Error("Failed to add event");
      }
    } catch (error) {
      toast.error("An error occurred while adding the event");
    }
  };

  const inputStyle = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '14px',
    padding: '10px',
    marginBottom: '10px',
    width: '100%',
  };

  const errorMessageStyle = {
    color: 'red',
    fontSize: '12px',
  };

  const buttonStyle = {
    width: '25%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '10px',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ced4da',
    cursor: 'not-allowed',
  };

  const disabledHoverButtonStyle = {
    ...disabledButtonStyle,
    backgroundColor: '#ced4da',
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={submit ? sendData : (e) => e.preventDefault()}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="fullName" style={{ fontWeight: 'bold' }}>Full Name</label>
          <input type="text" name="fullName" style={inputStyle} onChange={handleInputChange} value={fullName} />
          {emptySubmit && !fullName && <p style={errorMessageStyle}>Name required</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="address" style={{ fontWeight: 'bold' }}>Address</label>
          <input type="text" name="address" style={inputStyle} onChange={handleInputChange} value={address} />
          {emptySubmit && !address && <p style={errorMessageStyle}>Address required</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
          <input type="email" name="email" style={inputStyle} onChange={handleInputChange} value={email} />
          {emptySubmit && !email && <p style={errorMessageStyle}>Email required</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="serviceType" style={{ fontWeight: 'bold' }}>Service Type</label>
          <select name="serviceType" style={inputStyle} onChange={handleInputChange} value={serviceType}>
            <option value="">Select Service Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="Advanced">Advanced</option>
          </select>
          {emptySubmit && !serviceType && <p style={errorMessageStyle}>Service Type required</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="binSize" style={{ fontWeight: 'bold' }}>Bin Size</label>
          <select name="binSize" style={inputStyle} onChange={handleInputChange} value={binSize}>
            <option value="">Select Bin Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {emptySubmit && !binSize && <p style={errorMessageStyle}>Bin Size required</p>}
        </div>


        <div style={{ marginBottom: '10px' }}>
        <label htmlFor="pickupTime" style={{ fontWeight: 'bold' }}>Pick Up Time</label>
        <input type="time" name="pickupTime" style={inputStyle} onChange={handleInputChange} value={pickupTime} />
        {emptySubmit && !pickupTime && <p style={errorMessageStyle}>Invalid Pick Up Time format (HH:MM)</p>}
        </div>
        
        <div style={{ marginBottom: '10px' }} className="mb-3">
       <label htmlFor="pickupDate" style={{ fontWeight: 'bold' }}className="form-label">Pick Up Date</label>
       <DatePicker
        selected={pickupDate ? new Date(pickupDate) : null} // Convert pickupDate to Date object
        dateFormat="yyyy-MM-dd" // Set date format
         onChange={(date) => setPickupDate(date)} // Handle date change event
        placeholderText="Select Date" // Placeholder text for the input field
         className="form-input" // Apply your custom input style
        />
       {emptySubmit && !pickupDate && <p className="error-message">Pick Up Date required</p>}
       </div>

      
        {submit ? (
          <button type="submit" style={buttonStyle}>Submit</button>
        ) : (
          <button style={disabledButtonStyle} onClick={handleEmptySubmit}>Submit</button>
        )}
      </form>
    </div>
  );
};

export default Events;











