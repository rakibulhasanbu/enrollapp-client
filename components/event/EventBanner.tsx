"useclient";

import Image from "next/image";

type AppEventBanner = {
  imgSrc1: string;
  imgAlt1: string;
  imgSrc2: string;
  imgAlt2: string;
  label?: string;
};

const EventBanner = ({
  imgSrc1,
  imgAlt1,
  imgSrc2,
  imgAlt2,
  label,
}: AppEventBanner) => {
  return (
    <div className="w-full h-[250px] bg-[#8ABFEE] rounded-lg relative">
      <div>
        <div className="right-5 top-5 absolute">
          <Image
            src={imgSrc1}
            alt={imgAlt1}
            width={30}
            height={30}
            className=""
          />
        </div>
        <div className="w-full h-[250px] flex justify-center items-center flex-col">
          <Image
            src={imgSrc2}
            alt={imgAlt2}
            width={30}
            height={30}
            className=""
          />
          <p className="text-[#94A3B8] text-[20px]">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
