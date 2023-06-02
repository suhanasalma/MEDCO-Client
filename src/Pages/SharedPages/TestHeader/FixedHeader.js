import React, { useEffect, useState, useRef } from "react";
import logo from "../../../Assests/Logo/MEDCO1.png";
import {
  TbBell,
  TbUserPlus,
  TbShoppingCartDiscount,
  TbSunFilled,
  TbMoonStars,
  TbLogin,
  TbLayoutDashboard,
  TbArrowsCross,
} from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import {
  FaSignInAlt,
  FaRegUserCircle,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import HeaderInput from "../Header/HeaderInput";
import FlotingMenuBar from "./FlotingMenuBar";

// import HeaderInput from "../Header/HeaderInput";

const FixedHeader = () => {
  const [mainNavOpen, setMainNavOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [notification, setNotification] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const userMenuRef = useRef(null);
  const [openAbout, setOpenAbout] = useState(false);
  const [patientService, setPatientService] = useState(false);
  const [medicleTravel, setMedicleTravel] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const insuranceServiceToggle = () => {
    setInsuranceOpen(!insuranceOpen);
    setOpenAbout(false);
    setMedicleTravel(false);
    setContactOpen(false);
    setPatientService(false);
  };
  const patientServiceToggle = () => {
    setOpenAbout(false);
    setMedicleTravel(false);
    setContactOpen(false);
    setPatientService(!patientService);
    setInsuranceOpen(false);
  };
  const aboutToggle = () => {
    setPatientService(false);
    setMedicleTravel(false);
    setContactOpen(false);
    setOpenAbout(!openAbout);
    setInsuranceOpen(false);
  };
  const medicleTravelToggle = () => {
    setPatientService(false);
    setOpenAbout(false);
    setContactOpen(false);
    setMedicleTravel(!medicleTravel);
    setInsuranceOpen(false);
  };
  const contactToggle = () => {
    setPatientService(false);
    setOpenAbout(false);
    setMedicleTravel(false);
    setContactOpen(!contactOpen);
    setInsuranceOpen(false);
  };

  useEffect(() => {
    // add event listener to document object
    document.addEventListener("click", handleClickOutside);
    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // if click occurred outside the component, close the menu
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setUserOpen(false);
    }
  };
  return (
    <div className="flex justify-between items-center gap-5 relative">
      <NavLink to="/">
        <img className="w-10 lg:w-16 rounded-lg" src={logo} alt="" />
      </NavLink>
      <HeaderInput />
      <div className="relative group">
        <NavLink
          to="/h"
          className={({ isActive }) =>
            `text-sm font-bold flex items-center gap-2 ${
              isActive ? "text-brown" : "text-green"
            }`
          }
        >
          <TbBell className="text-2xl " />
          {notification > 0 && (
            <p className="bg-green rounded-full w-3 h-3 text-sm text-center font-bold absolute bottom-4 right-0"></p>
          )}
        </NavLink>
        {notification > 0 && (
          <p className="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2 z-20">
            {notification}
          </p>
        )}
      </div>
      <div className="relative group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-bold flex items-center gap-2 ${
              isActive ? "text-brown" : "text-green"
            }`
          }
        >
          <TbShoppingCartDiscount className="text-2xl " />
          {notification > 0 && (
            <p className="bg-green rounded-full w-3 h-3  text-sm text-center font-bold absolute bottom-4 right-0"></p>
          )}
        </NavLink>
        {notification > 0 && (
          <p className="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2 z-20">
            {notification}
          </p>
        )}
      </div>
      <div className="cursor-pointer" ref={userMenuRef}>
        <div
          onClick={() => setUserOpen((prevUserOpen) => !prevUserOpen)}
          className="flex items-center gap-2 "
        >
          <TbUserPlus className="text-2xl text-green relative " />
          {userOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <ul
          className={` duration-700 ease-in-out border-2 border-green font-bold text-green bg-white absolute px-4  space-y-2 ${
            !userOpen ? " z-0 opacity-0" : "  z-20 "
          }`}
        >
          <li className="flex items-center gap-2">
            <FaSignInAlt />
            <Link>Login</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaRegUserCircle />
            <Link>Register</Link>
          </li>
        </ul>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm font-bold flex items-center gap-2 ${
            isActive ? "text-brown" : "text-green"
          }`
        }
      >
        <TbLayoutDashboard /> DashBoard{" "}
      </NavLink>
      <div className="sm:block hidden">
        {!darkMode && (
          <TbSunFilled
            onClick={() => setDarkMode(true)}
            className="text-3xl text-[#FDB813] cursor-pointer"
          />
        )}
        {darkMode && (
          <TbMoonStars
            onClick={() => setDarkMode(false)}
            className="text-3xl text-[#FEFCD7] cursor-pointer"
          />
        )}
      </div>
      <div
        onClick={() => setMainNavOpen(!mainNavOpen)}
        className="text-green"
      >
        {mainNavOpen ? (
          <TbArrowsCross className="text-2xl" />
        ) : (
          <VscThreeBars className="text-2xl" />
        )}
      </div>
      <FlotingMenuBar
        setMainNavOpen={setMainNavOpen}
        mainNavOpen={mainNavOpen}
        aboutToggle={aboutToggle}
        openAbout={openAbout}
        patientServiceToggle={patientServiceToggle}
        patientService={patientService}
        medicleTravelToggle={medicleTravelToggle}
        medicleTravel={medicleTravel}
        insuranceServiceToggle={insuranceServiceToggle}
        insuranceOpen={insuranceOpen}
        contactToggle={contactToggle}
        contactOpen={contactOpen}
      />
    </div>
  );
};

export default FixedHeader;