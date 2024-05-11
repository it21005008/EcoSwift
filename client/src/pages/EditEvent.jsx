// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditEvent = () => {
//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [serviceType, setServiceType] = useState("");
//   const [binSize, setBinSize] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/events/${id}`)
//       .then((res) => {
//         setFullName(res.data.fullName);
//         setAddress(res.data.address);
//         setServiceType(res.data.serviceType);
//         setBinSize(res.data.binSize);
//         setPickupTime(res.data.pickupTime);
//         setPickupDate(res.data.pickupDate);
//       })
//       .catch((err) => {
//         alert("Something went wrong...");
//         console.log(err);
//       });
//   }, [id]);

//   const handleSaveEvent = (e) => {
//     e.preventDefault();

//     const data = {
//       fullName,
//       address,
//       serviceType,
//       binSize,
//       pickupTime,
//       pickupDate,
//     };

//     axios
//       .put(`http://localhost:8080/api/events/edit/${id}`, data)
//       .then(() => {
//         navigate("/eventdetails");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label>FullName</label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Address</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Service Type</label>
//           <input
//             type="text"
//             value={serviceType}
//             onChange={(e) => setServiceType(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Bin Size</label>
//           <input
//             type="text"
//             value={binSize}
//             onChange={(e) => setBinSize(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Pickup Time</label>
//           <input
//             type="text"
//             value={pickupTime}
//             onChange={(e) => setPickupTime(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Pickup Date</label>
//           <input
//             type="text"
//             value={pickupDate}
//             onChange={(e) => setPickupDate(e.target.value)}
//           />
//         </div>
//         <button onClick={handleSaveEvent}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default EditEvent;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditEvent = () => {
//   const [fullName, setFullName] = useState("");
//   const [address, setAddress] = useState("");
//   const [serviceType, setServiceType] = useState("");
//   const [binSize, setBinSize] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/events/${id}`)
//       .then((res) => {
//         setFullName(res.data.fullName);
//         setAddress(res.data.address);
//         setServiceType(res.data.serviceType);
//         setBinSize(res.data.binSize);
//         setPickupTime(res.data.pickupTime);
//         setPickupDate(res.data.pickupDate);
//       })
//       .catch((err) => {
//         alert("Something went wrong...");
//         console.log(err);
//       });
//   }, [id]);

//   const handleSaveEvent = (e) => {
//     e.preventDefault();

//     const data = {
//       fullName,
//       address,
//       serviceType,
//       binSize,
//       pickupTime,
//       pickupDate,
//     };

//     axios
//       .put(`http://localhost:8080/api/events/edit/${id}`, data)
//       .then(() => {
//         navigate("/eventdetails");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-emerald-400 color: rgb(52 211 153) text-xl font-bold font-size: 1.25rem font-weight: 700;">
//           Edit Event
//         </h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="fullName" className="block mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="address" className="block mb-1">
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="serviceType" className="block mb-1">
//               Service Type
//             </label>
//             <input
//               type="text"
//               id="serviceType"
//               value={serviceType}
//               onChange={(e) => setServiceType(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="binSize" className="block mb-1">
//               Bin Size
//             </label>
//             <input
//               type="text"
//               id="binSize"
//               value={binSize}
//               onChange={(e) => setBinSize(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="pickupTime" className="block mb-1">
//               Pickup Time
//             </label>
//             <input
//               type="text"
//               id="pickupTime"
//               value={pickupTime}
//               onChange={(e) => setPickupTime(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="pickupDate" className="block mb-1">
//               Pickup Date
//             </label>
//             <input
//               type="text"
//               id="pickupDate"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </div>
//           <button
//             onClick={handleSaveEvent}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditEvent;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [binSize, setBinSize] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/events/${id}`)
      .then((res) => {
        setFullName(res.data.fullName);
        setAddress(res.data.address);
        setServiceType(res.data.serviceType);
        setBinSize(res.data.binSize);
        setPickupTime(res.data.pickupTime);
        setPickupDate(res.data.pickupDate);
      })
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  }, [id]);

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
      errors["pickupTime"] = "Please select the pickup time";
    }

    if (!pickupDate) {
      formIsValid = false;
      errors["pickupDate"] = "Please enter the pickup date";
    } else {
      // Check if the date is in the future
      const currentDate = new Date();
      const selectedDate = new Date(pickupDate);
      if (selectedDate < currentDate) {
        formIsValid = false;
        errors["pickupDate"] = "Pickup date must be in the future";
      }
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
        .put(`http://localhost:8080/api/events/edit/${id}`, data)
        .then(() => {
          navigate("/eventdetails");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-emerald-400 text-xl font-bold font-size: 1.25rem font-weight: 700;">
          Edit Event
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["fullName"]}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["address"]}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="serviceType" className="block mb-1">
              Service Type
            </label>
            <input
              type="text"
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["serviceType"]}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="binSize" className="block mb-1">
              Bin Size
            </label>
            <input
              type="text"
              id="binSize"
              value={binSize}
              onChange={(e) => setBinSize(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-red-500">{errors["binSize"]}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="pickupTime" className="block mb-1">
              Pickup Time
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Pickup Time</option>
              <option value="09:00">09:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="18:00">06:00 PM</option>
            </select>
            <span className="text-red-500">{errors["pickupTime"]}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="pickupDate" className="block mb-1">
              Pickup Date
            </label>
            <input
              type="date"
              id="pickupDate"
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

export default EditEvent;

