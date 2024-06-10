import AppButton from "../ui/AppButton";
import { Title } from "../ui/Title";

const Subscription = () => {
  return (
    <div className="w-[80%] mx-auto flex items-center bg-[#C8E5EE] rounded mt-40 p-5">
      <div className="w-[550px] pl-20">
        <h1 className="text-[40px] font-bold mb-3">
          What are your Waiting for ? Come join Us!
        </h1>
        <div className="px-5">
          <AppButton label="Register Now" variant="filled" />
        </div>
      </div>
      <div className="w-[419px] ">
        <img src="/assets/7 1.png" alt="" />
      </div>
    </div>
  );
};

export default Subscription;
