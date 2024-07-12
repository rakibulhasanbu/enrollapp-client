import Image from "next/image";

export const Partner = () => {
  return (
    <div className=" lg:w-[500px] mx-auto my-20 w-full p-4 ">
      <div className="relative">
        <div className="lg:w-[207px] w-40 absolute left-20 lg:left-0 lg:top-0 top-4 ">
          <Image
            src="/assets/Rectangle 657.png"
            alt="#"
            layout="responsive"
            width={30}
            height={30}
          />
        </div>
        <div className="absolute top-5 lg:left-12 left-4">
          <h1 className="text-[48px] text-center lg:text-left font-semibold lg:font-bold w-full">
            <span className="text-white"> What </span> our Partner says About Us
          </h1>
        </div>

        <div className="lg:w-[371px] absolute right-4 lg:top-40 top-60 w-80">
          <Image
            src="/assets/Vector 5 (1).png"
            alt="#"
            layout="responsive"
            width={30}
            height={30}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
