import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const[menu,setMenu]=useState("shop");





  return (
    <div className="navbar">
        
        
        <div className="nav-logo">
    <img src={logo} alt="" style={{ width: '160px', height: '60px' }} />
    
</div>

           <ul className="nav-menu">
          <li onClick={()=>{setMenu("Home")}}>Home{menu=="Home"?<h/>:<></>}</li>
           <li onClick={()=>{setMenu("news")}}>news{menu=="news"?<h/>:<></>}</li>
           <li onClick={()=>{setMenu("Shop")}}>shop{menu=="shop"?<h/>:<></>}</li>
           <li onClick={()=>{setMenu("events")}}>events{menu=="events"?<h/>:<></>}</li>
           </ul>

           <div className= "nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt=""/>
            <div className="nav-cart-count">0</div>

            
           </div>

           </div>




    
  )
}

export default Navbar