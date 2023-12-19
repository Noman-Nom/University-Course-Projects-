import React from 'react'
import './Menu.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { MenuSource } from '../../SourceFile';
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri';
import Navbar from '../Navbar/Navbar';

const Menu = () => {
    return (
      
   
    <div className='menus'>

        <div className="menu__top">
            <h1><FaQuoteLeft/> Our Menu<FaQuoteRight/> </h1>
            <p> <RiSingleQuotesL/> Lorem, ipsum dolor sit ametesse ea. Voluptatum minima quisquam placeat mollitia <br /> repellendus aliquam voluptatem! <RiSingleQuotesR/></p>

        </div>

        <div className="menu__bottom">

            {MenuSource.map((item)=>(
                    <div className='menu__item' key={item.id}>
                        <div className="menu__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="menu__content">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>


                        </div>

                        <div className="menu__rating">
                            <h4><CiStopwatch/> 24Hr Avb</h4>
                            <span><FaStar/></span>
                        </div>

                        <div className="menu__emoji">

                         
                            <div className="emoji-img">
                                   <img src={item.emoji} alt="" />
                            </div>
                            <h2>{item.Offer}</h2>
                        </div>
                    </div>
            ))}

        </div>


    </div>
        
  )
}

export default Menu