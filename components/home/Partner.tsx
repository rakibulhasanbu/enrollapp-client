import Image from "next/image";

export const Partner = () => {
  return (
    <div className=" lg:w-[500px] mx-auto space-all-title w-full p-4 ">
      <div className="relative">
        <div className="lg:w-[170px]  w-24 absolute lg:-top-8 -top-2 -left-2  lg:-left-4 ">
          <Image
            src="/assets/Rectangle 657.png"
            alt="#"
            layout="responsive"
            width={30}
            height={30}
          />
        </div>
        <div className="absolute   text-center">
          <h1 className="text-2xl  text-center lg:text-[40px] font-semibold lg:font-bold w-full text-gray-800">
            <span className="text-white">What</span> Our Partner Says About Us
          </h1>
        </div>

        <div className="lg:w-[371px] absolute right-6 lg:top-20 top-10 w-80">
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
