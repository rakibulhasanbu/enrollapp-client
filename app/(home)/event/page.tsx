"use client";

import AppButton from "@/components/ui/AppButton";
import AppSearchInput from "@/components/ui/AppSearchInput";
import EventsCard from "@/components/home/card/EventsCard";
import Subscription from "@/components/home/Subscription";
import { useGetEventsQuery } from "@/redux/features/event/eventApi";
import { IEvent } from "@/types";


const Page = () => {
  const { data } = useGetEventsQuery("");
  console.log(data);
  return (
    <div className="pt-40 w-[80%] mx-auto">
      <div className="h-[350px] bg-[#8F8F8F] rounded-md mb-10"></div>
      <AppSearchInput variant="gray" />

      <div className="mt-20 space-x-4 w-full overflow-x-auto">
        <AppButton label="All" />
        <AppButton label="Campaign or Field Activities" variant="outlined" />
        <AppButton label="Workshop" variant="outlined" />
        <AppButton label="Skill Development Training" variant="outlined" />
        <AppButton label="Scholarship" variant="outlined" />
        <AppButton label="Marketing" variant="outlined" />
        <AppButton label="Campus Ambassador Program" variant="outlined" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-12">
        {data?.data?.events?.map((event: IEvent) => (
          <EventsCard event={event} key={event?._id} />
        ))}
      </div>

      <div className="w-full">
        <Subscription />
      </div>
    </div>
  );
};

export default Page;
