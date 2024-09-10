"use client";

import AnimationWrapper from "@/components/shared/AnimationWrapper";
import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import Loading from "@/components/ui/Loading";
import { useGetEventByIdQuery } from "@/redux/features/event/eventApi";
import { IEvent } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { PiCashRegisterLight } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetEventByIdQuery(id);

  const event = data?.data as IEvent;
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AnimationWrapper keyValue="event details page">
      <div className="w-[80%] mx-auto mt-40">
        <EventBanner imgSrc={event?.eventBanner?.url} />
        <h1 className="mt-5 text-4xl">{event?.title}</h1>

        <div className="mt-10 space-y-3 text-gray-400">
          <div className="flex items-center gap-1">
            <TbCategory className="text-3xl text-primary" />
            <p>Category :{event?.category}</p>
          </div>
          <div className="flex items-center gap-1">
            <GrMapLocation className="text-3xl text-primary" />
            <p>Event Location :{event?.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdDateRange className="text-3xl text-primary" />
            <p>Event Date :{new Date(event?.eventDate).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <PiCashRegisterLight className="text-3xl text-primary" />
            <p>
              Registration Deadline :
              {new Date(event?.registrationDeadline).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineDollar className="text-3xl text-primary" />
            <p>{event?.registrationFee}</p>
          </div>
        </div>

        <div className="text-[#64748b] my-4">
          <h2 className="text-3xl mb-4">Details</h2>
          <p className="mb-2">{event?.description}</p>
        </div>
        <div className="mt-5">
          <h3 className="mb-1">Organized by</h3>
          <div className="flex items-center gap-2">
            {event?.organizer?.orgLogo ? (
              <Image
                src={event?.organizer?.orgLogo}
                className="size-12 2xl:size-16 rounded-full"
                width={50}
                height={50}
                alt="logo"
              />
            ) : (
              <FaRegUserCircle className="text-7xl text-gray text-primary" />
            )}
            <div>
              <h2 className="text-xl font-semibold">
                {event?.organizer?.name}
              </h2>
              <p>{event?.eventType}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center mt-5">
          <AppButton label="Save Event" variant="outlined" />
          <AppButton label="Enroll Now" />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Page;
