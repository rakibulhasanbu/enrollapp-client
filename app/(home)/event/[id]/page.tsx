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
        <div className="pb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl">{event?.title}</h1>
            <span className="text-lg text-borderColor">{event?.category}</span>
          </div>
          <div className="flex items-center gap-20">
            <div className="flex items-center gap-2">
              <MdDateRange className="text-2xl text-primary" />
              <span className="text-lg font-medium">Event Date:</span>
              <span>
                {new Date(event?.eventStartDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GrMapLocation className="text-2xl text-primary" />
              <span className="text-lg font-medium">Event Location:</span>
              <span>{event?.location}</span>
            </div>
          </div>
        </div>

        <EventBanner imgSrc={event?.eventBanner} />

        <div className="grid gap-16 grid-cols-2 my-8">
          <h2 className="border-2 border-borderColor rounded-md text-4xl p-6 text-center font-medium">
            Time Left:{" "}
            {new Date(event?.registrationDeadline).toLocaleDateString()}
          </h2>
          <h2 className="border-2 border-borderColor rounded-md text-4xl p-6 text-center font-medium">
            Registration Fee: {event?.registrationFee}
          </h2>
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
