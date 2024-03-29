import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'
import News from './pages/News';
import Shop from './pages/Shop'
import Events from './pages/Events'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Header from './components/Header'
import Footer from './components/Footer';



export default function App() {
  return (
    <BrowserRouter>
        <Header></Header>

     <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/Sign-In" element={<SignIn />} />
       <Route path="/Sign-Up" element={<SignUp />} />
       <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
       <Route path="/News" element={<News />} />
       <Route path="/Shop" element={<Shop />} />
       <Route path="/Events" element={<Events />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/Profile" element={<Profile />} />
       <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
       <Route path="/TermsConditions" element={<TermsConditions />} />
       


     </Routes>
     <Footer />
    
    </BrowserRouter>
  )
}
