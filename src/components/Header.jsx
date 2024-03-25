import { Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../assets/images/logo2.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className=' pt-5'>
       
        <Link to="/" className='self-center whitespace-nowrap '>
        <img src={logo} width={100} height={100}></img>
        </Link>
       
       
        <ul>
            <li>g</li>
        </ul>
    
    </Navbar>
  )
}
