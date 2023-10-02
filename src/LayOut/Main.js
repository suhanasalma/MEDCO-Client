import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedPages/Header/Header";
import Footer from "../Pages/SharedPages/Footer/Footer/Footer";

const Main = () => {
  return (
    <div className="overflow-hidden mx-auto max-w-screen-2xl">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
