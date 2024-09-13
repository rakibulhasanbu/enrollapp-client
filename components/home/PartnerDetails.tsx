import Image from "next/image";
import React from "react";

export const PartnerDetails = () => {
  return (
    <div className="relative w-full p-4 my-80 lg:my-0">
      <img
        className="w-[55px] lg:left-10 absolute top-40 lg:top-0  hidden "
        src="/assets/Ellipse 266.png"
        alt=""
      />
      <img
        className="w-[94px] absolute lg:top-40 left-52 pb-5 lg:pb-0 "
        src="/assets/Ellipse 263.png"
        alt=""
      />
      <img
        className="absolute lg:right-20 lg:top-60 w-[67px] right-5 lg:right-0"
        src="/assets/Ellipse 264.png"
        alt=""
      />
      <img
        className="w-[84px] lg:right-10 lg:top-96 absolute "
        src="/assets/Ellipse 265.png"
        alt=""
      />

      {/* middle part */}
      <div className=" lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="lg:w-[560px] relative mt-28 lg:mt-0 ">
          <img src="/assets/comma.png" alt="" className="w-[69px] absolute  " />
          <p className="text-center px-20">
            Elementum delivered the site with inthe timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn`t used, which have also proved to
            be easy to use and reliable
          </p>
          <img
            src="/assets/comma (1).png"
            alt=""
            className="w-[69px] absolute lg:right-0 right-5 "
          />
        </div>
      </div>
      <img
        className="w-[90px] lg:absolute lg:top-0 lg:right-44 lg:top-40"
        src="/assets/Ellipse 270.png"
        alt=""
      />
      <img
        className="w-20 absolute right-5 lg:right-0 lg:left-80 lg:top-[470px] "
        src="/assets/Ellipse 267.png"
        alt=""
      />
      <img
        className="w-[100px] absolute lg:top-80 left-40"
        src="/assets/Ellipse 268.png"
        alt=""
      />
      <img
        className="w-[113px] lg:right-60 mt-20 lg:mt-0 lg:top-[450px] absolute "
        src="/assets/Ellipse 269.png"
        alt=""
      />
    </div>
  );
};
