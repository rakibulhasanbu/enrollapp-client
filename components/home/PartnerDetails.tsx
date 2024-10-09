import Image from "next/image";
import React from "react";
import { Partner } from "./Partner";

export const PartnerDetails = () => {
  return (
    <div>
      <Partner />

      <div className="relative w-full p-4 my-28 lg:my-0">
        <Image
          width={55}
          height={55}
          className="2xl:w-[80px] lg:w-[70px] w-10 hidden lg:block absolute xl:top-48 2xl:left-80 md:left-96 lg:left-52 pb-5 lg:pb-0 -top-16 left-20 "
          src="/assets/Ellipse 263.png"
          alt=""
        />
        <Image
          width={55}
          height={55}
          className="absolute lg:right-1/2 lg:top-48 2xl:block hidden 2xl:border-r-black  xl:right-1/2 xl:top-48 lg:w-[67px] w-8 right-5 -top-16 "
          src="/assets/Ellipse 264.png"
          alt=""
        />
        <Image
          width={55}
          height={55}
          className="2xl:w-[84px] lg:w-[70px] w-10 hidden lg:block xl:right-48 lg:top-[400px] xl:top-[500] absolute "
          src="/assets/Ellipse 265.png"
          alt=""
        />

        {/* middle part */}
        <div className=" lg:h-[80vh] lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="lg:w-[60%] 2xl:w-[50%] relative -mt-2 lg:mt-0 ">
            <Image
              src="/assets/comma.png"
              alt=""
              width={55}
              height={55}
              className="2xl:w-[69px] lg:w-[50px]  absolute w-5  "
            />
            <p className="md:text-sm lg:text-lg xl:text-2xl lg:mt-5 px-8 md:px-12 lg:px-20 text-justify xl:font-medium leading-relaxed text-gray-700">
              Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in traffic
              within days of its launch. They also had an impressive ability to
              use technologies that the company hadn’t used, which have also
              proved to be easy to use and reliable.proved to be easy to use and
              reliable.
            </p>

            <Image
              src="/assets/comma (1).png"
              alt=""
              width={55}
              height={55}
              className="2xl:w-[69px] lg:w-[50px]  absolute lg:right-0 right-2 w-5"
            />
          </div>
        </div>
        <Image
          className="lg:w-[70px] lg:absolute hidden lg:block lg:right-40  2xl:right-80 xl:top-48 w-8 "
          src="/assets/Ellipse 270.png"
          alt=""
          width={55}
          height={55}
        />
        <Image
          className="w-16 absolute hidden 2xl:block  right-5 lg:right-0 lg:left-96 lg:top-[600px] "
          src="/assets/Ellipse 267.png"
          alt=""
          width={55}
          height={55}
        />
        <Image
          className="2xl:w-[80px] lg:w-[60px] absolute lg:top-96 hidden lg:block left-40 lg:left-60"
          src="/assets/Ellipse 268.png"
          alt=""
          width={55}
          height={55}
        />
        <Image
          className="lg:w-[80px] w-10 lg:right-96 mt-20 lg:mt-0 2xl:top-[600px] absolute hidden 2xl:block  left-30 "
          src="/assets/Ellipse 269.png"
          alt=""
          width={55}
          height={55}
        />
      </div>
    </div>
  );
};
