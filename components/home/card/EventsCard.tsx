"use client";
import AppButton from "@/components/ui/AppButton";
import Image, { StaticImageData } from "next/image";

type Appevents = {
  imgUrl1?: StaticImageData;
  imgUrl2?: StaticImageData;
  dateName?: string;
  title?: string;
  uerImg?: string;
  userName?: string;
  userDegisnation?: string;
  author?: string;
  Registration?: string;
  RegistrationAmount?: string;
};

const EventsCard = ({
  dateName,
  imgUrl1,
  imgUrl2,
  title,
  uerImg,
  userName,
  userDegisnation,
  author,
  Registration,
  RegistrationAmount,
}: Appevents) => {
  return (
    <div className="shadow-md rounded-md flex flex-col gap-6 bg-[#F1F5F9] w-full">
      <div className="relative">
        <p className="bg-[#D0F5E1] text-[12px] rounded-full text-[#27BE69] w-25 absolute right-4 top-4 py-1 px-2">
          Seats available
        </p>
        <Image
          src={imgUrl2 as StaticImageData}
          alt="Event"
          className="bg-cover h-[280px] w-full"
        />
      </div>
      <div className="p-4">
        <p className="text-primary text-[16px] mb-2">{dateName}</p>
        <h2 className="text-[#334155] font-bold text-[24px] mb-4">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={imgUrl1 as StaticImageData}
              alt="Event"
              className="w-10 rounded-full"
            />
            <div>
              <p className="text-[#0D0D0D] text-[12px] font-bold">{userName}</p>
              <p className="text-[#404040] text-[12px]">{userDegisnation}</p>
            </div>
          </div>
          <p className="text-[#64748B] text-[16px]">{author}</p>
        </div>
        <div className="flex justify-between items-center mt-4 mb-2">
          <p className="text-[#64748B] text-[16px]">{Registration}</p>
          <p className="text-[32px] text-primary">{RegistrationAmount}</p>
        </div>
        <div className="flex justify-between items-center">
          <AppButton label="Enroll Now" variant="filled" />
          <AppButton label="More details" variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
