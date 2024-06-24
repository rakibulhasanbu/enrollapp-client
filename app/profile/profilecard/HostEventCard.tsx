const HostEventCard = () => {
  return (
    <div className="mt-20">
      <h1 className="text-[32px] font-bold mb-2">Host Event</h1>
      <div className="bg-white rounded-xl shadow-xl p-5 w-[163px] flex flex-col items-center justify-center">
        <img src="/assets/calendar-plus-01.png" alt="" className="w-10" />
        <p className="mt-3">Create Events</p>
      </div>
    </div>
  );
};

export default HostEventCard;
