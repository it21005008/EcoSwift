import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import EventDetails from "./pages/EventDetails";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/eventdetails" element={<EventDetails />} />
      </Routes>
    
    </BrowserRouter>
      
    
  )
}

export default App;
