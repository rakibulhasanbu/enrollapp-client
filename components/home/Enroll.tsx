import Image from "next/image";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa";

export const Enroll = () => {
  return (
    <div className=" p-4 flex flex-col lg:flex-row gap-20 justify-between items-center w-full lg:w-[80%] mx-auto">
      <div className="lg:w-full w-80">
        <Image
          src="/assets/Frame 1618872957.png"
          alt="#"
          layout="responsive"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
      <div className="my-5">
        <h2 className="text-[32px] text-[#1E293B] text-bold  ">
          Enroll gives you more
          <span className="text-primary"> Personalize</span> event Host
        </h2>
        <p className="text-[16px] my-5 ">
          Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that
        </p>
        <div className="">
          <AppButton
            label="Create a event"
            variant="outlined"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};
