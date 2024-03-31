import React, { useEffect, useState } from "react";
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
    setSubmit(fullName && address && email && serviceType && binSize && pickupTime && pickupDate);
  }, [fullName, address, email, serviceType, binSize, pickupTime, pickupDate]);

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
          <input type="text" name="pickupTime" style={inputStyle} onChange={handleInputChange} value={pickupTime} />
          {emptySubmit && !pickupTime && <p style={errorMessageStyle}>Pick Up Time required</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="pickupDate" style={{ fontWeight: 'bold' }}>Pick Up Date</label>
          <input type="text" name="pickupDate" style={inputStyle} onChange={handleInputChange} value={pickupDate} />
          {emptySubmit && !pickupDate && <p style={errorMessageStyle}>Pick Up Date required</p>}
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










/* main--   import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import './Event.css'

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
    setSubmit(fullName && address && email && serviceType && binSize && pickupTime && pickupDate);
  }, [fullName, address, email, serviceType, binSize, pickupTime, pickupDate]);

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

  return (
    <div className="container px-5 pt-5">
      <form onSubmit={submit ? sendData : (e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" name="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          onChange={handleInputChange} 
          value={fullName} />
          {emptySubmit && !fullName && <p className="text-red-600">Name required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          onChange={handleInputChange} 
          value={address} />
          {emptySubmit && !address && <p className="text-red-600">Address required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          onChange={handleInputChange}
           value={email} />
          {emptySubmit && !email && <p className="text-red-600">Email required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">Service Type</label>
          <select name="serviceType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleInputChange} value={serviceType}>
            <option value="">Select Service Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="Advanced">Advanced</option>
          </select>
          {emptySubmit && !serviceType && <p className="text-red-600">Service Type required</p>}
        </div>



        <div className="mb-3">
          <label htmlFor="binSize" className="form-label">Bin Size</label>
          <select name="binSize" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleInputChange} value={binSize}>
            <option value="">Select Bin Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {emptySubmit && !binSize && <p className="text-red-600">Bin Size required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="pickupTime" className="form-label">Pick Up Time</label>
          <input type="text" name="pickupTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          onChange={handleInputChange}
           value={pickupTime} />
          {emptySubmit && !pickupTime && <p className="text-red-600">Pick Up Time required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="pickupDate" className="form-label">Pick Up Date</label>
          <input type="text" name="pickupDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          onChange={handleInputChange}
           value={pickupDate} />
          {emptySubmit && !pickupDate && <p className="text-red-600">Pick Up Date required</p>}
        </div>

        {submit ? (
          <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
            Submit
          </button>
        ) : (
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full opacity-50 cursor-not-allowed hover:cursor-not-allowed"
           onClick={handleEmptySubmit}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Events;*/



/* 2nd main-- import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import './Events.css';

const Events = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [binSize, setBinSize] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [submit, setSubmit] = useState(false);
  const [emptySubmit, setEmptySubmit] = useState(false);

  useEffect(() => {
    setSubmit(fullName && address &&mobile && email && serviceType && binSize && pickupTime && pickupDate);
  }, [fullName, address,mobile, email, serviceType, binSize, pickupTime, pickupDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setFullName(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "mobile") {
      setMobile(value);
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
      mobile,
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
        setMobile("");
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

  return (
    <div className="container">
      <form onSubmit={submit ? sendData : (e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" name="fullName" className="form-input" onChange={handleInputChange} value={fullName} />
          {emptySubmit && !fullName && <p className="error-message">Name required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" name="address" className="form-input" onChange={handleInputChange} value={address} />
          {emptySubmit && !address && <p className="error-message">Address required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input type="text" name="mobile" className="form-input" onChange={handleInputChange} value={mobile} />
          {emptySubmit && !mobile && <p className="error-message">Mobile required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" className="form-input" onChange={handleInputChange} value={email} />
          {emptySubmit && !email && <p className="error-message">Email required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">Service Type</label>
          <select name="serviceType" className="form-input" onChange={handleInputChange} value={serviceType}>
            <option value="">Select Service Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="Advanced">Advanced</option>
          </select>
          {emptySubmit && !serviceType && <p className="error-message">Service Type required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="binSize" className="form-label">Bin Size</label>
          <select name="binSize" className="form-input" onChange={handleInputChange} value={binSize}>
            <option value="">Select Bin Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {emptySubmit && !binSize && <p className="error-message">Bin Size required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="pickupTime" className="form-label">Pick Up Time</label>
          <input type="text" name="pickupTime" className="form-input" onChange={handleInputChange} value={pickupTime} />
          {emptySubmit && !pickupTime && <p className="error-message">Pick Up Time required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="pickupDate" className="form-label">Pick Up Date</label>
          <input type="text" name="pickupDate" className="form-input" onChange={handleInputChange} value={pickupDate} />
          {emptySubmit && !pickupDate && <p className="error-message">Pick Up Date required</p>}
        </div>

        {submit ? (
          <button type="submit" className="submit-button">Submit</button>
        ) : (
          <button className="disabled-button" onClick={handleEmptySubmit}>Submit</button>
        )}
      </form>
    </div>
  );
};

export default Events;*/











