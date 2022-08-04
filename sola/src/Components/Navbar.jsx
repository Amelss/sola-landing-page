import React from 'react'
import { slide as Menu } from "react-burger-menu";
import '../sidebar.css'

export default function Navbar() {
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
                <a href="#">Borrow</a>{" "}
              </li>
              <li className="pl-3">
                {" "}
                <a href="#">Community</a>
              </li>
              <li className="pl-3">
                {" "}
                <a href="#">Docs</a>{" "}
              </li>
              <li className="pl-3">
                {" "}
                <a href="#">Careers</a>{" "}
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
      <nav className="md:hidden">
        <Menu left>
          <ul className="px-1 text-xs font-libreFranklin font-semibold tracking-wide">
            <li className="pt-3">
              <a href="#">Borrow</a>{" "}
            </li>
            <li className="pt-3">
              {" "}
              <a href="#">Community</a>
            </li>
            <li className="pt-3">
              {" "}
              <a href="#">Docs</a>{" "}
            </li>
            <li className="pt-3">
              {" "}
              <a href="#">Careers</a>{" "}
            </li>
          </ul>
        </Menu>
      </nav>
    </div>
  );
}
 