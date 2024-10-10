import Image from "next/image";

export const Choose = () => {
  return (
    <div className="flex flex-col lg:mt-4 mt-0 lg:flex-row lg:justify-between items-center gap-20 w-full p-4 lg:w-[80%] mx-auto ">
      <div className="md:w-[35%]">
        <Image
          src="/assets/3 1.png"
          alt="#"
          layout="responsive"
          width={400}
          height={475}
          className="w-full"
        />
      </div>
      <div className="lg:w-[49%] space-y-4 lg:mt-4 lg:text-justify">
        <h1 className="lg:text-3xl 2xl:text-4xl text-2xl font-medium leading-snug lg:leading-tight tracking-tight text-gray-800">
          Intuitive interface for easy
          <span className="text-primary font-medium">
            {" "}
            event discovery{" "}
          </span>{" "}
          and seamless registration
        </h1>
        <p className="text-[16px] lg:text-lg text-gray-600 my-3 lg:my-4 lg:font-medium leading-relaxed text-justify">
          Our user-friendly platform simplifies the search for relevant events,
          allowing users to effortlessly discover and register for opportunities
          that match their career goals.
        </p>
      </div>
    </div>
  );
};
