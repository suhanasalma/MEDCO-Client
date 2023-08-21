import React from "react";
import { Outlet } from "react-router-dom";
import TestHeader from "../Pages/SharedPages/Header/TestHeader";
import Footer from "../Pages/SharedPages/Footer/Footer/Footer";

const Main = () => {
  return (
    <div className=" overflow-hidden mx-auto max-w-screen-2xl">
      <TestHeader />
      <Outlet />
      {/* <Header/> */}
      <Footer/>
    </div>
  );
};

export default Main;
