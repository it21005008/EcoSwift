import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const DeleteEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteEvent = () => {
    axios
      .delete(`http://localhost:8080/api/events/delete/${id}`)
      .then(() => {
        navigate("/eventdetails");
      })
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  };

  return (
    <div className="p-4 mx-10">
      <div className="flex flex-col items-center shadow-2xl rounded-xl w-[600px] mt-20 p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this item</h3>

        <div className="flex justify-center mt-8 gap-10">
          <button
            onClick={handleDeleteEvent}
            className="bg-red-600 text-white p-2 w-28 rounded-lg font-semibold"
          >
            Yes, Delete
          </button>
          <Link to="/eventdetails">
            <button className="bg-sky-600 text-white p-2 w-28 rounded-lg font-semibold">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteEvent;