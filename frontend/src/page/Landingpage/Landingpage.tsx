import React from "react";
import search from "../../../public/images/navimg/search.svg";
import logo from "../../../public/images/navimg/logo.svg";
import shop from "../../../public/images/navimg/shop.svg";

export default function Landingpage() {
  return (
    <div className="w-full px-[40px] py-[20px] shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Classic Rides Logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">Classic Rides</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About Us</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Contact Us</li>

          {/* Icons */}
          <li>
            <img src={search} alt="Search" className="w-5 h-5 cursor-pointer" />
          </li>
          <li>
            <img
              src={shop}
              alt="Shopping Cart"
              className="w-5 h-5 cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
