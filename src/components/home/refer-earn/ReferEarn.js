import React from "react";
import { AiFillSound } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa6";

const ReferEarn = () => {
  return (
    <>
      <section
        className="referEarn sectionSpace bgCover"
        style={{ backgroundImage: `url("/assets/images/cover.webp")` }}
      >
        <div className="container">
          
          <div className="innerRefer">
            <div className="innerReferItem">
              <div className="icon">
                <FaRegistered />
              </div>
              <div className="text">
                <h5>Best Price Guarantee</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="innerReferItem">
              <div className="icon">
                <AiFillSound />
              </div>
              <div className="text">
                <h5>Easy & Quick Booking</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            
            <div className="innerReferItem">
              <div className="icon">
                <AiFillSound />
              </div>
              <div className="text">
                <h5>Customer Care 24/7</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferEarn;
