import React, { useEffect, useState, useRef } from "react";
import logo from "../../../Assests/Logo/MEDCO1.png";
import {
  TbBell,
  TbUserPlus,
  TbShoppingCartDiscount,
  TbSunFilled,
  TbMoonStars,
  TbChevronDown,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { menus } from "./headerMenu";
import "./header.css";
import HeaderInput from "./HeaderInput";
import { VscThreeBars } from "react-icons/vsc";
import HeaderSideBar from "./HeaderSideBar";

const Header = () => {
  const [lan, setLan] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png"
  );
  const [mainNavOpen, setMainOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [patientService, setPatientService] = useState(false);
  const [medicleTravel, setMedicleTravel] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [notification, setNotification] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // add event listener to document object
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutsideMenu);
    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  const handleClickOutside = (event) => {
    // if click occurred outside the component, close the menu
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setUserOpen(false);
    }
  };
  const handleClickOutsideMenu = (event) => {
    // if click occurred outside the component, close the menu
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      mainNavOpen === true
    ) {
      setPatientService(false);
      setOpenAbout(false);
      setMedicleTravel(false);
      setContactOpen(false);
      setInsuranceOpen(false);
    }
  };
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

  return (
    <div className="p-2 lg:w-10/12 mx-auto">
      <section className="flex justify-between items-center ">
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
        <div className="cursor-pointer" ref={navbarRef}>
          <TbUserPlus
            onClick={() => setUserOpen((prevUserOpen) => !prevUserOpen)}
            className="text-2xl text-green relative"
          />
          {userOpen && (
            <div className="block border-2 border-green font-bold text-green bg-white absolute px-4 space-y-1 z-20">
              <p>
                <Link>Login</Link>
              </p>
              <p>
                <Link>Create Account</Link>
              </p>
            </div>
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
        <div className="hidden sm:flex items-center gap-3">
          <img className="w-6 h-6 rounded-full" src={lan} alt="" />
          <select
            onClose={() => setUserOpen((prevOpen) => !prevOpen)}
            className="text-green font-bold cursor-pointer"
            onChange={(e) => setLan(e.target.value)}
            id=""
          >
            {menus.countries.map((country, i) => (
              <option key={i} value={country.image}>
                {country.alpha2code}
              </option>
            ))}
          </select>
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
          className="block lg:hidden"
        >
          <VscThreeBars className="text-2xl" />
        </div>
      </section>

      <article className="hidden lg:block xl:text-base text-sm" ref={menuRef}>
        <hr className="my-2  text-green" />
        <section className="flex justify-around items-center text-gray relative">
          <p className="cursor-pointer" onClick={aboutToggle}>
            About Medco
          </p>
          <p className="cursor-pointer" onClick={patientServiceToggle}>
            Patient Services
          </p>
          <p className="cursor-pointer" onClick={medicleTravelToggle}>
            Medical Travel
          </p>
          <Link className="bg-brown px-4 py-1 text-white">Packages</Link>
          <p className="cursor-pointer" onClick={aboutToggle}>
            Insurance
          </p>
          <p className="cursor-pointer" onClick={contactToggle}>
            Contact Us
          </p>
          <a href="tel:+880151515151">+880151515151</a>
        </section>
        <hr className="my-2  text-gray" />
        <section className="flex justify-around items-center text-gray mt-5">
          <Link>Find a Doctor</Link>
          <Link>Clinics & Centers</Link>
          <Link>Conditions & Treatments</Link>
          <Link>Book Appointments</Link>
          <Link>Send Inquiry</Link>
        </section>
        <section
          style={{ transition: "all 0.3s ease-in-out" }}
          className={`bg-white w-9/12 mx-auto absolute -mt-10 xl:-mt-11 z-10 ${
            openAbout || patientService || medicleTravel || contactOpen
              ? "border-t-8 border-green p-10"
              : ""
          }`}
        >
          {openAbout && (
            <u className="text-[#5C4033] decoration-dotted w-full space-y-4">
              {menus.AboutMedco.map((x, i) => (
                <li key={i} className="">
                  <Link>{x.name}</Link>
                </li>
              ))}
            </u>
          )}
          {patientService && (
            <u className="text-[#5C4033] decoration-dotted w-full space-y-4 ">
              {menus.PatientService.map((x, i) => (
                <li key={i} className="">
                  <Link>{x.name}</Link>
                </li>
              ))}
            </u>
          )}
          {medicleTravel && (
            <u className="text-[#5C4033] decoration-dotted w-full space-y-4">
              {menus.MedicalTravel.map((x, i) => (
                <li key={i} className="">
                  <Link>{x.name}</Link>
                </li>
              ))}
            </u>
          )}
          {contactOpen && (
            <u className="text-[#5C4033] decoration-dotted w-full space-y-4">
              {menus.ContactUs.map((x, i) => (
                <li key={i} className="">
                  <Link>{x.name}</Link>
                </li>
              ))}
            </u>
          )}
        </section>
      </article>
      {mainNavOpen && (
        <HeaderSideBar
          menuRef={menuRef}
          aboutToggle={aboutToggle}
          openAbout={openAbout}
          menus={menus}
          patientServiceToggle={patientServiceToggle}
          patientService={patientService}
          medicleTravelToggle={medicleTravelToggle}
          medicleTravel={medicleTravel}
          insuranceServiceToggle={insuranceServiceToggle}
          insuranceOpen={insuranceOpen}
          contactToggle={contactToggle}
          contactOpen={contactOpen}
        />
      )}
    </div>
  );
};

export default Header;
