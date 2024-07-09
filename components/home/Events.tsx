"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventsCard from "./card/EventsCard";
import { useGetEventsQuery } from "@/redux/features/event/eventApi";
import { IEvent } from "@/types";

export const Events = () => {
  const { data } = useGetEventsQuery("");
  console.log(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      {
        breakpoint: 1600, // Large screen breakpoint (you can adjust this value)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 lg:w-[80%] mx-auto">
      <Slider {...settings}>
        {data?.data?.events?.map((event: IEvent) => (
          <div key={event?._id} className="px-2">
            <EventsCard event={event} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
