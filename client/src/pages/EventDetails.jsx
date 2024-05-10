
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const EventDetails = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/events/")
//       .then((res) => {
//         setEvents(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Event Details</h2>
//       <table className="table-auto w-full text-center">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="px-4 py-2">Full Name</th>
//             <th className="px-4 py-2">Address</th>
//             <th className="px-4 py-2">Service Type</th>
//             <th className="px-4 py-2">Bin Size</th>
//             <th className="px-4 py-2">Pickup Time</th>
//             <th className="px-4 py-2">Pickup Date</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event.id} className="border-b">
//               <td className="px-4 py-2">{event.fullName}</td>
//               <td className="px-4 py-2">{event.address}</td>
//               <td className="px-4 py-2">{event.serviceType}</td>
//               <td className="px-4 py-2">{event.binSize}</td>
//               <td className="px-4 py-2">{event.pickupTime}</td>
//               <td className="px-4 py-2">{event.pickupDate}</td>
//               <td className="px-4 py-2">
//                 <Link to={`/edit/${event._id}`}>
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
//                 </Link>
//                 <Link to={`/delete/${event._id}`}>
//                   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventDetails;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const EventDetails = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/events/")
//       .then((res) => {
//         setEvents(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Event Details</h2>
//       <table className="table-auto w-full text-center border-separate border">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="px-4 py-2 border">Full Name</th>
//             <th className="px-4 py-2 border">Address</th>
//             <th className="px-4 py-2 border">Service Type</th>
//             <th className="px-4 py-2 border">Bin Size</th>
//             <th className="px-4 py-2 border">Pickup Time</th>
//             <th className="px-4 py-2 border">Pickup Date</th>
//             <th className="px-4 py-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event.id}>
//               <td className="px-4 py-2 border">{event.fullName}</td>
//               <td className="px-4 py-2 border">{event.address}</td>
//               <td className="px-4 py-2 border">{event.serviceType}</td>
//               <td className="px-4 py-2 border">{event.binSize}</td>
//               <td className="px-4 py-2 border">{event.pickupTime}</td>
//               <td className="px-4 py-2 border">{event.pickupDate}</td>
//               <td className="px-4 py-2 border">
//                 <Link to={`/edit/${event._id}`}>
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
//                 </Link>
//                 <Link to={`/delete/${event._id}`}>
//                   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventDetails;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const EventDetails = () => {
//   const [events, setEvents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/events/")
//       .then((res) => {
//         setEvents(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredEvents = events.filter((event) =>
//     event.fullName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Event Details</h2>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by full name..."
//           className="px-4 py-2 border border-gray-300 rounded-md"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>
//       <table className="table-auto w-full text-center border-separate border">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="px-4 py-2 border">Full Name</th>
//             <th className="px-4 py-2 border">Address</th>
//             <th className="px-4 py-2 border">Service Type</th>
//             <th className="px-4 py-2 border">Bin Size</th>
//             <th className="px-4 py-2 border">Pickup Time</th>
//             <th className="px-4 py-2 border">Pickup Date</th>
//             <th className="px-4 py-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEvents.map((event) => (
//             <tr key={event.id}>
//               <td className="px-4 py-2 border">{event.fullName}</td>
//               <td className="px-4 py-2 border">{event.address}</td>
//               <td className="px-4 py-2 border">{event.serviceType}</td>
//               <td className="px-4 py-2 border">{event.binSize}</td>
//               <td className="px-4 py-2 border">{event.pickupTime}</td>
//               <td className="px-4 py-2 border">{event.pickupDate}</td>
//               <td className="px-4 py-2 border">
//                 <Link to={`/edit/${event._id}`}>
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
//                 </Link>
//                 <Link to={`/delete/${event._id}`}>
//                   <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventDetails;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events/")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const searchLowerCase = searchQuery.toLowerCase();
    return (
      event.fullName.toLowerCase().includes(searchLowerCase) ||
      event.address.toLowerCase().includes(searchLowerCase) ||
      event.serviceType.toLowerCase().includes(searchLowerCase) ||
      event.binSize.toLowerCase().includes(searchLowerCase) ||
      event.pickupTime.toLowerCase().includes(searchLowerCase) ||
      event.pickupDate.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Event Details</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by any field..."
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="table-auto w-full text-center border-separate border">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Service Type</th>
            <th className="px-4 py-2 border">Bin Size</th>
            <th className="px-4 py-2 border">Pickup Time</th>
            <th className="px-4 py-2 border">Pickup Date</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td className="px-4 py-2 border">{event.fullName}</td>
              <td className="px-4 py-2 border">{event.address}</td>
              <td className="px-4 py-2 border">{event.serviceType}</td>
              <td className="px-4 py-2 border">{event.binSize}</td>
              <td className="px-4 py-2 border">{event.pickupTime}</td>
              <td className="px-4 py-2 border">{event.pickupDate}</td>
              <td className="px-4 py-2 border">
                <Link to={`/edit/${event._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
                </Link>
                <Link to={`/delete/${event._id}`}>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDetails;
