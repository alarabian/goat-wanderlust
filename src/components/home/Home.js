"use client";
import React, { useEffect } from "react";
import TravelBooking from "./travel-booking/TravelBooking";
import PopularDestination from "./popular-destination/PopularDestination";
import ReferEarn from "./refer-earn/ReferEarn";
import AppInfo from "./app-info/AppInfo";
import Testimonial from "./testimonial/Testimonial";
import BusRoutes from "./bus-routes/BusRoutes";
import HotelRoute from "./hotel-route/HotelRoute";
import RechargeComp from "./recharge-comp/RechargeComp";
import MaxView from "./max-view/MaxView";
import NewsLetter from "./newsletter/NewsLetter";
import Destinations from "./destinations/Destinations";

const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <section
        className="coverSec sectionSpace bgCover"
        style={{ backgroundImage: `url("/assets/images/hero_bg_1_1.JPG")` }}
      >
        <div className="container">
          <div className="bannerText">
              <h1>Find Next Place To Visit </h1>
              <p>Discover amzaing places at exclusive deals</p>
            </div>
          <div className="megaHeroTab">
            
            <TravelBooking />
          </div>
        </div>
      </section>

      <PopularDestination />
      <MaxView />
      <HotelRoute />
      <ReferEarn />
      <Destinations />
      <NewsLetter />
      {/* <BusRoutes />
      <AppInfo />
      <Testimonial /> */}
    </>
  );
};

export default Home;
