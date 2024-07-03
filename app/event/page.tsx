import { FcGoogle } from "react-icons/fc";
import AppButton from "../../components/ui/AppButton";
import ProfileCard from "../../components/event/ProfileCard";
import HostEventCard from "../../components/event/HostEventCard";
import AnalyticCard from "../../components/event/AnalyticCard";
import ProfileCardBottom from "../../components/event/profilecardassets/ProfileCardBottom";
import EventsCard from "@/components/home/card/EventsCard";

const Profile = () => {
  return (
    <section className="w-[80%] mx-auto pt-40">
      <div className="flex justify-center items-center gap-5">
        <div className="w-[70%] bg-white rounded-xl shadow-xl relative">
          <div className="h-[250px] bg-[#8ABFEE] rounded-xl relative">
            <div className="right-5 absolute top-5 ">
              <img src="/assets/Frame 1618872988.png" alt="" className="w-10" />
            </div>
          </div>

          <div className="flex items-center  p-10 absolute top-[23%] ">
            <div className="flex gap-20  mt-5  items-center">
              <div className="flex gap-4 justify-center items-center">
                <img className="w-40" src="/assets/Ellipse 1472.png" alt="" />
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
                  icon={<FcGoogle className="text-xl" />}
                  iconPosition="left"
                // onClick={() => console.log("object")}
                />
              </div>
            </div>
          </div>

          <div className="m-10 pt-20 flex flex-col gap-4">
            <h3 className="text-[#334155] text-xl font-bold">About Us</h3>
            <p className="text-[#64748B] text-[16px]">
              Hello! I&apos;m Md Rakib Hossain, a junior UX/UI designer with 1.5
              years of experience, passionate about creating user-centric
              digital experiences. Passion for creating user-centric digital
              experiences that leave a lasting impact
            </p>
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
        <EventsCard dateName="12" imgUrl1="#" />
      </div>
    </section>
  );
};

export default Profile;
