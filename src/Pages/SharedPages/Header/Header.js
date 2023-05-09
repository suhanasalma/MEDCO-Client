import React, { useEffect, useState, useRef } from "react";
import logo from "../../../Assests/Logo/MEDCO1.png";
import {
  TbBell,
  TbUserPlus,
  TbShoppingCartDiscount,
  TbSunFilled,TbMoonStars
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { menus } from "./headerMenu";
import './header.css'
import HeaderInput from "./HeaderInput";

const Header = () => {
  const [lan, setLan] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png"
  );
  const [open, setOpen] = useState(false);
  const [openAbout,setOpenAbout] = useState(false);
  const [patientService,setPatientService] = useState(false);
  const [medicleTravel,setMedicleTravel] = useState(false);
  const [contactOpen,setContactOpen] = useState(false)
  const [notification, setNotification] = useState(1);
  const [darkMode,setDarkMode] = useState(false)
  const navbarRef = useRef(null);
  const menuRef = useRef(null)

  // console.log(menuRef);


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
      setOpen(false);
     
    }
  };
  const handleClickOutsideMenu = (event) => {
    // if click occurred outside the component, close the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setPatientService(false);
      setOpenAbout(false);
      setMedicleTravel(false);
      setContactOpen(false);
     
    }
  };
  const patientServiceToggle = ()=>{
    setOpenAbout(false)
    setMedicleTravel(false)
    setContactOpen(false)
    setPatientService(!patientService)
  }
  const aboutToggle = ()=>{
    setPatientService(false)
    setMedicleTravel(false)
    setContactOpen(false)
    setOpenAbout(!openAbout)
    
  }
  const medicleTravelToggle = ()=>{
    setPatientService(false)
    setOpenAbout(false)
    setContactOpen(false)
    setMedicleTravel(!medicleTravel)
  }
  const contactToggle = ()=>{
    setPatientService(false)
    setOpenAbout(false)
    setMedicleTravel(false)
    setContactOpen(!contactOpen)
  }


  return (
    <div className="p-2 mx-14">
      <section className="flex justify-between items-center ">
        <img className="w-16 rounded-lg" src={logo} alt="" />
        <HeaderInput/>
        <div className="relative group">
          <div>
            <TbBell className="text-2xl text-green " />
            {notification > 0 && (
              <p className="bg-green rounded-full w-3 h-3 text-sm text-center font-bold absolute bottom-4 right-0"></p>
            )}
          </div>
          {notification > 0 && (
            <p className="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2">
              {notification}
            </p>
          )}
        </div>
        <div ref={navbarRef}>
          <TbUserPlus
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            className="text-2xl text-green relative"
          />
          {open && 
          <div
            className="block border-2 border-green font-bold text-green bg-white absolute px-4 space-y-1"
          >
            <p>
              <Link>Login</Link>
            </p>
            <p>
              <Link>Create Account</Link>
            </p>
          </div>
          }
        </div>
        <div className="relative group">
          <div>
            <TbShoppingCartDiscount className="text-2xl text-green" />
            {notification > 0 && (
              <p className="bg-green rounded-full w-3 h-3  text-sm text-center font-bold absolute bottom-4 right-0"></p>
            )}
          </div>
          {notification > 0 && (
            <p className="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2">
              {notification}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <img className="w-6 h-6 rounded-full" src={lan} alt="" />
          <select
            onClose={() => setOpen((prevOpen) => !prevOpen)}
            className="text-green font-bold"
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
        <div>
       {!darkMode && <TbSunFilled onClick={()=>setDarkMode(true)} className="text-3xl text-[#FDB813]"/>}
        { darkMode && 
          <TbMoonStars onClick={()=>setDarkMode(false)} className="text-3xl text-[#FEFCD7]"/>
        }
        </div>
      </section>
      <hr className="my-2  text-green" />
     <article ref={menuRef}>
     <section  className="flex justify-around items-center text-gray font-medium relative">
        <p onClick={aboutToggle}>About Medco</p>
        <p onClick={patientServiceToggle}>Patient Services</p>
        <p onClick={medicleTravelToggle}>Medical Travel</p>
        <Link className="bg-brown px-4 py-1 text-white">Packages</Link>
        <p onClick={aboutToggle}>Insurance</p>
        <p onClick={contactToggle}>Contact Us</p>
        <a href="tel:+880151515151">
        +880151515151
        </a>
      </section>
      <hr className="my-2  text-gray" />
      <section className="flex justify-around items-center text-gray font-medium mt-5">
      <p>Find a Doctor</p>
      <p>Clinics & Centers</p>
      <p>Conditions & Treatments</p>
      <p>Book Appointments</p>
      <p>Send Inquiry</p>
     </section>
    <section className=" bg-white w-11/12 mx-auto absolute -mt-12 z-10">
      {openAbout && <div className="border-t-8 border-green duration-300 w-full">
          {menus.AboutMedco.map((x) => (
          <p className="">{x.name}</p>
        ))}
        </div>
       }
      {patientService && <div className="border-t-8 border-green duration-300 w-full">
          {menus.PatientService.map((x) => (
          <p className="">{x.name}</p>
        ))}
        </div>
      }
      {medicleTravel && <div className="border-t-8 border-green duration-300 w-full">
          {menus.MedicalTravel.map((x) => (
          <p className="">{x.name}</p>
        ))}
        </div>
      }
      {contactOpen && <div className="border-t-8 border-green duration-300 w-full">
          {menus.ContactUs.map((x) => (
          <p className="">{x.name}</p>
        ))}
        </div>
      }
    </section>
     </article>
     
    </div>
  );
};

export default Header;
