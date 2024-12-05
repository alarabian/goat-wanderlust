import Image from "next/image";
import Link from "next/link";
import React from "react";

const MaxView = () => {
  return (
    <>
      <section className="maxView sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="viewInfo">
                <div className="figure">
                  <Image
                    src={"/assets/images/max2.png"}
                    width={543}
                    height={474}
                    className="img-fluid"
                    title="flight"
                    alt="Flight"
                  ></Image>
                  <div className="text">
                    <span>Enjoy Summer Deals</span>
                    <h3>Up to 70% Discount!</h3>
                    <Link href="/">learn more</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="viewInfo">
                <div className="figure">
                  <Image
                    src={"/assets/images/max1.png"}
                    width={543}
                    height={474}
                    className="img-fluid"
                    title="flight"
                    alt="Flight"
                  ></Image>
                  <div className="text">
                    <h3>Things To Do On Your Trip</h3>
                    <Link href="/">learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaxView;
