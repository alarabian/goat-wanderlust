import React from "react";
const properties = [
  { id: 1, location: "Hawaii", propertiesCount: 12683 },
  { id: 2, location: "Istanbul", propertiesCount: 12683 },
  { id: 3, location: "San Diego", propertiesCount: 12683 },
  { id: 4, location: "Phuket", propertiesCount: 12683 },
  { id: 5, location: "Reykjavik", propertiesCount: 12683 },
  { id: 6, location: "Santorini", propertiesCount: 12683 },
  { id: 7, location: "Los Angeles", propertiesCount: 12683 },
  { id: 8, location: "Florence", propertiesCount: 12683 },
  { id: 9, location: "Mykonos", propertiesCount: 12683 },
  { id: 10, location: "Paris", propertiesCount: 12683 },
  { id: 11, location: "Dubai", propertiesCount: 12683 },
  { id: 12, location: "Krakow", propertiesCount: 12683 },
  { id: 13, location: "Jersey", propertiesCount: 12683 },
  { id: 14, location: "Prague", propertiesCount: 12683 },
  { id: 15, location: "Amsterdam", propertiesCount: 12683 },
  { id: 16, location: "Ibiza", propertiesCount: 12683 },
  { id: 17, location: "Boston", propertiesCount: 12683 },
  { id: 18, location: "Florence", propertiesCount: 12683 },
  { id: 19, location: "Mykonos", propertiesCount: 12683 },
  { id: 20, location: "London", propertiesCount: 12683 },
];

const Destinations = () => {
  return (
    <>
      <section className="destination sectionSpace">
        <div className="container">
          <div className="sectionTitle">
            <h2>Destinations we love</h2>
            <p>
              A Booking is a system for travels in the form odf service, A vibe
              and explore te top destinations in worlds
            </p>
          </div>
          <div className="destinationList">
            <ul>
              {properties.map((item) => {
                return (
                  <li key={item.id}>
                    <h5>{item.location}</h5>
                    <span>{item.propertiesCount} Properties</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
