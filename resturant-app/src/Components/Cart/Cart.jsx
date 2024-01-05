import { React, useEffect, useState } from "react";
import "./Cart.scss";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

import { CiStopwatch } from "react-icons/ci";

import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";
import axios from "axios";
import { images } from "../../Constants";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8802/cart");
        console.log(res.data);
        setValue(res.data);
        calculateTotalBill(res.data); 
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log("id = ", id);

    try {
      await axios.delete("http://localhost:8802/cart/" + id);
      setValue((prevValue) => prevValue.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const calculateTotalBill = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalBill(total);
};


  return (
    <div className="cart">
      <div className="cart__top">
        <div className="cart__top-content">
          <h1>
            <FaQuoteLeft />
            Your Cart Items
            <FaQuoteRight />{" "}
          </h1>
          <p>
            {" "}
            <RiSingleQuotesL /> Lorem, ipsum dolor sit ametesse ea. Voluptatum
            minima quisquam placeat mollitia <br /> repellendus aliquam
            voluptatem! <RiSingleQuotesR />
          </p>
        </div>
      </div>

      <div className="cart__bottom">
        {value.map((item) => (
          <div className="cart__item" key={item.id}>
            <div className="cart__img">
              <img src={item.img} alt="" />
            </div>
            <div className="cart__content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>

            <div className="cart__rating">
              <h4>
                <CiStopwatch /> 24Hr Avb
              </h4>
              <h2> ${item.price}</h2>
            </div>

            <div className="cart__emoji">
              <div className="cart-img">
                {/* < img src={images.cart} alt="" onClick={() => handleCartClick(item)} /> */}

                <img
                  src={images.deletepic}
                  onClick={() => handleDelete(item.id)}
                  alt=""
                />
              </div>
              <h2>{item.offer}</h2>
            </div>

            <ToastContainer position="bottom-center" autoClose={1000} />

          
          </div>
        ))}
      </div>
      <div className="cart__total">
              <h2>Total Bill: ${totalBill}</h2>
              {/* Add your payment button or form here */}
            </div>
    </div>
  );
};

export default Cart;
