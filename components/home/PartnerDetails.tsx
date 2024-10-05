import Image from "next/image";
import React from "react";
import { Partner } from "./Partner";

export const PartnerDetails = () => {
  return (
    <div>
      <Partner />

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
          className="w-[80px] absolute xl:top-48 xl:left-80 md:left-96 lg:left-40 pb-5 lg:pb-0 "
          src="/assets/Ellipse 263.png"
          alt=""
        />
        <Image
          width={55}
          height={55}
          className="absolute  xl:right-1/2 xl:top-48 w-[67px] right-5 "
          src="/assets/Ellipse 264.png"
          alt=""
        />
        <Image
          width={55}
          height={55}
          className="w-[84px] xl:right-48 lg:top-[400px] xl:top-[500] absolute "
          src="/assets/Ellipse 265.png"
          alt=""
        />

        {/* middle part */}
        <div className=" lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="lg:w-[50%] relative mt-28 lg:mt-0 ">
            <Image
              src="/assets/comma.png"
              alt=""
              width={55}
              height={55}
              className="w-[69px] absolute  "
            />
            <p className="md:text-[12px] lg:text-lg xl:text-2xl lg:mt-5 px-20 text-justify xl:font-medium">
              Elementum delivered the site with inthe timeline as they
              requested. Inthe end, the client found a 50% increase in traffic
              with in days since its launch. They also had an impressive ability
              to use technologies that the company hasn`t used, which have also
              proved to be easy to use and reliable,proved to be easy to use and
              reliable
            </p>

            <Image
              src="/assets/comma (1).png"
              alt=""
              width={55}
              height={55}
              className="w-[69px] absolute lg:right-0 right-5 "
            />
          </div>
        </div>
        <Image
          className="w-[70px] lg:absolute  xl:right-80 xl:top-48"
          src="/assets/Ellipse 270.png"
          alt=""
          width={55}
          height={55}
        />
        <Image
          className="w-16 absolute right-5 lg:right-0 lg:left-96 lg:top-[600px] "
          src="/assets/Ellipse 267.png"
          alt=""
          width={55}
          height={55}
        />
        <Image
          className="w-[80px] absolute lg:top-96 left-40 lg:left-60"
          src="/assets/Ellipse 268.png"
          alt=""
          width={55}
          height={55}
        />
        <Image
          className="w-[80px] lg:right-96 mt-20 lg:mt-0 xl:top-[600px] absolute "
          src="/assets/Ellipse 269.png"
          alt=""
          width={55}
          height={55}
        />
      </div>
    </div>
  );
};
