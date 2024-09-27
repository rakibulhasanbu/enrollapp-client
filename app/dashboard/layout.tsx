"use client";

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import PrivateLayout from "@/components/shared/PrivateLayout";
import { useState } from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PrivateLayout>
      <div className="h-screen bg-white overflow-hidden w-full">
        <DashboardNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="grid grid-cols-[300px_1fr]">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="w-full px-4 lg:px-8 2xl:px-20 py-4  md:py-4 lg:py-8 2xl:py-10 h-[calc(100dvh-66px)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default DashboardLayout;
