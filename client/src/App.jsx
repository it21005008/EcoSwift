



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import toast ,{Toaster} from "react-hot-toast";
import Events from './pages/Events';
import Contact from './pages/Contact';
//import AllContacts from './pages/AllContacts';
import "react-datepicker/dist/react-datepicker.css";



export default function App() {




 return (
    <BrowserRouter>
     <div><Toaster/></div>
      <Routes>

        <Route path="/Events" element={<Events />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

