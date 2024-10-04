import Image from "next/image";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa";

export const Enroll = () => {
  return (
    <div className=" p-4 flex flex-col lg:flex-row gap-32 justify-between items-center w-full lg:w-[80%] mx-auto">
      <div className="lg:w-[35%] w-80">
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
        <h2 className="text-[36px] lg:font-medium text-[#1E293B] text-bold  ">
          Contribute to
          <span className="text-primary"> youth</span> empowerment
        </h2>
        <p className="text-[16px] my-3 lg:font-medium  ">
          Create events and share youth development opportunities to empower
          Bangladeshi youth. Manage your event with the Enroll Toolbox.
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
