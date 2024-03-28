import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {FaMoon} from 'react-icons/fa';
import logo from '../assets/images/logo2.png';



export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap '
      >
        <Link to="/" className='self-center whitespace-nowrap '>
        <img src={logo} width={100} height={100}></img>
        </Link>
      </Link>
             
          <div className="flex gap-1  md:order-2">
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
              <FaMoon/>
            </Button>
            

            <Link to='/Sign-In'>
            <Button  gradientDuoTone='purpleToBlue' outline>
              Sign In
              </Button>
            </Link>
           
          </div>

          <Navbar.Collapse>
              <Navbar.Link active={path === "/"} as={'div'}>
                <Link to='/'>
                  Home
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse>
              <Navbar.Link active={path === "/News"} as={'div'}>
                <Link to='/News'>
                  News
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse>
              <Navbar.Link active={path === "/Shop"} as={'div'}>
                <Link to='/Shop'>
                  Shop
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse>
              <Navbar.Link active={path === "/Events"} as={'div'}>
                <Link to='/Events'>
                  Events
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse>
              <Navbar.Link active={path === "/AboutUs"} as={'div'}>
                <Link to='/AboutUs'>
                  About Us
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Collapse>
              <Navbar.Link active={path === "/ContactUs"} as={'div'}>
                <Link to='/ContactUs'>
                  Contact Us
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>
      </Navbar>
  )
}