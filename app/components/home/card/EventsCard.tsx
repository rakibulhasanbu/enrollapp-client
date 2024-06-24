"use client";

import AppButton from "../../ui/AppButton";

type Appevents = {
  imgUrl1?: any;
  imgUrl2?: any;
  dateName?: string;
  title?: string;
  uerImg?: any;
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
    <div className=" p-10 shadow-xl rounded bg-[#F1F5F9] m-[10px] ">
      <div className="relative">
        <div>{imgUrl1}</div>
        <div className="absulate">{imgUrl2}</div>
      </div>
      <p className="text-primary text-[16px]">{dateName}</p>
      <h2 className="text-[#334155] font-bold text-[24px]">{title}</h2>
      <div className="flex justify-between items-center ">
        <div>
          <p>{uerImg}</p>
          <div>
            <p className="text-[#0D0D0D] text-[12px] font-bold">{userName}</p>
            <p className="text-[#404040] text-[12px]">{userDegisnation}</p>
          </div>
        </div>
        <p className="text-[#64748B] text-[16px]">{author}</p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="text-[#64748B] text-[16px]">{Registration}</p>
        <p className="text-[32px] text-primary">{RegistrationAmount}</p>
      </div>
      <div className="flex justify-between items-center">
        <AppButton label="Enroll Now" variant="filled" />
        <AppButton label="More details" variant="outlined" />
      </div>
    </div>
  );
};

export default EventsCard;
