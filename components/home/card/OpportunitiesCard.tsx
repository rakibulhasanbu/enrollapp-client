import Image, { StaticImageData } from "next/image";

type AppCard = {
  img: StaticImageData;
  id: number;
  h3: string;
  p: string;
};

export const OpportunitiesCard = ({ id, img, h3, p }: AppCard) => {
  return (
    <div className="flex flex-1 p-6 items-center flex-col text-center text-[#64748B] ">
      <Image
        src={img}
        width={100}
        height={100}
        alt={h3}
        className="w-[64px] h-[64px"
      />
      <h3 className="text-xl lg:text-2xl text-[#334155] my-2 font-semibold">
        {h3}
      </h3>
      <p className="text-[16px] text-[#64748B] leading-relaxed">{p}</p>
    </div>
  );
};
