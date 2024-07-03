import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import AvatarComponent from "./AvatarComponent";
import { selectCurrentOrganizer } from "@/redux/features/auth/authSlice";
import AppPopover from "../ui/AppPopover";
import ProfileDetailsBody from "./ProfileDetailsBody";

export default function ProfileDetailsPopUp() {
  const [open, setOpen] = useState(false);

  const organizer = useAppSelector(selectCurrentOrganizer);

  const handlePopup = () => {
    setOpen(open === true ? false : true);
  };

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
            <AvatarComponent organizer={organizer} />

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
