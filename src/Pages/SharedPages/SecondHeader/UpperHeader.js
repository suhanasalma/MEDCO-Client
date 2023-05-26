import React, { useEffect, useState, useRef } from "react";
import logo from "../../../Assests/Logo/MEDCO1.png";
import {
  TbBell,
  TbUserPlus,
  TbShoppingCartDiscount,
  TbSunFilled,
  TbMoonStars,
} from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import HeaderInput from "../Header/HeaderInput";

const UpperHeader = () => {
  const [mainNavOpen, setMainOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [notification, setNotification] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const userMenuRef = useRef(null);

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
    <div className="flex justify-between items-center gap-5">
      <Link to="/">
        <img className="w-10 lg:w-16 rounded-lg" src={logo} alt="" />
      </Link>
      <HeaderInput />
      <div className="relative group">
        <Link>
          <TbBell className="text-2xl text-green " />
          {notification > 0 && (
            <p className="bg-green rounded-full w-3 h-3 text-sm text-center font-bold absolute bottom-4 right-0"></p>
          )}
        </Link>
        {notification > 0 && (
          <p className="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2 z-20">
            {notification}
          </p>
        )}
      </div>
      <div className="relative group">
        <Link>
          <TbShoppingCartDiscount className="text-2xl text-green" />
          {notification > 0 && (
            <p className="bg-green rounded-full w-3 h-3  text-sm text-center font-bold absolute bottom-4 right-0"></p>
          )}
        </Link>
        {notification > 0 && (
          <p className="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2 z-20">
            {notification}
          </p>
        )}
      </div>
      <div className="cursor-pointer" ref={userMenuRef}>
        <TbUserPlus
          onClick={() => setUserOpen((prevUserOpen) => !prevUserOpen)}
          className="text-2xl text-green relative "
        />
        <ul
          className={` duration-500 ease-in-out border-2 border-green font-bold text-green bg-white absolute ${
            !userOpen ? " z-0 opacity-0" : " px-4 space-y-1 z-20 "
          }`}
        >
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Create Account</Link>
          </li>
        </ul>
      </div>
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
        onClick={() => setMainOpen(!mainNavOpen)}
        className="block md:hidden"
      >
        <VscThreeBars className="text-2xl" />
      </div>
    </div>
  );
};

export default UpperHeader;
