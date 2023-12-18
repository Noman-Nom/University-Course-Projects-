import React from 'react'
import './Header.scss'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import images from '../../Constants/images';


const Header = () => {
    return (
        <div className='header'>
            <div className="left">
                <div className="left__content">
                    <h1><FaQuoteLeft /> Modern restaurant in <span> center</span> of the city  <FaQuoteRight /></h1>
                    <p> <RiSingleQuotesL/> Rosoi is one of the most popular Restaurants with unique
& special menu made by our passionate chefs with love and quality with can impress you <RiSingleQuotesR/></p>
                </div>

                <div className="left__form">
                    <div className="form">
                        <input placeholder='Search your Fvt Dish' type="text" />
                        <button><FaSearch/> Search  </button>
                    </div>
                </div>

            </div>
            <div className="right">
              <div className="right__img">
                <img src={images.banner} alt="" />
              </div>
            </div>
        </div>
    )
}

export default Header