import React from 'react'
import './DishesType.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { DishesTypeSource } from '../../SourceFile'
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'

const DishesType = () => {
    return (
        <div className='modules'>

            <div className="module__top">

                <h1> <FaQuoteLeft/> <span>Our Daily Menu </span><br />
                 more in keeping with the final result, the <FaQuoteRight />
                </h1>
                <p> <RiSingleQuotesL />
                In order to have a result that is more in keeping with the final result, the graphic designers
                    <RiSingleQuotesR />
                </p>
            </div>
            <div className="module__bottom">
                {DishesTypeSource .map((item) => (
                    <div className='module__item' key={item.id}>
                        <div className="module__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="module__title">

                            <h1>{item.name}</h1>
                            <div />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default DishesType