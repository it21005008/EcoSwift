// import { useState } from "react";
// import axios from "axios"
// import { useNavigate } from "react-router-dom";

// const EventForm = () => {

//     const [fullName, setFullName] = useState("")
//     const [address, setAddress] = useState("")
//     const [serviceType, setServiceType] = useState("")
//     const [binSize, setBinSize] = useState("")
//     const [pickupTime, setPickupTime] = useState("")
//     const [pickupDate, setPickupDate] = useState("")
//     const navigate = useNavigate()

//     const handleSaveEvent = () => {
//         e.preventDefault();

//         const data = {
//             fullName,
//             address,
//             serviceType,
//             binSize,
//             pickupTime,
//             pickupDate
//         }

//         axios.post("http://localhost:8080/api/events/", data)
//         .then(() => {
//             navigate("/eventdetails")
//         })
//         .catch((err) => console.log(err))
//     }

//   return (
//     <div>
//         <form>
//             <div>
//                 <label>FullName</label>
//                 <input
//                  type="text" 
//                  value={fullName}
//                  onChange={(e) => setFullName(e.target.value)}
//                  />
//             </div>
//             <div>
//                 <label>Address</label>
//                 <input 
//                 type="text" 
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)} />
//             </div>
//             <div>
//                 <label>Service Type</label>
//                 <input 
//                 type="text"
//                 value={serviceType}
//                 onChange={(e) => setServiceType(e.target.value)} />
//             </div>
//             <div>
//                 <label>Bin Size</label>
//                 <input 
//                 type="text"
//                 value={binSize}
//                 onChange={(e) => setBinSize(e.target.value)} />
//             </div>
//             <div>
//                 <label>Pickup Time</label>
//                 <input 
//                 type="text"
//                 value={pickupTime}
//                 onChange={(e) => setPickupTime(e.target.value)} />
//             </div>
//             <div>
//                 <label>Pickup Date</label>
//                 <input 
//                 type="text"
//                 value={pickupDate}
//                 onChange={(e) => setPickupDate(e.target.value)} />
//             </div>
//             <button onClick={handleSaveEvent}>Submit</button>
//         </form>
//     </div>
//   );
// };

// export default EventForm;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [binSize, setBinSize] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    if (!fullName) {
      formIsValid = false;
      errors["fullName"] = "Please enter your full name";
    }

    if (!address) {
      formIsValid = false;
      errors["address"] = "Please enter your address";
    }

    if (!serviceType) {
      formIsValid = false;
      errors["serviceType"] = "Please enter the service type";
    }

    if (!binSize) {
      formIsValid = false;
      errors["binSize"] = "Please enter the bin size";
    }

    if (!pickupTime) {
      formIsValid = false;
      errors["pickupTime"] = "Please enter the pickup time";
    }

    if (!pickupDate) {
      formIsValid = false;
      errors["pickupDate"] = "Please enter the pickup date";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const data = {
        fullName,
        address,
        serviceType,
        binSize,
        pickupTime,
        pickupDate,
      };

      axios
        .post("http://localhost:8080/api/events/", data)
        .then(() => {
          navigate("/eventdetails");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-emerald-400	color: rgb(52 211 153) text-xl	font-size: 1.25rem font-bold	font-weight: 700;">Special Events Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["fullName"]}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["address"]}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Service Type</label>
            <input
              type="text"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["serviceType"]}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Bin Size</label>
            <input
              type="text"
              value={binSize}
              onChange={(e) => setBinSize(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["binSize"]}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Pickup Time</label>
            <input
              type="text"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["pickupTime"]}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Pickup Date</label>
            <input
              type="text"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["pickupDate"]}</span>
          </div>
          <button
            onClick={handleSaveEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;





