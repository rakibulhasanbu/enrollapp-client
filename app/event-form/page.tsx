import AppQuestion from "@/components/event/form/AppQuestion";
import Question from "@/components/event/form/AppQuestion";
import { CgProfile } from "react-icons/cg";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiArrowUturnLeft, HiArrowUturnRight } from "react-icons/hi2";
import { VscEye } from "react-icons/vsc";

const page = () => {
  return (
    <div>
      {/* navber */}
      <div className="sticky top-0">
        <div className="bg-[#0074D9]">
          <div className="w-[80%] mx-auto text-white flex items-center justify-between py-5">
            <p>Forms</p>
            <p>Enrool Event</p>
            <div className="flex items-center gap-2">
              <p>My Profile</p>
              <CgProfile className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-[#CBD5E1]">
          <div className="w-[80%] mx-auto text-[#475569] flex items-center justify-between py-5">
            <div>Question</div>
            <div className="flex items-center gap-2">
              <HiArrowUturnLeft />
              <HiArrowUturnRight />
              <VscEye />
              <button className="bg-blue-600 rounded-md px-4 py-2 text-white">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full  lg:w-[80%] mx-auto">
        <div className=" bg-white h-40 rounded-sm py-5 px-10 mt-20">
          <h1 className="text-2xl font-semibold text-[#1E293B]">
            Untitled From Title
          </h1>
          <hr className="mb-8" />
          <p className="text-[#968E90]">From Description</p>
          <hr />
        </div>

        <div className="flex items-center gap-1 text-[#0074D9] my-3">
          <FaRegCircleXmark />
          <p>Quick Start With Chart</p>
        </div>

        <div className="grid grid-cols-3 w-full gap-4">
          <input
            type="text"
            className="p-2 border border-blue-700 rounded-md"
          />
          <input
            type="text"
            className="p-2 border border-blue-700 rounded-md"
          />
          <input
            type="text"
            className="p-2 border border-blue-700 rounded-md"
          />
          <input
            type="text"
            className="p-2 border border-blue-700 rounded-md"
          />
          <input
            type="text"
            className="p-2 border border-blue-700 rounded-md"
          />
          <input
            type="text"
            className="p-2 border border-blue-700 rounded-md"
          />
        </div>
        <AppQuestion />
        <AppQuestion />
        <AppQuestion />
      </div>
    </div>
  );
};

export default page;
