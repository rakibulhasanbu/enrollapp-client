"use client";

import AnimationWrapper from "@/components/shared/AnimationWrapper";
import EventBanner from "@/components/shared/EventBanner";
import AppButton from "@/components/ui/AppButton";
import Loading from "@/components/ui/Loading";
import { useGetEventByIdQuery } from "@/redux/features/event/eventApi";
import { IEvent } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import CountdownTimer from "./../../../../components/ui/AppCounter";

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
      <div className="w-[80%] mx-auto md:mt-40 mt-20  p-4 md:p-0">
        <div className="pb-8 space-y-4">
          <div className="md:flex items-center justify-between">
            <h1 className=" text-2xl md:text-5xl">{event?.title}</h1>
            <span className="text-xl text-borderColor">{event?.category}</span>
          </div>
          <div className="md:flex items-center  space-y-3 gap-20">
            <div className="flex items-center gap-2">
              <MdDateRange className="text-2xl text-primary" />
              <span className="md:text-lg font-medium">Event Date:</span>
              <span>
                {new Date(event?.eventStartDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center  gap-2">
              <GrMapLocation className="text-2xl text-primary" />
              <span className="md:text-lg font-medium">Event Location:</span>
              <span>{event?.location}</span>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-5 justify-center">
          <EventBanner imgSrc={event?.eventBanner} />

          <div className="grid gap-6 mt-6 md:mt-0 md:gap-4 md:grid-cols-1 grid-cols-1 lg:w-[45%] 2xl:w-[25%]">
            {/* <h2 className="border-2 font-medium border-borderColor rounded-md md:text-3xl p-4 md:p-6 text-center md:font-medium">
            Time Left:{" "}
            {new Date(event?.registrationDeadline).toLocaleDateString()}
       
          </h2> */}

            <div className="text-center">
              <h3 className="bg-primary text-white text-xl font-medium  py-2">
                Deadline
              </h3>
              <p className="bg-blue-200 2xl:text-xl lg:text-lg font-medium  py-2">
                October 25, 2024
              </p>
            </div>

            <div>
              <h3 className="bg-primary text-white text-center mb-2 text-xl font-medium  py-2">
                Time Left
              </h3>
              <CountdownTimer registrationDeadline="2024-10-10T23:59:59" />
            </div>

            <div>
              <h3 className="bg-primary text-white text-center  text-xl font-medium  py-2">
                Registration Fee
              </h3>
              <h2 className="bg-blue-200 2xl:text-xl lg:text-lg font-medium text-center  py-2">
                {event?.registrationFee} BDT
              </h2>
            </div>

            <div>
              <h3 className="bg-primary text-white text-center   text-xl font-medium  py-2">
                Organized by
              </h3>

              <div className=" flex gap-3 bg-blue-200 p-4 ">
                {/* <h3 className="mb-1 font-medium  md:text-3xl">Organized by</h3> */}
                <Link href={"/"} className=" cursor-pointer">
                  <div className="flex  gap-2">
                    {event?.organizer?.orgLogo ? (
                      <Image
                        src={event?.organizer?.orgLogo}
                        className="size-12 2xl:size-12 rounded-full"
                        width={50}
                        height={50}
                        alt="logo"
                      />
                    ) : (
                      <FaRegUserCircle className="text-7xl text-gray text-primary" />
                    )}
                    <div>
                      <h2 className="md:text-xl font-semibold text-primary hover:text-primary opacity-100 ">
                        {event?.organizer?.name}
                      </h2>
                      <p className="md:text-lg 2xl:text-xl">
                        {event?.eventType}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#64748b] mt-10 p-4">
          {/* <h2 className="text-3xl mb-4">Details</h2> */}
          <p className="mb-2 lg:text-xl 2xl:text-2xl text-justify ">
            {event?.description}
          </p>
        </div>

        <div className=" p-6 rounded-lg ">
          {/* Pre-registration Starts */}
          <p className="text-xl font-bold mb-4">
            Pre-registration Starts:
            <span className="font-normal">29 September</span>
          </p>

          {/* Pre-registration Ends */}
          <p className="text-xl font-bold mb-4">
            Pre-registration Ends:
            <span className="font-normal">6 October</span>
          </p>

          {/* Contest Dates */}
          <p className="text-xl font-bold mb-4">Contest Dates:</p>

          {/* Mock Contest */}
          <p className="text-lg font-semibold mb-4">
            Mock Contest:
            <span className="font-normal">
              3:00 PM - 5:00 PM, Thursday, October 31, 2024
            </span>
          </p>

          {/* Main Contest */}
          <p className="text-xl font-semibold mb-4">
            Main Contest:
            <span className="font-normal">
              8:00 AM - 1:00 PM, Friday, November 1, 2024
            </span>
          </p>

          {/* Contact */}
          <p className="text-lg font-bold mb-2">For any query:</p>

          {/* Mail to */}
          <p className="text-lg font-semibold mb-4">
            Mail to:
            <span className="italic">iupc@buetcsefest2024.com</span>
          </p>
        </div>

        <div className="flex text-2xl gap-4 items-center justify-center mt-10">
          <AppButton label="Save Event" variant="outlined" />
          <AppButton label="Enroll Now" />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Page;
