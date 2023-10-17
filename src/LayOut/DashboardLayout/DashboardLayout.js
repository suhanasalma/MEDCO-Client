import React from "react";
import { Outlet } from "react-router-dom";
import logo from '../../Assests/Logo/MEDCO1.png'

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="bg-light-green w-52  h-screen">
        <img className="w-10 lg:w-16 rounded-lg" src={logo} alt=""/>
        <p>this is my side bar</p>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
