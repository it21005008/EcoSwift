import {BrowserRouter,Routes , Route} from 'react-router-dom'

import Home from './pages/home'
import Aboutus from './pages/Aboutus'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import Event from './pages/event'
import Shop from './pages/shop'
import Contactus from './pages/contactUs'
import News from './pages/news'
import Header from './components/Header'
import Footer from './components/footer'





export default function main() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/aboutus" element={<Aboutus/>} />
      <Route path ="/contactus" element={<Contactus/>} />
      <Route path ="/Dashboard" element={<Dashboard/>} />
      <Route path ="/event" element={<Event/>} />
      <Route path ="/signin" element={<Signin/>} />
      <Route path ="/signup" element={<Signup/>} />
      <Route path ="/shop" element={<Shop/>} />
      <Route path ="/news" element={<News/>} />




     </Routes>

     
    <Footer/>
    </BrowserRouter>
  )
}