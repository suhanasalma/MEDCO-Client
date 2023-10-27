import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenus from "./DashboardMenus";

const DashboardLayout = () => {
  return (
    <div className="flex overflow-auto">
      <DashboardMenus />
      <div className="bg-soft-gray flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
