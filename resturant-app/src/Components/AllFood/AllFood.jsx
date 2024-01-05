import { useEffect, useState } from 'react'
import './AllFood.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
// import { AllFoodSource } from '../../SourceFile';
import { images } from '../../Constants';
import { CiStopwatch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AllFood = () => {

    const [value, setValue] = useState([])


    const handleDelete = async (id) => {
        // console.log("id = ", id)

        try {

            await axios.delete("http://localhost:8802/food/" +id)
            setValue((prevValue) => prevValue.filter(item => item.id !== id));
        } catch (error) {
            console.log(error)
        }

    }

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

        const fetchData = async () => {

            try {
                const res = await axios.get('http://localhost:8802/food')
                console.log(res.data);
                setValue(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
       <div className='allfood'>

            <div className="allfood__top">
                <div className='allfood__top-content'>
                    <h1><FaQuoteLeft /> ALL DISHES<FaQuoteRight /> </h1>
                    <p> <RiSingleQuotesL /> Lorem, ipsum dolor sit ametesse ea. Voluptatum minima quisquam placeat mollitia <br /> repellendus aliquam voluptatem! <RiSingleQuotesR /></p>

                    <div className='allfood__add-btn'>
                        <button> <Link to='/addFood'>Add New Food</Link> </button>
                    </div>
                </div>


            </div>

            <div className="allfood__bottom">

                {value.map((item) => (
                    <div className='allfood__item' key={item.id}>
                        <div className="allfood__img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="allfood__content">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>


                        </div>

                        <div className="allfood__rating">
                            <h4><CiStopwatch /> 24Hr Avb</h4>
                            <h2>${item.price}</h2>
                        </div>

                        <div className="allfood__emoji">


                            <div className="allfood-img">
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

export default AllFood