import { TNavItems } from "@/types";
import { FaUsers } from "react-icons/fa";
import { IoHome, IoPersonAddSharp, IoSettingsSharp } from "react-icons/io5";
import { MdAdminPanelSettings, MdSwitchAccount } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiAwsorganizations } from "react-icons/si";
import { MdOutlineEventAvailable } from "react-icons/md";

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
    Icon: IoHome,
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
  {
    label: "All Account",
    path: "/dashboard/allService",
    Icon: MdSwitchAccount,
  },

  {
    label: "Manage Fund",
    path: "/dashboard/manageFund",
    Icon: RiRefund2Fill,
  },
  common[2],
];

export const dashboardSidebarItem = {
  organizerItems: [common[0], ...organizerItems, common[1]],
  supperItems,
};
