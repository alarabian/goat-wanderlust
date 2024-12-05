"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <>
      <header className={scroll ? "header sticky" : "header"}>
        <nav className="navbar navbar-expand-lg ourHeader">
          <div className="container">
            <Link className="navbar-brand p-0" href="/">
              <Image
                src={"/assets/images/logo.png"}
                alt="Brand"
                width={160}
                height={85}
              ></Image>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Recharge & bill payment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href={""}>
                    Travel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link signup" href="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
