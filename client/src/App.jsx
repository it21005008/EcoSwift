import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import News from './pages/News';
import Shop from './pages/Shop'
import Events from './pages/Events'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter>
        <Header></Header>

     <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/SignIn" element={<SignIn />} />
       <Route path="/SignUp" element={<SignUp />} />
       <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/News" element={<News />} />
       <Route path="/Shop" element={<Shop />} />
       <Route path="/Events" element={<Events />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/Profile" element={<Profile />} />
       


     </Routes>
    
    </BrowserRouter>
  )
}
