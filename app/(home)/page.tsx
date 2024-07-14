import Banner from "@/components/home/Banner";
import { Events } from "@/components/home/Events";
import { Enroll } from "@/components/home/Enroll";
import { Faq } from "@/components/home/Faq";
import Subscription from "@/components/home/Subscription";
import Frame from "@/components/home/Frame";
import { Opportunities } from "@/components/home/Opportunities";
import { AppTitle } from "@/components/ui/AppTitle";
import { Choose } from "@/components/home/Choose";
import { Promotion } from "@/components/home/Promotion";
import { Partner } from "@/components/home/Partner";
import { PartnerDetails } from "@/components/home/PartnerDetails";

const page = () => {
  return (
    <>
      <Banner />
      <Frame />
      <div className="text-center my-5">
        <AppTitle head="Explore Opportunities" paragraph="" />
      </div>
      <Opportunities />

      <Events />
      <div className="text-center">
        <AppTitle
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
      <div className=" lg:w-[80%] mx-auto">
        {" "}
        <Subscription />
      </div>
    </>
  );
};

export default page;
