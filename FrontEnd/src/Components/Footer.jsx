import React from "react";
import { Slide } from "react-awesome-reveal";
import { RiMessage3Line } from "react-icons/ri";

const Footer = () => {
  return (
    <Slide >
      <div className=" border p-3 flex mt-10 items-center justify-center">
        <RiMessage3Line size={30} className="mr-2 text-[--primary-dark]" />
        <span className=" font-bold md:text-2xl lg">WEEKAWAY</span>
      </div>
    </Slide>
  );
};

export default Footer;
