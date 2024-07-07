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
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint (you can adjust this value)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint (you can adjust this value)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Large screen breakpoint (you can adjust this value)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 lg:w-[80%] mx-auto">
      <Slider {...settings}>
        {eventcart.map((data, index) => (
          <div key={index} className="px-2">
            {" "}
            {/* Add padding here */}
            <EventsCard {...data} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
