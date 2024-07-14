"use client";

import { LuPencilLine } from "react-icons/lu";
import AppButton from "@/components/ui/AppButton";
import ProfileCard from "@/components/event/ProfileCard";
import ProfileCardBottom from "@/components/event/profilecardassets/ProfileCardBottom";
import HostEventCard from "@/components/event/HostEventCard";
import AnalyticCard from "@/components/event/AnalyticCard";
import { useParams, useRouter } from "next/navigation";
import {
  useGetOrganizerByIdQuery,
  useGetOrganizerEventsByIdQuery,
} from "@/redux/features/organizer/organizerApi";
import { useEffect } from "react";
import AnimationWrapper from "@/components/shared/AnimationWrapper";
import { IEvent, TOrganizer } from "@/types";
import EventsCard from "@/components/home/card/EventsCard";
import OrganizerPrivetLayout from "@/components/layout/OrganizerPrivetLayout";

const Profile = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data } = useGetOrganizerByIdQuery(id);
  const { data: eventsData } = useGetOrganizerEventsByIdQuery(id);

  const organizer = data?.data as TOrganizer;
  const events = eventsData?.data as IEvent[];
  console.log(events);
  useEffect(() => {
    if (!organizer?.about) {
      router.push("/organizer/edit-profile");
    }
  }, [organizer, router]);

  return (
    <OrganizerPrivetLayout>
      <AnimationWrapper keyValue="organizer profile page">
        <section className="w-[80%] mx-auto pt-40">
          <div className="flex justify-center items-center gap-5">
            <div className="w-[80%] bg-white rounded-xl shadow-xl relative">
              <div className="h-[250px] bg-[#8ABFEE] rounded-xl relative">
                <div className="right-5 absolute top-5 ">
                  <img
                    src="/assets/Frame 1618872988.png"
                    alt=""
                    className="w-10"
                  />
                </div>
              </div>

              <div className="flex items-center  p-10 absolute top-[23%] ">
                <div className="flex gap-20  mt-5  items-center">
                  <div className="flex gap-4 justify-center items-center">
                    <img className="size-40 " src={organizer?.orgLogo} alt="" />
                    <div className="mt-12">
                      <h2 className="text-[#1E293B] text-[24px] ">
                        Enroll Opportunities
                      </h2>
                      <p className="text-[#64748B] text-[16px]">
                        Non-profit organization
                      </p>
                    </div>
                  </div>

                  <div className="mt-20 text-[12px]">
                    <AppButton
                      label="Edit details"
                      variant="outlined"
                      icon={<LuPencilLine className="text-xl" />}
                      iconPosition="right"
                      // onClick={() => console.log("object")}
                    />
                  </div>
                </div>
              </div>

              <div className="m-10 pt-20 flex flex-col gap-4">
                <h3 className="text-[#334155] text-xl font-bold">About Us</h3>
                <p className="text-[#64748B] text-[16px]">{organizer?.about}</p>
              </div>
            </div>
            <div className="w-[20%] flex flex-col gap-6">
              <ProfileCard />
              <ProfileCardBottom />
            </div>
          </div>
          <HostEventCard />
          <AnalyticCard />
          <div className="w-[35%] mt-5">
            {events?.map((event) => (
              <EventsCard key={event?._id} event={event} />
            ))}
          </div>
        </section>
      </AnimationWrapper>
    </OrganizerPrivetLayout>
  );
};

export default Profile;
