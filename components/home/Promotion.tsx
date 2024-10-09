import Image from "next/image";

export const Promotion = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between  items-center w-full p-4 md:w-[80%] mx-auto">
      <div className="md:w-[45%] space-y-4">
        <h2 className="lg:text-4xl text-2xl font-medium leading-snug lg:leading-tight tracking-tight text-gray-800">
          <span className="text-primary font-medium">
            Free event management{" "}
          </span>{" "}
          tool for organisations and clubs
        </h2>
        <p className="mt-3 lg:mt-4 lg:font-medium text-[16px] lg:text-lg text-gray-600 leading-relaxed">
          Organisations and clubs can manage their events with Enroll Toolbox to
          simplify the process of online registration, communication from a
          single, integrated dashboard, and promote their events.
        </p>
      </div>

      <div className="lg:w-[35%]  w-80 mb-20 md:mb-0">
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
