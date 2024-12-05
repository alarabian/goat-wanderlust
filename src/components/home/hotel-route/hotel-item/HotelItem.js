import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import React from "react";

const HotelItem = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight.png"}
                width={257}
                height={257}
                className="img-fluid"
                title="flight"
                alt="Flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                The Montcalm At Brewery London City
              </Link>
            </h5>
            <span>Westminster Borough, London</span>
            <p>
              Starting from <span> US$72</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight1.png"}
                alt="Flight"
                width={257}
                height={257}
                className="img-fluid"
                title="flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                Staycity Aparthotels Deptford Bridge Station
              </Link>
            </h5>
            <span>Ciutat Vella, Barcelona</span>
            <p>
              Starting from <span> US$85</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight2.png"}
                width={257}
                alt="Flight"
                height={257}
                className="img-fluid"
                title="flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                The Westin New York at Times Square West
              </Link>
            </h5>
            <span>Manhattan, New York</span>
            <p>
              Starting from <span> US$68</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight3.png"}
                width={257}
                alt="Flight"
                height={257}
                className="img-fluid"
                title="flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                DoubleTree by Hilton Hotel New York Times Square West
              </Link>
            </h5>
            <span>Vaticano Prati, Rome</span>
            <p>
              Starting from <span> US$89</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight4.png"}
                alt="Flight"
                width={257}
                height={257}
                className="img-fluid"
                title="flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                The Montcalm At Brewery London City
              </Link>
            </h5>
            <span>Westminster Borough, London</span>
            <p>
              Starting from <span> US$90</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight5.png"}
                alt="Flight"
                width={257}
                height={257}
                className="img-fluid"
                title="flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                Staycity Aparthotels Deptford Bridge Station
              </Link>
            </h5>
            <span>Ciutat Vella, Barcelona</span>
            <p>
              Starting from <span> US$85</span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight6.png"}
                width={257}
                height={257}
                className="img-fluid"
                title="flight"
                alt="Flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                The Montcalm At Brewery London City
              </Link>
            </h5>
            <span>Westminster Borough, London</span>
            <p>
              Starting from <span> US$72</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="flightCard">
          <div className="figure">
            <Link href="/flight-list">
              <Image
                src={"/assets/images/flight7.png"}
                alt="Flight"
                width={257}
                height={257}
                className="img-fluid"
                title="flight"
              ></Image>
              <div className="wishlistIcon">
                <FaRegHeart />
              </div>
            </Link>
          </div>
          <div className="flightText">
            <h5>
              <Link href="/flight-list">
                Staycity Aparthotels Deptford Bridge Station
              </Link>
            </h5>
            <span>Ciutat Vella, Barcelona</span>
            <p>
              Starting from <span> US$85</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelItem;
