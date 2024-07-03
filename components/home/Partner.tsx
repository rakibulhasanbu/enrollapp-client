import Image from "next/image";

export const Partner = () => {
  return (
    <div className="w-[500px] mx-auto my-20 ">
      <div className="relative">
        <div className="w-[207px]">
          <Image
            src="/assets/Rectangle 657.png"
            alt="#"
            layout="responsive"
            width={30}
            height={30}
          />
        </div>
        <div className="absolute top-5 left-12 ">
          <h1 className="text-[48px] font-bold w-full">
            <span className="text-white"> What </span> our Partner says About Us
          </h1>
        </div>

        <div className="w-[371px] absolute right-4 top-40">
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
