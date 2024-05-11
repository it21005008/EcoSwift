import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import EventDetails from "./pages/EventDetails";
import EditEvent from "./pages/EditEvent";
import DeleteEvent from "./pages/DeleteEvent";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/edit/:id" element={<EditEvent />} />
        <Route path="/delete/:id" element={<DeleteEvent />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
