import Image from "next/image";

const Frame = () => {
  return (
    <div className="my-10">
      <Image
        height={55}
        width={55}
        src="/assets/Frame 1618872929.png"
        alt="frame"
        className="w-full object-cover mx-auto"
      />
    </div>
  );
};

export default Frame;
