import Image from "next/image";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa";

export const Enroll = () => {
  return (
    <div className=" p-4 flex flex-col lg:flex-row lg:gap-32 gap-10 justify-between items-center w-full lg:w-[80%] mx-auto">
      <div className="lg:w-[33%] w-80">
        <Image
          src="/assets/Frame 1618872957.png"
          alt="#"
          layout="responsive"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
      <div className="my-5 lg:w-[45%] space-y-4">
        <h2 className="text-[28px] lg:text-[36px] font-semibold leading-tight text-[#1E293B]">
          Contribute to
          <span className="text-primary font-medium"> youth</span> empowerment
        </h2>
        <p className="text-[16px] lg:text-lg  my-5 lg:my-4 font-medium text-gray-600 leading-relaxed">
          Create events and share youth development opportunities to empower
          Bangladeshi youth. Manage your event with the Enroll Toolbox.
        </p>
        <div className="">
          <AppButton
            label="Create an event"
            variant="outlined"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};
