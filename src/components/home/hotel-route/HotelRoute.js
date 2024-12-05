import React from 'react'
import HotelItem from './hotel-item/HotelItem'

const HotelRoute = () => {
  return (
    <>
      <section className="flightRoute sectionSpace">
        <div className="container">
          <div className="sectionTitle">
            <h2>Recommended</h2>
            <p>
              A Booking is a system for travels in the form odf service, A vibe
              and explore te top destinations in worlds
            </p>
          </div>
          <div className="row">
            <HotelItem />
          </div>
        </div>
      </section>
    </>


  )
}

export default HotelRoute