import AppButton from "../ui/AppButton";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/assets/banner.png')",
      }}
    >
      <h1 className="text-white text-[56px] max-w-[900px] text-center font-bold">
        <span className="text-[#0074D9]"> Present</span> your Passion in a
        unique outstanding <span className="text-[#0074D9]">Mind</span>
      </h1>
      <p className="text-[16px] text-[#F1F5F9]">
        A Platform Where You Can Find Events According to Your Passion
      </p>
      <div className="flex justify-between items-center text-white py-5">
        <input
          type="text"
          placeholder="Search event"
          name=""
          id=""
          className="none"
        />
        <img src="/assets/search.png" alt="" />
      </div>
      <div>
        <AppButton label="Explore Event" />
        <AppButton label="Create Event" />
      </div>
    </div>
  );
};

export default Banner;
