import {BrowserRouter,Routes , Route} from 'react-router-dom'
import Home from './pages/home'
import aboutus from './pages/Aboutus'
import signin from './pages/signin'
import signup from './pages/signup'
import Dashboard from './pages/Dashboard'
import event from './pages/event'
import shop from './pages/shop'


export default function main() {
  return (
    <BrowserRouter>
    
     <Routes>
      <Route path ="/" element={<home/>} />
      <Route path ="/aboutus" element={<aboutus/>} />
      <Route path ="/contactus" element={<contactus/>} />
      <Route path ="/Dashboard" element={<Dashboard/>} />
      <Route path ="/event" element={<event/>} />
      <Route path ="/signin" element={<signin/>} />
      <Route path ="/signup" element={<signup/>} />
      <Route path ="/shop" element={<shop/>} />



     </Routes>
    
    </BrowserRouter>
  )
}