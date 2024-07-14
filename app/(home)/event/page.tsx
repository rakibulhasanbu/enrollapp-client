"use client";

import AppButton from "@/components/ui/AppButton";
import AppSearchInput from "@/components/ui/AppSearchInput";
import EventsCard from "@/components/home/card/EventsCard";
import Subscription from "@/components/home/Subscription";
import { useGetEventsQuery } from "@/redux/features/event/eventApi";
import { IEvent } from "@/types";
import EventBanner from "@/components/shared/EventBanner";
import { useState } from "react";
import Loading from "@/components/ui/Loading";
import AnimationWrapper from "@/components/shared/AnimationWrapper";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetEventsQuery("");

  console.log(data);

  return (
    <AnimationWrapper keyValue="event page">
      <div className="pt-32 2xl:pt-40 space-y-12 w-[80%] mx-auto">
        <EventBanner imgSrc="/assets/banner-2.jpg" label="Add Banner" />
        <AppSearchInput variant="gray" placeholder="Search Event by name" />

        <div className="w-full flex flex-row items-center justify-between gap-4 overflow-x-auto">
          <AppButton className="text-xs min-w-fit" label="All" />
          <AppButton
            className="text-xs min-w-fit"
            label="Campaign or Field Activities"
            variant="outlined"
          />
          <AppButton
            className="text-xs min-w-fit"
            label="Workshop"
            variant="outlined"
          />
          <AppButton
            className="text-xs min-w-fit"
            label="Skill Development Training"
            variant="outlined"
          />
          <AppButton
            className="text-xs min-w-fit"
            label="Scholarship"
            variant="outlined"
          />
          <AppButton
            className="text-xs min-w-fit"
            label="Marketing"
            variant="outlined"
          />
          <AppButton
            className="text-xs min-w-fit"
            label="Campus Ambassador Program"
            variant="outlined"
          />
        </div>

        {isLoading ? (
          <Loading height="fit" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {data?.data?.events?.map((event: IEvent) => (
              <EventsCard event={event} key={event?._id} />
            ))}
          </div>
        )}

        <div className="w-full">
          <Subscription />
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Page;
