import Image from "next/image";
import React from "react";

export const PartnerDetails = () => {
  return (
    <div className="relative">
      <img
        className="w-[55px] left-10 absolute"
        src="/assets/Ellipse 266.png"
        alt=""
      />
      <img
        className="w-[94px] absolute top-10 left-52"
        src="/assets/Ellipse 263.png"
        alt=""
      />
      <img
        className="absolute right-20 top-40 w-[67px]"
        src="/assets/Ellipse 264.png"
        alt=""
      />
      <img
        className="w-[84px] right-10 top-72 absolute "
        src="/assets/Ellipse 265.png"
        alt=""
      />

      {/* middle part */}
      <div className=" h-screen flex flex-col justify-center items-center">
        <div className="w-[560px] relative">
          <img src="/assets/comma.png" alt="" className="w-[69px] absolute  " />
          <p className="text-[18px] text-center px-20">
            Elementum delivered the site with inthe timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn`t used, which have also proved to
            be easy to use and reliable
          </p>
          <img
            src="/assets/comma (1).png"
            alt=""
            className="w-[69px] absolute right-0 "
          />
        </div>
      </div>
      <img
        className="w-[109px] absolute top-0 right-44"
        src="/assets/Ellipse 270.png"
        alt=""
      />
      <img
        className="w-[92px] absolute left-40 top-[400px]"
        src="/assets/Ellipse 267.png"
        alt=""
      />
      <img
        className="w-[142px] absolute top-48 left-20"
        src="/assets/Ellipse 268.png"
        alt=""
      />
      <img
        className="w-[113px] right-40 top-[400px] absolute"
        src="/assets/Ellipse 269.png"
        alt=""
      />
    </div>
  );
};
