"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import EventsCard from "./card/EventsCard";
// import img1 from "../home/card/cardAssets/Rectangle 11.png";
// import img2 from "../home/card/cardAssets/Frame 1 (1).png";
// import user from "../home/card/cardAssets/Rectangle 10.png";

interface Event {
  imgUrl1: any;
  imgUrl2: any;
  dateName: string;
  title: string;
  uerImg: any;
  userName: string;
  userDegisnation: string;
  author: string;
  Registration: string;
  RegistrationAmount: string;
}

const eventcart: Event[] = [
  {
    imgUrl1: "#",
    imgUrl2: "#",
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#",
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: "#",
    imgUrl2: "#",
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#",
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
  {
    imgUrl1: "#",
    imgUrl2: "#",
    dateName: "Wed, May 20 | 7.30 pm (Bashundhara)",
    title: "Career Meetup with Design & Development",
    uerImg: "#",
    userName: "Barkot Ali",
    userDegisnation: "Product Designer",
    author: "Hosted",
    Registration: "Registration Fee",
    RegistrationAmount: "100tk",
  },
];

export const Events: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Corrected to 2000ms (2 seconds)
    arrows: false,
  };

  return (
    <div className="w-[80%] mx-auto ">
      <Slider {...settings}>
        {eventcart.map((data) => (
          <EventsCard key={data.title} {...data} />
        ))}
      </Slider>
    </div>
  );
};
