import Image from "next/image";

export const Promotion = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between my-20 items-center w-[80%] mx-auto">
      <div className="md:w-[50%]">
        <h2 className="text-[36px]  ">
          <span className="text-primary ">Free event management </span> tool for
          organisations and clubs
        </h2>
        <p className="text-16px mt-3">
          Organisations and clubs can manage their events with Enroll Toolbox to
          simplify the process of online registration, and communication from a
          single, integrated dashboard and promote their events.
        </p>
      </div>
      <div className="lg:w-[500px] w-80 mb-20 md:mb-0">
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
