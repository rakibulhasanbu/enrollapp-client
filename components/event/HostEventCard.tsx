import Link from "next/link";

const HostEventCard = () => {
  return (
    <Link href={"/event/create-event"} className="mt-20 block">
      <h1 className="text-[32px] font-bold mb-2">Host Event</h1>
      <div className="bg-white rounded-xl shadow-xl p-5 w-[163px] flex flex-col items-center justify-center">
        <img src="/assets/calendar-plus-01.png" alt="" className="w-10" />
        <p className="mt-3">Create Events</p>
      </div>
    </Link>
  );
};

export default HostEventCard;
