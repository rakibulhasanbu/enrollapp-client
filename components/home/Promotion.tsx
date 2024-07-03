import Image from "next/image";

export const Promotion = () => {
  return (
    <div className="flex flex-1 justify-between my-20 items-center w-[80%] mx-auto">
      <div className="w-[407px]">
        <h2 className="text-[36px] font-bold ">
          <span className="text-primary">1+ million </span> Learns have already
          joined Enroll
        </h2>
        <p className="text-16px mt-3">
          Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that
        </p>
      </div>
      <div className="w-[500px]">
        <Image
          src="/assets/4 1.png"
          alt="#"
          layout="responsive"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};
