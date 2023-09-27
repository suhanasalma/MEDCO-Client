import React from "react";
import { TbChevronDown, TbArrowsMinimize } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { menus } from "./headerMenu";

const FlotingMenuBar = ({
  setMainNavOpen,
  mainNavOpen,
  aboutToggle,
  openAbout,
  patientServiceToggle,
  patientService,
  medicleTravelToggle,
  medicleTravel,
  insuranceServiceToggle,
  insuranceOpen,
  contactToggle,
  contactOpen,
}) => {
  return (
    <section
      className={`h-fit duration-1000 ease-in-out absolute z-40 w-full bg-green text-white border-b-2 border-white ${
        mainNavOpen ? "p-5 top-14 md:top-12 lg:top-20 " : "top-[-500px] "
      }`}
    >
      <TbArrowsMinimize
        className="font-bold text-2xl border-2 w-7 h-7 mb-10 bg-light-green text-gray text-center"
        onClick={() => setMainNavOpen(false)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:justify-items-center justify-items-start	 place-items-start	gap-10	text-sm">
        <div className="">
          <div
            onClick={aboutToggle}
            className="flex justify-between items-center cursor-pointer border-light-gray px-2"
          >
            <p className="">About Medco</p>
            <TbChevronDown />
          </div>
          {openAbout && (
            <ul className="  pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
              {menus.AboutMedco?.map((x, i) => (
                <li key={i} className="list-disc  border-light-gray">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-bold flex items-center gap-2 ${
                        isActive ? "text-brown" : "text-white"
                      }`
                    }
                  >
                    {x.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div
            className="flex justify-between items-center cursor-pointer  border-light-gray px-2"
            onClick={patientServiceToggle}
          >
            <p>Patient Services</p>
            <TbChevronDown />
          </div>
          {patientService && (
            <ul className="  pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
              {menus.PatientService?.map((x, i) => (
                <li key={i} className="list-disc  border-light-gray">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-bold flex items-center gap-2 ${
                        isActive ? "text-brown" : "text-white"
                      }`
                    }
                  >
                    {x.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div
            onClick={medicleTravelToggle}
            className="flex justify-between items-center cursor-pointer  border-light-gray px-2"
          >
            <p>Medical Travel</p>
            <TbChevronDown />
          </div>
          {medicleTravel && (
            <ul className="pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
              {menus.MedicalTravel?.map((x, i) => (
                <li key={i} className="list-disc  border-light-gray">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-bold flex items-center gap-2 ${
                        isActive ? "text-brown" : "text-white"
                      }`
                    }
                  >
                    {x.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div
            onClick={insuranceServiceToggle}
            className="flex justify-between items-center cursor-pointer  border-light-gray px-2"
          >
            <p>Insurance</p>
            <TbChevronDown />
          </div>
          {insuranceOpen && (
            <ul className="pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
              {menus.Insurance?.map((x, i) => (
                <li key={i} className="list-disc  border-light-gray">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-bold flex items-center gap-2 ${
                        isActive ? "text-brown" : "text-white"
                      }`
                    }
                  >
                    {x.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div
            onClick={contactToggle}
            className="flex justify-between items-center cursor-pointer  border-light-gray px-2"
          >
            <p>Contact Us</p>
            <TbChevronDown />
          </div>
          {contactOpen && (
            <ul className=" text-white px-10 py-4 decoration-dotted w-full space-y-4 bg-green">
              {menus.ContactUs?.map((x, i) => (
                <li key={i} className="list-disc">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-bold flex items-center gap-2 ${
                        isActive ? "text-brown" : "text-green"
                      }`
                    }
                  >
                    {x.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-brown py-1 border-2 text-white px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-green" : "text-white"
              }`
            }
          >
            {" "}
            Packages
          </NavLink>
        </div>

        <div className="px-2 cursor-pointer  border-light-gray">
          <NavLink
            to="/findDoctors"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-brown" : "text-white"
              }`
            }
          >
            Find a Doctor
          </NavLink>
        </div>
        <div className="px-2 cursor-pointer  border-light-gray">
          <NavLink
            to="/ClincAndCenter"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-brown" : "text-white"
              }`
            }
          >
            Clinics & Centers
          </NavLink>
        </div>
        <div className="cursor-pointer  border-light-gray">
          {/* <NavLink
            to="/ConditionsAndTreatment"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-brown" : "text-white"
              }`
            }
          >
            Conditions & Treatments
          </NavLink> */}
          <NavLink
            to="/Doctors"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-brown" : "text-white"
              }`
            }
          >
            Doctors
          </NavLink>
        </div>
        <div className="px-2 cursor-pointer  border-light-gray">
          <NavLink
            to="/BookinAppointments"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-brown" : "text-white"
              }`
            }
          >
            Book Appointments
          </NavLink>
        </div>
        <div className="px-2 cursor-pointer ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-bold flex items-center gap-2 ${
                isActive ? "text-brown" : "text-white"
              }`
            }
          >
            Send Inquiry
          </NavLink>
        </div>
        <div className="px-2 cursor-pointer flex items-center gap-2">
          <FaMobileAlt className="text-white text-xl" />
          <a href="tel:+880151515151">+880 1515151</a>
        </div>
      </div>
    </section>
  );
};

export default FlotingMenuBar;
