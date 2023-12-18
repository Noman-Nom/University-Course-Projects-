import React from 'react'
import './Banner.scss'
import { images } from '../../Constants';
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { BannerSource } from '../../SourceFile';


const Banner = () => {
    return (
        <div className='widgets'>

            <div className="widgets__count">
                <div className="students">
                    <h1>7000<span>+</span></h1>
                    <span>Happy 😊 <br /> Customers</span>
                </div>

                <div className="line__img">
                    <img src={images.lineImg} alt="" />
                </div>
                <div className="students">
                    <h1>54<span>+</span></h1>
                    <span>Countries 👨‍🏫 <br /> Branches  </span>
                </div>
            </div>

            <div className="widgets__box">

                    {BannerSource.map((item)=>(

                            <div className='Widget__item' key={item.id}>
                                <div className="item__img">
                                    <img src={item.img} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                    ))}

            </div>
        </div>
    )
}

export default Banner