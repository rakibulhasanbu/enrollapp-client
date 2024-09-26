import { TNavItems } from "@/types";
import { FaUsers } from "react-icons/fa";
import {
  IoHome,
  IoHomeOutline,
  IoPersonAddSharp,
  IoSettingsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdOutlineEventNote,
  MdSwitchAccount,
} from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiAwsorganizations } from "react-icons/si";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa6";
import { HiOutlineClipboardList } from "react-icons/hi";

const common: any[] = [
  {
    label: "Overview",
    path: "/dashboard",
    Icon: TbLayoutDashboardFilled,
  },
  {
    label: "profile settings",
    path: "/dashboard/profileSetting",
    Icon: IoSettingsSharp,
  },
  {
    label: "Home",
    path: "/",
    Icon: IoHomeOutline,
  },
  {
    label: "Logout",
    path: "",
    Icon: FiLogOut,
  },
];

export const supperItems: TNavItems[] = [
  common[0],
  common[2],
  {
    label: "Manage Events",
    path: "/dashboard/manage-event",
    Icon: MdOutlineEventAvailable,
  },
  {
    label: "Manage Organizer",
    path: "/dashboard/manage-organizer",
    Icon: SiAwsorganizations,
  },
  {
    label: "Manage User",
    path: "/dashboard/manage-user",
    Icon: FaUsers,
  },
  {
    label: "Manage Admin",
    path: "/dashboard/manage-admin",
    Icon: MdAdminPanelSettings,
  },
  common[1],
];

const organizerItems: TNavItems[] = [
  // common[0],
  // {
  //   label: "All Account",
  //   path: "/dashboard/allService",
  //   Icon: MdSwitchAccount,
  // },
  common[2],
  {
    label: "Manage Events",
    path: "/dashboard/manage-my-event",
    Icon: MdOutlineEventNote,
  },
  {
    label: "Manage Response",
    path: "/dashboard/manage-response",
    Icon: FaWpforms,
  },
  {
    label: "Event Details",
    path: "/dashboard/edit-event",
    Icon: MdOutlineEventAvailable,
  },
  {
    label: "Edit Form",
    path: "/dashboard/edit-form",
    Icon: HiOutlineClipboardList,
  },
  {
    label: "Event Setting",
    path: "/dashboard/event-setting",
    Icon: IoSettingsOutline,
  },
  common[3],
];

export const dashboardSidebarItem = {
  organizerItems,
  supperItems,
};
