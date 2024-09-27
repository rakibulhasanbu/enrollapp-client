"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import imgUrl1 from "../../../components/home/card/cardAssets/Rectangle 10.png";
import AppButton from "@/components/ui/AppButton";
import { IEvent } from "@/types";
import { formatDate } from "@/utils/formateDate";
import Image, { StaticImageData } from "next/image";
import { selectCurrentOrganizer } from "@/redux/features/auth/authSlice";
import { setSelectedEvent } from "@/redux/features/event/eventSlice";

type TEventsCard = {
  event: IEvent;
};

const EventsCard = ({ event }: TEventsCard) => {
  const organizer = useAppSelector(selectCurrentOrganizer);

  const dispatch = useAppDispatch();

  return (
    <div className="shadow-md rounded-md flex flex-col gap-6 bg-[#F1F5F9] w-full">
      <div className="relative">
        <p className="bg-[#D0F5E1] text-[12px] rounded-full text-[#27BE69] w-25 absolute right-4 top-4 py-1 px-2">
          Seats available
        </p>
        <Image
          src={event?.eventBanner}
          alt="Event"
          className="bg-cover h-[280px] w-full rounded-t-md"
          width={400}
          height={300}
        />
      </div>
      <div className="p-4">
        <p className="text-primary font-medium flex items-center gap-2 mb-2">
          <span>{formatDate(event?.eventStartDate)}</span>{" "}
          <span className="border-l-2 pl-2">{event?.location}</span>
        </p>
        <h2 className="text-[#334155] font-bold text-[24px] mb-4">
          {event?.title}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={imgUrl1 as StaticImageData}
              alt="Event"
              className="w-10 rounded-full"
            />
            <div>
              <p className="text-[#0D0D0D] text-[12px] font-bold">
                {event?.organizer?.contactPerson?.name}
              </p>
              <p className="text-[#404040] text-[12px]">
                {event?.organizer?.contactPerson?.roleInOrg}
              </p>
            </div>
          </div>
          <p className="text-[#64748B]">Hosted</p>
        </div>
        <div className="flex justify-between items-center mt-4 mb-2">
          <p className="text-[#334155] font-medium">Registration Fee</p>
          <p className="text-2xl font-semibold text-primary">
            TK {event?.registrationFee}
          </p>
        </div>
        <div className="flex justify-between items-center">
          {event?.organizer?._id === organizer?._id ? (
            <AppButton
              href={`/dashboard/manage-my-event`}
              label="Manage Event"
              onClick={() => dispatch(setSelectedEvent(event))}
              variant="filled"
            />
          ) : (
            <AppButton
              href={`/form/${event?.formId}`}
              label="Enroll Now"
              variant="filled"
            />
          )}
          <AppButton
            href={`/event/${event?._id}`}
            label="More details"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
