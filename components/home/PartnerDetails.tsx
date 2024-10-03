import Image from "next/image";
import React from "react";

export const PartnerDetails = () => {
  return (
    <div className="relative w-full p-4 my-80 lg:my-0">
      <Image
        width={55}
        height={55}
        className="w-[55px] lg:left-30 absolute top-40 lg:top-0  hidden "
        src="/assets/Ellipse 266.png"
        alt=""
      />
      <Image
        width={55}
        height={55}
        className="w-[80px] absolute lg:top-32 lg:left-80 md:left-96 left-52 pb-5 lg:pb-0 "
        src="/assets/Ellipse 263.png"
        alt=""
      />
      <Image
        width={55}
        height={55}
        className="absolute  lg:right-1/2 lg:top-40 w-[67px] right-5 "
        src="/assets/Ellipse 264.png"
        alt=""
      />
      <Image
        width={55}
        height={55}
        className="w-[84px] lg:right-40 lg:top-[400px] xl:top-[500] absolute "
        src="/assets/Ellipse 265.png"
        alt=""
      />

      {/* middle part */}
      <div className=" lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="lg:w-[560px] relative mt-28 lg:mt-0 ">
          <img src="/assets/comma.png" alt="" className="w-[69px] absolute  " />
          <p className="text-center lg:mt-5 px-20">
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
        className="w-[70px] lg:absolute  lg:right-80 lg:top-40"
        src="/assets/Ellipse 270.png"
        alt=""
      />
      <img
        className="w-16 absolute right-5 lg:right-0 lg:left-96 lg:top-[500px] "
        src="/assets/Ellipse 267.png"
        alt=""
      />
      <img
        className="w-[80px] absolute lg:top-96 left-40"
        src="/assets/Ellipse 268.png"
        alt=""
      />
      <img
        className="w-[80px] lg:right-96 mt-20 lg:mt-0 lg:top-[550px] absolute "
        src="/assets/Ellipse 269.png"
        alt=""
      />
    </div>
  );
};
