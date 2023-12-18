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
                    <h1><FaQuoteLeft /> Start learning from best <span> platform </span> <FaQuoteRight /></h1>
                    <p> <RiSingleQuotesL/> Study any topic, anytime. explore thousands of courses for the lowest price ever! <RiSingleQuotesR/></p>
                </div>

                <div className="left__form">
                    <div className="form">
                        <input placeholder='what do you want to learn' type="text" />
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