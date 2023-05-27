import React from "react";
import { Outlet } from "react-router-dom";
import TestHeader from "../Pages/SharedPages/TestHeader/TestHeader";
// import Header from '../Pages/SharedPages/Header/Header';

const Main = () => {
  return (
    <div className=" mx-auto max-w-screen-2xl">
      <TestHeader />
      <Outlet />
      {/* <Header/> */}

    </div>
  );
};

export default Main;
