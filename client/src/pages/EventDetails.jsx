import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EventDetails = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/events/")
    .then((res) => {
      setEvents(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <table className="table-auto w-full text-center">
  <thead className="border-2">
    <tr >
      <th className="border border-slate-600">Full Name</th>
      <th className="border border-slate-600">Address</th>
      <th className="border border-slate-600">serviceType</th>
      <th className="border border-slate-600">binSize</th>
      <th className="border border-slate-600">pickupTime</th>
      <th className="border border-slate-600">pickupDate</th>
    </tr>
  </thead>
  <tbody >

    {
      events.map((event) => (

    <tr key={event.id}>
      <td className="border border-slate-700">{event.fullName}</td>
      <td className="border border-slate-700">{event.address}</td>
      <td className="border border-slate-700">{event.serviceType}</td>
      <td className="border border-slate-700">{event.binSize}</td>
      <td className="border border-slate-700">{event.pickupTime}</td>
      <td className="border border-slate-700">{event.pickupDate}</td>
    </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}

export default EventDetails