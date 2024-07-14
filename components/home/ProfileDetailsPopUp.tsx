import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hook";
import AvatarComponent from "./AvatarComponent";
import {
  selectCurrentOrganizer,
  selectCurrentUser,
} from "@/redux/features/auth/authSlice";
import AppPopover from "../ui/AppPopover";
import ProfileDetailsBody from "./ProfileDetailsBody";
import { usePathname } from "next/navigation";

export default function ProfileDetailsPopUp() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const user = useAppSelector(selectCurrentUser);
  const organizer = useAppSelector(selectCurrentOrganizer);

  const handlePopup = () => {
    setOpen(open === true ? false : true);
  };

  useEffect(() => {
    if (pathname) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <div className="md:hidden">
        <AvatarComponent organizer={organizer} />
      </div>

      <AppPopover
        popupOpen={open}
        setPopupOpen={setOpen}
        placement="bottomRight"
        button={
          <div
            onClick={handlePopup}
            className="cursor-pointer flex items-center md:gap-2"
          >
            <AvatarComponent organizer={organizer} user={user} />

            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <SlArrowDown className="text-xs md:text-base text-white" />
            </motion.span>
          </div>
        }
      >
        <ProfileDetailsBody />
      </AppPopover>
    </>
  );
}
