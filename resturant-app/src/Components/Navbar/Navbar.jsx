import React from 'react'
import './Navbar.scss'
import { images } from '../../Constants';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="conatiner">


      <div className="upNav">
        <div className="upNav__left">
          <span>+92-304-5456318 <FaPhone /></span>
          <span>m.noman@s4scorp.com < MdEmail /></span>


        </div>
        <div className="upNav__right">
          <select name="" id="">
            <option value="">English</option>
            <option value="">Arabic</option>
            <option value="">urdu</option>
            <option value="">French</option>
            <option value="">Hindi</option>
            <option value="">Russian</option>

          </select>
        </div>
      </div>
      <div className='nav'>

        <div className="nav__left">
          <div className="nav__logo">
          <Link to='/'>  <img src={images.logo} alt="" /></Link>

          </div>
        </div>

        <div className="nav__mid">
          <ul>
          
            <li> <Link to='/menu'>Menu</Link> 
              <div />
            </li>
            <li><Link to='/food'>Foods</Link>
              <div />
            </li>
            <li><Link>Services</Link>
              <div />
            </li>
            <li><Link to='/cart'>Cart Products</Link>
              <div />
            </li>
            <li><Link>Contact</Link>
              <div />
            </li>


          </ul>


        </div>

        <div className="nav__right">
          <div className="nav__right-login">
            <button className='login'>Login</button>
            <span className='single-line'></span>
          </div>

          <div className="nav__right-btns">
            <button className='btn-req'>Booking</button>
            <button className='btn-sign'>Sign up</button>
          </div>

        </div>




      </div>
    </div>

  )
}

export default Navbar
