import { TNavItems } from "@/types";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping, FaTicket } from "react-icons/fa6";
import { IoHome, IoPersonAddSharp, IoSettingsSharp } from "react-icons/io5";
import {
  MdAddToPhotos,
  MdAdminPanelSettings,
  MdSwitchAccount,
  MdVerified,
  MdWorkspacePremium,
} from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const common: any[] = [
  {
    label: "Overview",
    path: "/dashboard",
    Icon: RxDashboard,
  },
  {
    label: "profile settings",
    path: "/dashboard/profileSetting",
    Icon: IoSettingsSharp,
  },
  {
    label: "Withdraw Fund",
    path: "/dashboard/withdrawFund",
    Icon: BiMoneyWithdraw,
  },
  {
    label: "Home",
    path: "/",
    Icon: IoHome,
  },
];

export const supperItems: TNavItems[] = [
  {
    label: "Manage Organizer",
    path: "/dashboard/manage-organizer",
    Icon: FaUsers,
  },
  {
    label: "Add Accounts",
    path: "/dashboard/addService",
    Icon: MdAddToPhotos,
  },
  {
    label: "Manage Account",
    path: "/dashboard/allService",
    Icon: MdSwitchAccount,
  },

  {
    label: "Topup User",
    path: "/dashboard/topUpToUser",
    Icon: FaTicket,
  },
  {
    label: "Manage Admin",
    path: "/dashboard/manageAdmin",
    Icon: MdAdminPanelSettings,
  },
  {
    label: "Make Admin",
    path: "/dashboard/addAdmin",
    Icon: IoPersonAddSharp,
  },

  {
    label: "Manage Fund",
    path: "/dashboard/manageFund",
    Icon: RiRefund2Fill,
  },
  common[2],

  {
    label: "Manage KYC",
    path: "/dashboard/manage-kyc",
    Icon: MdVerified,
  },
  {
    label: "Manage Order",
    path: "/dashboard/manage-order",
    Icon: FaCartShopping,
  },
  {
    label: "Manage Plans",
    path: "/dashboard/manage-plans",
    Icon: MdWorkspacePremium,
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
