import React, { useState } from 'react'
import Hamburger from './Hamburger';

import '../sidebar.css'

export default function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }



  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="../images/logo.png" alt="logo" className="w-10 py-4" />

        <div className="flex items-center">
          <h1 className="text-2xl tracking-wider font-pacifico text-black">
            Sola
          </h1>
          <nav className="hidden md:flex">
            <ul className="flex px-4 text-xs font-libreFranklin font-semibold tracking-wide">
              <li className="pl-3">
                <a href="/">Buy</a>
              </li>
              <li className="pl-3">
                <a href="/">Community</a>
              </li>
              <li className="pl-3">
                <a href="/">Docs</a>
              </li>
              <li className="pl-3">
                {" "}
                <a href="/">Careers</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="hidden: md:flex md:px-4 ">
        <button className="hidden md:flex font-libreFranklin text-sm font-semibold tracking-wider px-4 py-2 border-pink-500 border-2 rounded-md  ">
          Select Wallet
        </button>
      </div>

      {/*------------ MOBILE MENU -------------*/}

      <nav className="navigation h-full w-full md:hidden">
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <ul className="my-10 py-10 px-6">
          <li className="mobile-links pb-6">
            <a href="/">Buy</a>{" "}
          </li>
          <li className="mobile-links pb-6">
            <a href="/">Community</a>{" "}
          </li>
          <li className="mobile-links pb-6">
            <a href="/">Docs</a>{" "}
          </li>
          <li className="mobile-links pb-6">
            <a href="/">Careers</a>{" "}
          </li>
          <li className="mobile-links mt-10 py-2 pl-2 border-4 border-white w-40 rounded-md">
            <a href="/">Select Wallet</a>
          </li>
        </ul>

        <style jsx>{`
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            height: 100vh;
            width: 100vw;
            margin-top: 0;
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(
              218deg,
              rgba(251, 230, 63, 1) 0%,
              rgba(255, 16, 209, 1) 100%
            );
          }
        `}</style>
      </nav>
    </div>
  );
}
 