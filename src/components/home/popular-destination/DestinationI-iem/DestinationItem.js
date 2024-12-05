import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationItem = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="destinationCard">
          <div className="figure">
            <Image
              src={"/assets/images/destination1.webp"}
              width={400}
              height={400}
              className="img-fluid"
              alt="destination"
              title="destination"
            ></Image>
          </div>
          <div className="destinationText">
            <h4>GOA</h4>
            <Link href={"/hotel-list"}> Discover</Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="destinationCard">
          <div className="figure">
            <Image
              src={"/assets/images/destination2.webp"}
              alt="destination"
              width={400}
              height={400}
              className="img-fluid"
              title="destination"
            ></Image>
          </div>
          <div className="destinationText">
            <h4>agra</h4>
            <Link href={"/hotel-list"}> Discover</Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="destinationCard">
          <div className="figure">
            <Image
              src={"/assets/images/destination3.webp"}
              alt="destination"
              width={400}
              height={400}
              className="img-fluid"
              title="destination"
            ></Image>
          </div>
          <div className="destinationText">
            <h4>jaipur</h4> <Link href={"/hotel-list"}> Discover</Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="destinationCard">
          <div className="figure">
            <Image
              src={"/assets/images/destination4.webp"}
              width={400}
              alt="destination"
              height={400}
              className="img-fluid"
              title="destination"
            ></Image>
          </div>
          <div className="destinationText">
            <h4>Bangalore</h4> <Link href={"/hotel-list"}> Discover</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationItem;
