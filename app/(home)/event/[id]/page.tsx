"use client";

import AppButton from "@/components/ui/AppButton";
import { useGetEventByIdQuery } from "@/redux/features/event/eventApi";
import { useParams } from "next/navigation";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { PiCashRegisterLight } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";

const Page = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetEventByIdQuery(id);
  console.log(data);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || !data) {
  //   return <div>Error loading event details.</div>;
  // }

  return (
    <div className="w-[80%] mx-auto mt-40">
      <div className="h-80 rounded-xl border flex items-center justify-center border-gray-400 bg-gray-300 ">
        <img
          src={data?.data?.eventBanner}
          alt="Event Banner"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="mt-5 text-4xl">{data?.data?.title}</h1>

      <div className="mt-10 space-y-3 text-gray-400">
        <div className="flex items-center gap-1">
          <TbCategory className="text-3xl text-primary" />
          <p>Category :{data?.data?.category}</p>
        </div>
        <div className="flex items-center gap-1">
          <GrMapLocation className="text-3xl text-primary" />
          <p>Event Location :{data?.data?.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdDateRange className="text-3xl text-primary" />
          <p>
            Event Date :{new Date(data?.data?.eventDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PiCashRegisterLight className="text-3xl text-primary" />
          <p>
            registration Deadline :
            {new Date(data?.data?.registrationDeadline).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineDollar className="text-3xl text-primary" />
          <p>{data?.data?.registrationFee}</p>
        </div>
      </div>

      <div className="text-[#64748b]">
        <h2 className="text-3xl mb-4">Details</h2>
        <p className="mb-2">{data?.data?.description}</p>
      </div>
      <div className="mt-5">
        <h3>Organized by</h3>
        <div className="flex items-center gap-1">
          <FaRegUserCircle className="text-7xl text-gray text-primary" />
          <div>
            <h2 className="text-xl font-semibold">{data?.data?.organizer}</h2>
            <p>{data?.data?.eventType}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center mt-5">
        <AppButton label="Save Event" variant="outlined" />
        <AppButton label="Enroll Now" />
      </div>
    </div>
  );
};

export default Page;
