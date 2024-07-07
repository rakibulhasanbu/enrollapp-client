import AppButton from "@/components/ui/AppButton";
import AppSearchInput from "@/components/ui/AppSearchInput";
import imgUrl1 from "../../../components/home/card/cardAssets/Rectangle 10.png";
import imgUrl2 from "../../../components/home/card/cardAssets/Rectangle 11.png";
import EventsCard from "@/components/home/card/EventsCard";
import Subscription from "@/components/home/Subscription";

const eventcart = [
  {
    imgUrl1: imgUrl1,
    imgUrl2: imgUrl2,
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#", // Replace with actual user image URL
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: imgUrl1,
    imgUrl2: imgUrl2,
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#", // Replace with actual user image URL
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: imgUrl1,
    imgUrl2: imgUrl2,
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#", // Replace with actual user image URL
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: imgUrl1,
    imgUrl2: imgUrl2,
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#", // Replace with actual user image URL
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: imgUrl1,
    imgUrl2: imgUrl2,
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#", // Replace with actual user image URL
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: imgUrl1,
    imgUrl2: imgUrl2,
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#", // Replace with actual user image URL
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
];

const page = () => {
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

      <div className="w-full mx-auto grid grid-cols-3 gap-4 py-12">
        {eventcart.map((data, index) => (
          <EventsCard key={index} {...data} />
        ))}
      </div>

      <div className="w-full">
        <Subscription />
      </div>
    </div>
  );
};

export default page;
