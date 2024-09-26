import {
  logOut,
  selectCurrentOrganizer,
  selectCurrentUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import AvatarComponent from "./AvatarComponent";
import Link from "next/link";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsBodyText } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

const ProfileDetailsBody = () => {
  const organizer = useAppSelector(selectCurrentOrganizer);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const navItems = [
    // {
    //   name: "Home",
    //   link: "/",
    //   icon: <IoHomeOutline />
    // },
    // {
    //   name: "Event",
    //   link: "/event",
    //   icon: <MdOutlineEventAvailable />
    // },
    // {
    //   name: "About Us",
    //   link: "/about",
    //   icon: <BsBodyText />
    // },
    {
      name: "Profile",
      link: `/organizer/${organizer?._id}`,
      icon: <FaRegUser />,
    },
    {
      name: "Log out",
      link: "/log-out",
      icon: <IoMdLogOut />,
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2 border-b border-b-[#EDF2F7] pb-2 pl-2 pt-2">
        <AvatarComponent organizer={organizer} user={user} />
        <div className="w-full">
          <h4 className="text-sm md:text-lg font-medium capitalize flex items-center gap-1">
            {organizer?.name || user?.name}
          </h4>

          <p className="textG">{organizer?.email || user?.email}</p>
        </div>
      </div>

      <div className="space-y-2 pt-2 p-2">
        {navItems.map((nav: any) =>
          nav?.name === "Log out" ? (
            <button
              key={nav?.name}
              onClick={() => dispatch(logOut())}
              className="flex items-center gap-2 text-base 2xl:text-lg hover:text-red-500"
            >
              {nav?.icon}
              {nav?.name}
            </button>
          ) : (
            !user?.email && (
              <Link
                href={nav?.link}
                key={nav?.name}
                className={`flex items-center gap-2 text-[#4C4646] hover:text-primary text-base 2xl:text-lg`}
              >
                {nav?.icon} {nav?.name}
              </Link>
            )
          )
        )}
      </div>
    </>
  );
};

export default ProfileDetailsBody;
