import React from "react";
import { RiMessage3Line } from "react-icons/ri";
import { FaRegClock, FaPhoneAlt } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const TopBar = () => {
  return (
    <Slide direction="down" duration="1200">
      <div className="flex  justify-between items-center px-2 py-2 flex-wrap">
        <div className="flex items-center ">
          <RiMessage3Line size={30} className="mr-2 text-[--primary-dark]" />
          <h1 className=" font-bold text-2xl">WEEKAWAY</h1>
        </div>
        <div className="flex items-center ">
          <div className=" hidden md:flex items-center gap-5 mr-10 ">
            <div className="flex items-center gap-2 text-sm">
              <FaRegClock size={15} className="text-[--primary-dark]" />
              9AM-5AM
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt size={15} className="text-[--primary-dark]" />
              0-320-443-2211
            </div>
          </div>
          <button className="text-[.8rem] sm:text-[1rem]">
            Get a Free Quote
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default TopBar;
