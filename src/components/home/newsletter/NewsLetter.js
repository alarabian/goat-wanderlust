import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

const NewsLetter = () => {
  return (
    <>
      <section className="newsLetter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="newsContent">
                <div className="icon">
                  <SlEnvolopeLetter />
                </div>
                <div className="text">
                  <h2>Your Travel Journey Starts Here</h2>
                  <p>Sign up and we`'ll send the best deals to you </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="newsInput">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="form-control"
                />
                <button type="button" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
