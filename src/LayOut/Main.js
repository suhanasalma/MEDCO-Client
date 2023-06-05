import React from "react";
import { Outlet } from "react-router-dom";
import TestHeader from "../Pages/SharedPages/TestHeader/TestHeader";
import Footer from "../Pages/SharedPages/Footer/Footer/Footer";// import Header from '../Pages/SharedPages/Header/Header';

const Main = () => {
  return (
    <div className="border-4 mx-auto max-w-screen-2xl">
      <TestHeader />
      <Outlet />
      {/* <Header/> */}
      <Footer/>
    </div>
  );
};

export default Main;
