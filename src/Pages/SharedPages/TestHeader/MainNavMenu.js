import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNavMenu = () => {
  return (
    <div className="hidden md:flex justify-between items-center gap-5 text-gray text-sm">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm  flex items-center gap-2 ${
            isActive ? "text-brown font-bold" : "text-green"
          }`
        }
      >
        Find a Doctor
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm  flex items-center gap-2 ${
            isActive ? "text-brown font-bold" : "text-green"
          }`
        }
      >
        Clinics & Centers
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm  flex items-center gap-2 ${
            isActive ? "text-brown font-bold" : "text-green"
          }`
        }
      >
        Conditions & Treatments
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm  flex items-center gap-2 ${
            isActive ? "text-brown font-bold" : "text-green"
          }`
        }
      >
        Book Appointments
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm  flex items-center gap-2 ${
            isActive ? "text-brown font-bold" : "text-green"
          }`
        }
      >
        Book a Hotel
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm  flex items-center gap-2 ${
            isActive ? "text-brown font-bold" : "text-green"
          }`
        }
      >
        Ambulance
      </NavLink>
    </div>
  );
};

export default MainNavMenu;
