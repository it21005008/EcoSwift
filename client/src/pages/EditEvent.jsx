import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [binSize, setBinSize] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
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

  const handleSaveEvent = (e) => {
    e.preventDefault();

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
  };

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
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Service Type</label>
          <input
            type="text"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          />
        </div>
        <div>
          <label>Bin Size</label>
          <input
            type="text"
            value={binSize}
            onChange={(e) => setBinSize(e.target.value)}
          />
        </div>
        <div>
          <label>Pickup Time</label>
          <input
            type="text"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
        </div>
        <div>
          <label>Pickup Date</label>
          <input
            type="text"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>
        <button onClick={handleSaveEvent}>Submit</button>
      </form>
    </div>
  );
};

export default EditEvent;