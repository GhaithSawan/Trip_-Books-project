import React from "react";
import { Fade } from "react-awesome-reveal";

const Activities = () => {
  return (
    <Fade>
      <div className=" md:max-w-[70%] max-w-[90%]  py-4 m-auto mt-[-60px]  relative flex md:gap-2 md:flex-row flex-col  justify-center z-[98]  ">
        <div className=" relative my-3 shadow-md md:max-w-[33%]">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <h1 className=" font-bold md:text-2xl text-xl text-white ">
              Maldives
            </h1>
          </div>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
            alt=""
            className="  rounded-sm h-full w-full object-cover border-white border-4  "
          />
          <div className=" absolute h-full w-full bg-black/10 top-0 z-10"></div>
        </div>
        <div className=" relative my-3 shadow-md md:max-w-[33%]">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <h1 className=" font-bold md:text-2xl text-xl text-white ">
              Mexico
            </h1>
          </div>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1535262412227-85541e910204?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
            alt=""
            className="  rounded-sm h-full w-full object-cover border-white border-4  "
          />
          <div className=" absolute h-full w-full bg-black/10 top-0 z-10"></div>
        </div>
        <div className=" relative my-3 shadow-md md:max-w-[33%]">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <h1 className=" font-bold md:text-2xl text-xl text-white ">
              Egypt
            </h1>
          </div>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
            alt=""
            className="  rounded-sm h-full w-full object-cover border-white border-4  "
          />
          <div className=" absolute h-full w-full bg-black/10 top-0 z-10"></div>
        </div>
      </div>
    </Fade>
  );
};

export default Activities;
