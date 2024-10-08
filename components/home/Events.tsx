"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventsCard from "./card/EventsCard";
import { useGetEventsQuery } from "@/redux/features/event/eventApi";
import { IEvent } from "@/types";
import { AppTitle } from "../ui/AppTitle";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa6";

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 lg:container mx-auto">
      <div className="text-center lg:text-left flex flex-col mb-2 lg:mb-0 lg:flex-row justify-between items-center lg:container lg:mx-auto">
        <AppTitle
          head="Upcoming Events"
          paragraph="A Platform Where You Can Find Events  According to Your Passion"
        />
        <div className="hidden lg:block  w-[20%]">
          <AppButton
            href="/event"
            label="View All Event"
            variant="outlined"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
      <div className="lg:mb-20 mt-6">
        <Slider {...settings}>
          {data?.data?.map((event: IEvent) => (
            <div key={event?._id} className="px-4">
              <EventsCard event={event} />
            </div>
          ))}
        </Slider>

        <div className="lg:hidden flex justify-center items-center mt-10">
          <AppButton
            href="/event"
            label="View All Event"
            variant="outlined"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};
