import { Navbar } from 'flowbite-react';
import React from 'react';
import logo from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';
import {FaMoon} from 'react-icons/fa';


export default function Header() {
  return (
       <div className='divide-y'>
    <Navbar className=' pt-5'>
        <Link to="/" className='self-center whitespace-nowrap'>
        <img src={logo} width={100} height={100}></img>
        </Link>
       
  <div></div>
       
       <div className=''>
        <button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon/>       
            </button>
        </div>
       
        

    
    </Navbar>
        <div class="grid grid-cols-1 divide-y">
  ffffff
</div>
    </div>
  )
}
