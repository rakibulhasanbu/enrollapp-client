"use client";

import Loading from "@/components/ui/Loading";
import { useGetOverViewQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";

const Page = () => {
  const { data, isSuccess } = useGetOverViewQuery("");
  console.log(data);

  const user = useAppSelector((state) => state.auth.user);

  const dashboardCards = [
    {
      imageUrl: "/assets/dashboard/order.png",
      title: "Total Order",
      value: data?.totalOrder,
    },
    {
      imageUrl: "/assets/dashboard/property.png",
      title: "Total Property Sold",
      value: data?.totalOrderComplete,
    },
    {
      imageUrl: "/assets/dashboard/admin.png",
      title: "Total Admin",
      value: data?.data?.totalAdmins,
    },
    {
      imageUrl: "/assets/dashboard/champion.png",
      title: "Total Events",
      value: data?.data?.totalEvents,
    },
    {
      imageUrl: "/assets/dashboard/user.png",
      title: "Total User",
      value: data?.data?.totalUsers,
    },
    {
      imageUrl: "/assets/dashboard/crowdfunding.png",
      title: "Total Organizations",
      value: data?.data?.totalOrganizers,
    },
    {
      imageUrl: "/assets/dashboard/location.png",
      title: "Total Current Location",
      value: data?.totalProperty,
    },
    {
      imageUrl: "/assets/dashboard/flipping.png",
      title: "Total Flipping",
      value: data?.totalFlipping,
    },
  ];

  if (!isSuccess) return <Loading />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
      <div className="col-span-2 lg:col-span-4 flex flex-col justify-center pl-4 md:pl-6 lg:pl-12">
        <p className="text-[#6D6D6D]">Good Morning</p>
        <p className="text-primary text-2xl md:text-3xl font-semibold capitalize">
          {user?.name}
        </p>
      </div>

      {dashboardCards.map((card) => (
        <div
          key={card?.title}
          className="bg-[#F8F8F8] rounded-xl flex flex-col items-center justify-center px-2 py-4"
        >
          <Image
            src={card?.imageUrl}
            alt={card?.title}
            className="rounded-full object-contain size-12"
            width={50}
            height={50}
          />
          <p className=" text-[#454545] text-sm py-2">{card?.title}</p>
          <h3 className="text-[#414141] text-2xl font-bold">{card?.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default Page;
