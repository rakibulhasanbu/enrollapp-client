import AppButton from "../ui/AppButton";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/assets/banner.png')",
      }}
    >
      <h1 className="text-white text-[56px] max-w-[70%] text-center font-bold">
        <span className="text-[#0074D9]"> Present</span> your Passion in a
        unique outstanding <span className="text-[#0074D9]">Mind</span>
      </h1>
      <p className="text-[16px] text-[#F1F5F9] my-3">
        A Platform Where You Can Find Events According to Your Passion
      </p>
      <div className="  w-[30%] flex justify-between items-center text-white py-2 border  rounded-full px-5 mt-5">
        <input
          type="text"
          placeholder="Search event"
          name=""
          id=""
          className="bg-transparent outline-none "
        />
        <img className="w-[20px]" src="/assets/search.png" alt="" />
      </div>
      <div className="mt-5 text-white flex justify-center items-center gap-5">
        <AppButton label="Explore Event" />
        <p>Or</p>
        <AppButton label="Create Event" variant="outlined" />
      </div>
    </div>
  );
};

export default Banner;
