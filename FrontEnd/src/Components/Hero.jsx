import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade>
      <div className=" h-[90vh] w-full relative">
        <img
          loading="lazy"
          src="https://images.pexels.com/photos/1488331/pexels-photo-1488331.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-full w-full  object-cover"
        />
        <div className=" md:w-[70%] m-auto   ">
          <div className=" absolute top-[50%] z-20  translate-y-[-50%] md:top-[45%] p-4 max-w-[75%] md:w-[50%] ">
            <h2 className=" font-bold sm:text-4xl text-3xl text-white">
              Find Your Spichal{" "}
            </h2>
            <h2 className=" font-bold sm:text-4xl text-3xl text-white ital">
              Trip With Weekaway
            </h2>
            <p className="text-white py-2 md:text-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ratione optio animi temporibus accusantium voluptate suscipit quas
              iusto libero deleniti repudiandae voluptatem nobis illum ipsam,
              impedit molestiae hic. Praesentium, quia.
            </p>
          </div>
        </div>
        {/* overlay  */}
        <div className=" bg-black/30 w-full h-full  absolute top-0 z-10"></div>
      </div>
    </Fade>
  );
};

export default Hero;
