"useclient";

import Image from "next/image";

type AppEventBanner = {
  label?: string;
  isEditable?: Boolean;
};

const EventBanner = ({ isEditable, label }: AppEventBanner) => {
  return (
    <div className="w-full h-72 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg relative">
      <div>
        {isEditable && (
          <div className="right-5 top-5 absolute">
            <img
              src="/assets/Frame 1618872988.png"
              alt="Event Banner"
              className="w-8"
            />
          </div>
        )}
        <div className="w-full h-[250px] flex justify-center items-center flex-col ">
          <Image
            src="/assets/calendar-plus-01.png"
            alt="Event Banner"
            width={40}
            height={40}
          />
          <p className="text-[#e8ebef] text-[20px] mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
