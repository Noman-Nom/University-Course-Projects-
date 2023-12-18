import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { images } from "../../Constants";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";
import "./Promo.scss";

const Promo = () => {
  return (
    <>
      <div className="videoSection">
        <div className="left">
          <div className="left__content">
            <h1>
              <FaQuoteLeft /> fill text <span>placeholder text </span>Lorem,
              ipsum <span> blind text .</span>
              <FaQuoteRight />
            </h1>
            <p>
              {" "}
              <RiSingleQuotesL />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              officia et soluta iste dolorum fugiat. Lorem ipsum dolor sit amet.{" "}
              <RiSingleQuotesR />
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right__content">
            <div className="video1">
              <video autoPlay loop muted>
                <source src={images.video1} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}
      <div className="videoSection">
        <div className="right">
          <div className="right__content">
            <div className="video1">
              <video autoPlay loop muted>
                <source src={images.video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="left__content">
            <h1>
              <FaQuoteLeft /> fill text <span>placeholder text </span>Lorem,
              ipsum <span> blind text .</span>
              <FaQuoteRight />
            </h1>
            <p>
              {" "}
              <RiSingleQuotesL />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              officia et soluta iste dolorum fugiat. Lorem ipsum dolor sit amet.{" "}
              <RiSingleQuotesR />
            </p>
          </div>
        </div>
      </div>

      {/* 3rd */}

      <div className="videoSection">
        <div className="left">
          <div className="left__content">
            <h1>
              <FaQuoteLeft /> fill text <span>placeholder text </span>Lorem,
              ipsum <span> blind text .</span>
              <FaQuoteRight />
            </h1>
            <p>
              {" "}
              <RiSingleQuotesL />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              officia et soluta iste dolorum fugiat. Lorem ipsum dolor sit amet.{" "}
              <RiSingleQuotesR />
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right__content">
            <div className="video1">
              <video autoPlay loop muted>
                <source src={images.video3} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
