import React from 'react'
import './Menu.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { MenuSource } from '../../SourceFile';
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri';

const Menu = () => {
  return (
    <div className='menus'>
        <div className="menu__top">
            <h1><FaQuoteLeft/> Upcoming courses <FaQuoteRight/> </h1>
            <p> <RiSingleQuotesL/> Unlock new expertise with industry experts and thought leaders in our  <br /> upcoming courses. <RiSingleQuotesR/></p>

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
                            <h4><CiStopwatch/> 10+ Hours</h4>
                            <span><FaStar/></span>
                        </div>

                        <div className="menu__teacher">

                         
                            <div className="emoji-img">
                                   <img src={item.teacher__img} alt="" />
                            </div>
                            <h2>{item.teacher_name}</h2>
                        </div>
                    </div>
            ))}

        </div>


    </div>
  )
}

export default Menu