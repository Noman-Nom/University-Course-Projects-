import { React, useEffect, useState } from 'react'
import './Menu.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri';
import axios from 'axios';
import { images } from '../../Constants';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

const Menu = () => {


    const navigate = useNavigate()
    const [value, setValue] = useState([])


    const handleCartClick = async (item) => {


        try {

            await axios.post(`http://localhost:8802/cart`, item);

            toast.success('Item added to the cart!');



        } catch (error) {
            console.log(error)  // error occur
        }
        // console.log(e.target.click , "yes..")
    }

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8802/menu')
                // console.log(res.data);
                setValue(res.data)


            } catch (error) {
                console.log(error);

            }



        }
        FetchData()
    }, [])

    const handleDelete = async (id) => {
        // console.log("id = ", id)

        try {

            await axios.delete("http://localhost:8802/menu/" +id)
            setValue((prevValue) => prevValue.filter(item => item.id !== id));
        } catch (error) {
            console.log(error)
        }

    }
    return (







        <div className='menus'>

            <div className="menu__top">

                <div className='menu__top-content'>

                    <h1><FaQuoteLeft /> Our Menu<FaQuoteRight /> </h1>
                    <p> <RiSingleQuotesL /> Lorem, ipsum dolor sit ametesse ea. Voluptatum minima quisquam placeat mollitia <br /> repellendus aliquam voluptatem! <RiSingleQuotesR /></p>

                    <div className='menu__add-btn'>
                        <button> <Link to='/addFood'>Add New Food</Link> </button>
                    </div>
                </div>




            </div>

            <div className="menu__bottom">


                {value.map((item) => (
                    <div className='menu__item' key={item.id}>
                        <div className="menu__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="menu__content">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>


                        </div>

                        <div className="menu__rating">
                            <h4><CiStopwatch /> 24Hr Avb</h4>
                            <span><FaStar /></span>
                        </div>

                        <div className="menu__emoji">


                            <div className="emoji-img">
                                < img src={images.cart} alt="" onClick={() => handleCartClick(item)} />

                                <img src={images.deletepic} onClick={() => handleDelete(item.id)} alt="" />
                            </div>
                            <h2>{item.offer}</h2>
                          
                        </div>
                        <ToastContainer 
                        position="bottom-center"
                        autoClose={1000}
                        />
                    </div>
                ))}

            </div>


        </div>


    )
}

export default Menu