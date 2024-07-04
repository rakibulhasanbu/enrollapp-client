import { FaArrowRight } from "react-icons/fa";
import Frame from "../components/home/Frame";
import { Opportunities } from "../components/home/Opportunities";
import AppButton from "../components/ui/AppButton";
import { Title } from "../components/ui/Title";
import { Choose } from "../components/home/Choose";
import { Promotion } from "../components/home/Promotion";
import { Partner } from "../components/home/Partner";
import { PartnerDetails } from "../components/home/PartnerDetails";
import Banner from "@/components/home/Banner";
import { Events } from "@/components/home/Events";
import { Enroll } from "@/components/home/Enroll";
import { Faq } from "@/components/home/Faq";
import Subscription from "@/components/home/Subscription";

const page = () => {
  return (
    <>
      <Banner />
      <Frame />
      <div className="text-center my-5">
        <Title head="Explore Opportunities" paragraph="" />
      </div>
      <Opportunities />
      <div className="flex flex-1 justify-between items-center mx-[100px]">
        <Title
          head="Upcoming Events"
          paragraph="A Platform Where You Can Find Events  According to Your Passion"
        />
        <AppButton
          label="View All Event"
          variant="outlined"
          icon={<FaArrowRight />}
        />
      </div>
      <Events />
      <div className="text-center">
        <Title
          head="Why Choose Us ?"
          paragraph="A Platform Where You Can Find Events According to Your Passion"
        />
      </div>
      <Choose />
      <Promotion />
      <Enroll />
      <Partner />
      <PartnerDetails />
      <Faq />
      <div className="w-[80%] mx-auto">
        {" "}
        <Subscription />
      </div>
    </>
  );
};

export default page;
