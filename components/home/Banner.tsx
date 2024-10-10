import AppButton from "../ui/AppButton";
import AppSearchbtn from "../ui/AppSearchInput";

const Banner = () => {
  return (
    <div
      className="bg-cover w-full p-4  h-[400px] bg-center lg:h-screen flex flex-col justify-center items-center "
      style={{
        backgroundImage: "url('/assets/banner.png')",
      }}
    >
      <h1 className="text-white text-[18px] lg:text-3xl 2xl:text-5xl   lg:max-w-[70%] text-center font-bold ">
        Your <span className="text-[#0074D9]"> Launchpad </span> for Future
        Ready <span className="text-[#0074D9]">Skills & Connections</span>
      </h1>
      <p className="lg:text-[16px] text-[14px] text-center text-[#F1F5F9] lg:my-3 mb-2">
        A Platform Where You Can Find Events According to Your Passion
      </p>
      <AppSearchbtn variant="white" />
      <div className="mt-5 text-white flex justify-center items-center gap-5">
        <AppButton label="Explore Event" href="/event" />
        <p>Or</p>
        <AppButton
          href="/event/create-event"
          label="Create Event"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Banner;
