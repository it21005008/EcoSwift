
import { useEffect, useState } from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
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

  const sendData = async (e) => { // Async function to handle data submission
    e.preventDefault();

    const newContact = {
      firstName,
      lastName,
      email,
      mobile,
      message,
    };

    try {
      await axios.post("http://localhost:8080/api/contacts", newContact);
      toast.success(' Successfully Added'); // Display success toast
      //navigate("/");
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the sho'); // Display error toast
    }

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
          <label htmlFor="firstName" style={{ fontWeight: 'bold' }}className="form-label">
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
          <label htmlFor="lastName" style={{ fontWeight: 'bold' }} className="form-label">
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
          <label htmlFor="email" style={{ fontWeight: 'bold' }} className="form-label">
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
          <label htmlFor="mobile" style={{ fontWeight: 'bold' }} className="form-label">
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            className="form-input"
            id="mobile"
            onChange={handleInputChange}
            value={mobile}
            pattern="[0-9]{10}"
          />
          {mobile.length <= 0 && emptySubmit && (
            <p className="error-message">Mobile required</p>
          )}

        </div>

        <div className="mb-3">
          <label htmlFor="message" style={{ fontWeight: 'bold' }} className="form-label">
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

       
          <div>
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
            <Toaster/>
          </div>
        
       
      </form>
    </div>
  );
};

export default Contact;


















