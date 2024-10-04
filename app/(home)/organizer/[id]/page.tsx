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
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import { setOrganizer } from "@/redux/features/auth/authSlice";
import PrivateLayout from "@/components/shared/PrivateLayout";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const router = useRouter();
  const { data } = useGetOrganizerByIdQuery(id);
  const { data: eventsData } = useGetOrganizerEventsByIdQuery(id);

  const organizer = data?.data as TOrganizer;
  const events = eventsData?.data as IEvent[];
  console.log(organizer);
  useEffect(() => {
    if (organizer && !organizer?.about) {
      // dispatch(setOrganizer(organizer));
      router.push("/organizer/edit-profile");
    }
  }, [organizer, router]);

  return (
    <PrivateLayout>
      <AnimationWrapper keyValue="organizer profile page">
        <section className="lg:w-[80%] mx-auto p-4 pt-20 lg:pt-40">
          <div className="lg:flex  gap-5">
            <div className="lg:w-[80%] bg-white rounded-xl shadow-xl pb-10 relative">
              {/* Header Section */}
              <div className="lg:h-[250px] h-[150px] bg-[#8ABFEE] rounded-t-xl relative">
                <div className="right-5 absolute top-5">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/Frame 1618872988.png"
                    alt=""
                    className="w-10"
                  />
                </div>
              </div>

              {/* Organizer Info Section */}
              <div className="lg:flex lg:items-center lg:justify-between p-4 lg:p-10 -mt-14 lg:-mt-28 w-full">
                <div className="flex z-50 relative gap-2 items-center lg:justify-center">
                  <Image
                    width={160}
                    height={160}
                    className="lg:size-40 size-24"
                    src={organizer?.orgLogo}
                    alt=""
                  />
                  <div className="lg:mt-16 mt-10">
                    <h2 className="text-[#1E293B] font-semibold lg:text-4xl">
                      {organizer?.name}
                    </h2>
                    <p className="text-[#64748B] text-[12px] lg:text-xl">
                      {organizer?.orgType}
                    </p>
                  </div>
                </div>

                <div className="mt-5 lg:mt-12">
                  <AppButton
                    label="Edit details"
                    variant="outlined"
                    icon={<LuPencilLine className="text-xl" />}
                    iconPosition="right"
                    // onClick={() => console.log("object")}
                  />
                </div>
              </div>

              {/* About Us Section */}
              <div className="lg:mx-16 mx-4 my-4 lg:my-8 ">
                <h3 className="text-[#334155] text-xl font-bold">About Us</h3>
                <p className="text-[#64748B] text-[16px]">{organizer?.about}</p>
              </div>
            </div>

            <div className="lg:w-[20%] flex flex-col gap-6 mt-10 lg:mt-0">
              <ProfileCard
                phoneNumber={organizer?.contactNumber}
                email={organizer?.email}
                location={organizer?.officeAddress}
                username={organizer?.username}
                website={organizer?.website}
              />
              <ProfileCardBottom
                socialMediaLinks={organizer?.socialMediaLinks}
              />
            </div>
          </div>
          <HostEventCard />
          <AnalyticCard />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {events?.map((event) => (
              <EventsCard key={event?._id} event={event} />
            ))}
          </div>
        </section>
      </AnimationWrapper>
    </PrivateLayout>
  );
};

export default Profile;
