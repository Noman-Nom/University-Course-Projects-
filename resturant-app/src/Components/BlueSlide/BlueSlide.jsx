import React from 'react'
import './BlueSlide.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

import { BLueSlideSource } from '../../SourceFile'
const BlueSlide = () => {
  return (
    <div className='container'>

<div className="container__top">
        <h1><FaQuoteLeft/> Lorem ipsum dolor sit. <FaQuoteRight/> </h1>
        
    </div>
    <div className="container__bottom">
        {BLueSlideSource.map((item)=>(
                    <div className='container__item' key={item.id}>
                        <div className="item__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="container__content">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
        ))}
    </div>

    </div>
  )
}

export default BlueSlide