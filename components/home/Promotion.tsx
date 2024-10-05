import Image from "next/image";

export const Promotion = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between  items-center w-full p-4 md:w-[80%] mx-auto">
      <div className="md:w-[50%]">
        <h2 className="text-[36px] lg:font-medium ">
          <span className="text-primary ">Free event management </span> tool for
          organisations and clubs
        </h2>
        <p className=" mt-3 lg:font-medium">
          Organisations and clubs can manage their events with Enroll Toolbox to
          simplify the process of online registration, and communication from a
          single, integrated dashboard and promote their events.
        </p>
      </div>
      <div className="xl:w-[500px] lg:w-[200px] w-80 mb-20 md:mb-0">
        <Image
          src="/assets/4 1.png"
          alt="#"
          layout="responsive"
          width={50}
          height={50}
          className="lg:w-[400px]"
        />
      </div>
    </div>
  );
};
