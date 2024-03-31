/*import { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import './Contact.css'

const Contact = () => {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [emptySubmit, setEmptySubmit] = useState(false);

  const handleInputChange = (e) => { //set values to state variables
    const { name, value } = e.target;

    if (name === "firstName") {
      setfName(value);
    } else if (name === "lastName") {
      setlName(value);
    }else if (name === "email") {
      setEmail(value);
    }else if (name === "message") {
      setMessage(value);
    }else if (name === "mobile") {
      setMobile(value);
    }
  };

  useEffect(() => {
    setSubmit(firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0 && mobile.length > 0);
  }, [firstName, lastName, email, message, mobile]);

  const handleEmptySubmit = () => {
    setEmptySubmit(true);
  };

  const sendData = (e) => {
    e.preventDefault();

    const newContact = {
      firstName,
      lastName,
      email,
      mobile,
      message,
    };

      toast.promise(
        axios.post("http://localhost:8080/api/contacts", newContact),
        {
          loading: 'In Progress...',
          success: 'Shop Added Successfully',
          error: 'An error occurred while adding the shop',
        })
      setEmptySubmit(false);
      setfName("");
      setlName("");
      setEmail("");
      setMobile("");
      setMessage("");
  }

return (
 


    <div className="container px-5 pt-5">
      <form onSubmit={submit ? sendData : (e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="firstName"
            onChange={handleInputChange}
            value={firstName}
          />
          {firstName.length <= 0 && emptySubmit && (
            <p className="text-red-600">Name required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="lastName"
            onChange={handleInputChange}
            value={lastName}
          />
          {lastName.length <= 0 && emptySubmit && (
            <p className="text-red-600">Last Name required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="email"
            onChange={handleInputChange}
            value={email}
          />
          {email.length <= 0 && emptySubmit && (
            <p className="text-red-600">Email required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
          Mobile
          </label>
          <input
            type="phone"
            name="mobile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="mobile"
            onChange={handleInputChange}
            value={mobile}
          />
          {mobile.length <= 0 && emptySubmit && (
            <p className="text-red-600">Mobile required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
          Message
          </label>
          <textarea
            type="text"
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="message"
            onChange={handleInputChange}
            value={message}
          />
          {message.length <= 0 && emptySubmit && (
            <p className="text-red-600">Email required</p>
          )}
        </div>

        {submit ? (
          <button
            type="submit"
           className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
        ) : (
          <button
           className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full opacity-50 cursor-not-allowed hover:cursor-not-allowed"
            onClick={handleEmptySubmit}
          >
            Submit
          </button>
        )}

      </form>
    </div>

    
  
  );
};


export default Contact;*/


import { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [emptySubmit, setEmptySubmit] = useState(false);

  const handleInputChange = (e) => { //set values to state variables
    const { name, value } = e.target;

    if (name === "firstName") {
      setfName(value);
    } else if (name === "lastName") {
      setlName(value);
    }else if (name === "email") {
      setEmail(value);
    }else if (name === "message") {
      setMessage(value);
    }else if (name === "mobile") {
      setMobile(value);
    }
  };

  useEffect(() => {
    setSubmit(firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0 && mobile.length > 0);
  }, [firstName, lastName, email, message, mobile]);

  const handleEmptySubmit = () => {
    setEmptySubmit(true);
  };

  const sendData = (e) => {
    e.preventDefault();

    const newContact = {
      firstName,
      lastName,
      email,
      mobile,
      message,
    };

    toast.promise(
      axios.post("http://localhost:8080/api/contacts", newContact),
      {
        loading: 'In Progress...',
        success: 'Shop Added Successfully',
        error: 'An error occurred while adding the shop',
      }
    );

    setEmptySubmit(false);
    setfName("");
    setlName("");
    setEmail("");
    setMobile("");
    setMessage("");
  }

  return (
    <div className="container">
      <form onSubmit={submit ? sendData : (e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="form-input"
            id="firstName"
            onChange={handleInputChange}
            value={firstName}
          />
          {firstName.length <= 0 && emptySubmit && (
            <p className="error-message">Name required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="form-input"
            id="lastName"
            onChange={handleInputChange}
            value={lastName}
          />
          {lastName.length <= 0 && emptySubmit && (
            <p className="error-message">Last Name required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            id="email"
            onChange={handleInputChange}
            value={email}
          />
          {email.length <= 0 && emptySubmit && (
            <p className="error-message">Email required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="phone"
            name="mobile"
            className="form-input"
            id="mobile"
            onChange={handleInputChange}
            value={mobile}
          />
          {mobile.length <= 0 && emptySubmit && (
            <p className="error-message">Mobile required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-input"
            id="message"
            onChange={handleInputChange}
            value={message}
          />
          {message.length <= 0 && emptySubmit && (
            <p className="error-message">Message required</p>
          )}
        </div>

        {submit ? (
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        ) : (
          <button
            className="disabled-button"
            onClick={handleEmptySubmit}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;


















