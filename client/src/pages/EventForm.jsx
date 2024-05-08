import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const EventForm = () => {

    const [fullName, setFullName] = useState("")
    const [address, setAddress] = useState("")
    const [serviceType, setServiceType] = useState("")
    const [binSize, setBinSize] = useState("")
    const [pickupTime, setPickupTime] = useState("")
    const [pickupDate, setPickupDate] = useState("")
    const navigate = useNavigate()

    const handleSaveEvent = () => {
        e.preventDefault();

        const data = {
            fullName,
            address,
            serviceType,
            binSize,
            pickupTime,
            pickupDate
        }

        axios.post("http://localhost:8080/api/events/add", data)
        .then(() => {
            navigate("/eventdetails")
        })
        .catch((err) => console.log(err))
    }

  return (
    <div>
        <form>
            <div>
                <label>FullName</label>
                <input
                 type="text" 
                 value={fullName}
                 onChange={(e) => setFullName(e.target.value)}
                 />
            </div>
            <div>
                <label>Address</label>
                <input 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Service Type</label>
                <input 
                type="text"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)} />
            </div>
            <div>
                <label>Bin Size</label>
                <input 
                type="text"
                value={binSize}
                onChange={(e) => setBinSize(e.target.value)} />
            </div>
            <div>
                <label>Pickup Time</label>
                <input 
                type="text"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)} />
            </div>
            <div>
                <label>Pickup Date</label>
                <input 
                type="text"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)} />
            </div>
            <button onClick={handleSaveEvent}>Submit</button>
        </form>
    </div>
  );
};

export default EventForm;
