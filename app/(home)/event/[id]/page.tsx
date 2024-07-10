"use client";

import AppButton from "@/components/ui/AppButton";
import { useGetEventByIdQuery } from "@/redux/features/event/eventApi";
import { useParams } from "next/navigation";
import { AiOutlineDollar } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { LuImagePlus } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { PiCashRegisterLight } from "react-icons/pi";
import { TbCategory, TbCategoryFilled } from "react-icons/tb";

const Page = () => {
  const {id} = useParams();
  const {data} = useGetEventByIdQuery(id);
  console.log(data);
  return (
    <div className="w-[80%] mx-auto mt-40">
      <div className="h-80 rounded-xl border  flex items-center justify-center border-gray-400 bg-gray-300 ">
        <LuImagePlus />
      </div>
      <h1 className="mt-5 text-4xl">Event Title</h1>

      <div className="mt-10 space-y-3 text-gray-400">
        <div className="flex items-center gap-1">
          <TbCategory className="text-3xl text-primary" />
          <p>Category</p>
        </div>
        <div className="flex items-center gap-1">
          <GrMapLocation className="text-3xl text-primary" />
          <p>Event Location</p>
        </div>
        <div className="flex items-center gap-2">
          <MdDateRange className="text-3xl text-primary" />
          <p>Event Date & Time</p>
        </div>
        <div className="flex items-center gap-2">
          <PiCashRegisterLight className="text-3xl text-primary" />
          <p>Registration Dateline</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineDollar className="text-3xl text-primary" />
          <p>Registration Fee</p>
        </div>
      </div>

      <div className="text-[#64748b]">
        <h2 className="text-3xl mb-4">Details</h2>
        <p className=" mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus ex
          quos repellendus. Sit blanditiis, neque dolorum nulla repudiandae
          labore, ex aperiam culpa ipsam nihil nemo, obcaecati libero. Voluptate
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          debitis officia earum a, ipsam harum sequi obcaecati ducimus in
          consequuntur aliquid veniam ipsum, quae quibusdam nostrum similique
          tenetur, natus enim facere deserunt maxime! Consectetur debitis
          nostrum mollitia placeat, natus id dolores fugiat tenetur. Corrupti,
          dicta maiores? Obcaecati excepturi mollitia maxime.
        </p>
      </div>
      <div className="mt-5">
        <h3>Organized by</h3>
        <div className="flex items-center gap-1 text-">
          <FaRegUserCircle className="text-7xl text-gray text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Volunter for Bangladesh</h2>
            <p>Youth Organization</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center mt-5 ">
        <AppButton label="Save Event" variant="outlined" />
        <AppButton label="Enroll Now" />
      </div>
    </div>
  );
};

export default Page;
