import Image from "next/image";

export const Choose = () => {
  return (
    <div className="flex justify-center items-center gap-20 w-[80%] mx-auto mt-10">
      <div>
        <Image
          src="/assets/3 1.png"
          alt="#"
          layout="responsive"
          width={700}
          height={475}
          className="w-full"
        />
      </div>
      <div className="">
        <h1 className="text-[36px]">
          Collaborate <span className="text-primary">Thousand</span> of
          Organizations
        </h1>
        <p className="text-[16px] my-3">
          Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that
        </p>
        <p className="text-[16px]">
          the company hasn`t used, which have also proved to be easy to use and
          reliable
        </p>
      </div>
    </div>
  );
};
