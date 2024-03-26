import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/images/logo2.png';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap'
            >
              <Link to="/" className='self-center whitespace-nowrap '>
        <img src={logo} width={100} height={100}></img>
        </Link>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Shortcut' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Home
                </Footer.Link>

                <Footer.Link
                  href='/pages/News'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  News
                </Footer.Link>

                <Footer.Link
                  href='/pages/shop'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Shop
                </Footer.Link>

                <Footer.Link
                  href='/pages/events'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Events
                </Footer.Link>

                <Footer.Link
                  href='/pages/aboutus'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  About Us
                </Footer.Link>

                <Footer.Link
                  href='/pages/contactus'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contact Us
                </Footer.Link>

                
              </Footer.LinkGroup>
            </div>
            
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="ECOSWIFT"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}