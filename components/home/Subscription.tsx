import Image from "next/image";
import footer from "@/assets/footer.png";

const Subscription = () => {
  return (
    <div className="mt-20">
      <Image
        src={footer}
        className="w-full rounded-lg"
        width={1500}
        height={400}
        alt="Footer image"
      />
      {/* <div className=" p-4  w-full mx-auto flex justify-between items-center bg-[#C8E5EE] rounded mt-20 ">
      <div className=" lg:w-[550px]  lg:pl-20">
        <h1 className="lg:text-[40px] font-bold mb-3">
          What are your Waiting for ? Come join Us!
        </h1>
        <div className="px-5">
          <AppButton label="Register Now" variant="filled" />
        </div>
      </div>
      <div className="lg:w-[419px] py-4 lg:pl-14 ">
        <img src="/assets/7 1.png" alt="" />
      </div>
    </div> */}
    </div>
  );
};

export default Subscription;
