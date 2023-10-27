import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardMenus from "./DashboardMenus";
import { BiMenu } from "react-icons/bi";
const DashboardLayout = () => {
  const isLargeScreen = window.innerWidth >= 1024;
 const [openMenu, setOpenMenu] = useState(isLargeScreen);
  const layOutRef = useRef(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      if (!isLargeScreen) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", closeMenuOnClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", closeMenuOnClickOutside);

    };
  }, [openMenu]);

  const closeMenuOnClickOutside = (event) => {
    if (layOutRef.current && layOutRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  }; 

  return (
    <div className="">
      <div 
        className={`fixed  duration-500 ease-in-out ${
          openMenu ? "left-0 " : "left-[-300px] lg:left-0"
        }  top-0 z-20 bg-white auto`}
      >
        <DashboardMenus />
      </div>

      <div className={`bg-soft-gray lg:ml-[260px]`}>
        <p className="lg:hidden block" onClick={toggleMenu}>
          <BiMenu />
        </p>
        <div  ref={layOutRef} >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
