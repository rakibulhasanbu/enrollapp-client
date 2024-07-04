"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgUrl1 from "./card/cardAssets/Rectangle 10.png";
import imgUrl2 from "./card/cardAssets/Rectangle 11.png";
import EventsCard from "./card/EventsCard";

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
];

export const Events = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  console.log(imgUrl1);
  return (
    <div className="w-[80%] mx-auto">
      <Slider {...settings}>
        {eventcart.map((data, index) => (
          <EventsCard key={index} {...data} />
        ))}
      </Slider>
    </div>
  );
};
