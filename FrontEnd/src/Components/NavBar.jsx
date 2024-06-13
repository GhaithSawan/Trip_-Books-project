import React, { useState } from "react";
import { FaFacebookSquare, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" relative flex items-center bg-black/90 text-white px-3 py-2  justify-between">
      {/* ul li href  */}
      <ul className="hidden  sm:flex items-center ">

        <li>
          <a href="#Deals">Deals</a>
        </li>
        <li>
          <a href="#Gallery">Gallery</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
        </li>
        <Link to={"/AdminPage"}>
          <li>
            AdminPage
          </li>
        </Link>

      </ul>
      {/* social media */}
      <div className="flex items-center gap-5 mr-3 ">
        <a href="">
          <FaFacebookSquare size={20} />
        </a>
        <a href="">
          <RiInstagramFill size={20} />
        </a>
        <a href="">
          <FaTwitter size={20} />
        </a>
        <a href="">
          <FaGooglePlusG size={20} />
        </a>
      </div>
      {/* meun button  */}
      <div
        onClick={() => setNav(!nav)}
        className={`${nav ? " fixed top-5 right-5" : ""
          } mx-3 sm:hidden cursor-pointer z-[100]`}
      >
        <CiMenuFries size={22} />
      </div>
      {/* ul li href  */}
      <div
        className={`${nav ? "left-0" : "left-[-100%]"
          } fixed top-0  bg-black h-[100vh] w-full z-[99]  `}
      >
        <ul className="flex flex-col  mt-12 text-[1rem] ">
          <a
            href="/"
            className="w-full text-center"
            onClick={() => setNav(!nav)}
          >
            <li className=" hover:tracking-wide	 hover:bg-gray-900">Home</li>
          </a>
          <a
            href="#Deals"
            className="w-full text-center"
            onClick={() => setNav(!nav)}
          >
            <li className=" hover:tracking-wide	 hover:bg-gray-900">Deals</li>
          </a>
          <a
            href="#Gallery"
            className="w-full text-center"
            onClick={() => setNav(!nav)}
          >
            <li className=" hover:tracking-wide	 hover:bg-gray-900">Gallery</li>
          </a>
          <a
            href="#Contact"
            className="w-full text-center"
            onClick={() => setNav(!nav)}
          >
            <li className=" hover:tracking-wide	 hover:bg-gray-900">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
