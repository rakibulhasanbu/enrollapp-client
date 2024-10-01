import Image from "next/image";

export const Choose = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 w-full p-4 lg:w-[80%] mx-auto mt-10">
      <div className="md:w-[50%]">
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
        <h1 className="text-4xl">
          Intuitive interface for easy
          <span className="text-primary">event discovery </span> and seamless
          registration
        </h1>
        <p className="text-[16px] my-3">
          Our user-friendly platform simplifies the search for relevant events,
          allowing users to effortlessly discover and register for opportunities
          that match their career goals.
        </p>
      </div>
    </div>
  );
};
