import React from 'react';
import { Link } from 'react-router-dom';
import {
    TbChevronDown
  } from "react-icons/tb";

const HeaderSideBar = ({menuRef,aboutToggle,openAbout,menus,patientServiceToggle,patientService,medicleTravelToggle,medicleTravel,insuranceServiceToggle,insuranceOpen,contactToggle,contactOpen}) => {
    return (
        <article
          className="lg:hidden block bg-light-green py-6 px-20 space-y-3 text-sm "
          ref={menuRef}
        >
          <div className="">
           <div onClick={aboutToggle} className="flex justify-between cursor-pointer border-b-2 border-light-gray px-2">
           <p className="" >
              About Medco
            </p>
            <TbChevronDown/>
           </div>
            {openAbout && (
              <ul 
                className="  pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white"
              >
                {menus.AboutMedco.map((x, i) => (
                  <li key={i} className="list-disc border-b-2 border-light-gray">
                    <Link>{x.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <div className="flex justify-between cursor-pointer border-b-2 border-light-gray px-2" onClick={patientServiceToggle}>
            <p >
              Patient Services
            </p>
            <TbChevronDown/>
            </div>
            {patientService && (
              <ul  className="  pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
                {menus.PatientService.map((x, i) => (
                  <li key={i} className="list-disc border-b-2 border-light-gray">
                    <Link>{x.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <div onClick={medicleTravelToggle} className="flex justify-between cursor-pointer border-b-2 border-light-gray px-2">
            <p>
              Medical Travel
            </p>
            <TbChevronDown/>
            </div>
            {medicleTravel && (
              <ul className="pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
                {menus.MedicalTravel.map((x, i) => (
                  <li key={i} className="list-disc border-b-2 border-light-gray">
                    <Link>{x.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="bg-brown py-1 border-2 text-white px-2">
            <Link> Packages</Link>
          </div>
          <div>
            <div onClick={insuranceServiceToggle} className="flex justify-between cursor-pointer border-b-2 border-light-gray px-2">
            <p>
             Insurance
            </p>
            <TbChevronDown/>
            </div>
            {insuranceOpen && (
              <ul className="pl-10 py-4 decoration-dotted w-full space-y-2 bg-green text-white">
                {menus.Insurance.map((x, i) => (
                  <li key={i} className="list-disc border-b-2 border-light-gray">
                    <Link>{x.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <div onClick={contactToggle} className="flex justify-between cursor-pointer border-b-2 border-light-gray px-2">
            <p >
              Contact Us
            </p>
            <TbChevronDown/>
            </div>
            {contactOpen && (
              <ul  className=" text-white px-10 py-4 decoration-dotted w-full space-y-4 bg-green">
                {menus.ContactUs.map((x, i) => (
                  <li key={i} className="list-disc">
                    <Link>{x.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="px-2 cursor-pointer border-b-2 border-light-gray">
            <Link>Find a Doctor</Link>
          </div>
          <div className="px-2 cursor-pointer border-b-2 border-light-gray">
            <Link>Clinics & Centers</Link>
          </div>
          <div className="px-2 cursor-pointer border-b-2 border-light-gray">
            <Link>Conditions & Treatments</Link>
          </div>
          <div className="px-2 cursor-pointer border-b-2 border-light-gray">
            <Link>Book Appointments</Link>
          </div>
          <div className="px-2 cursor-pointer ">
            <Link>Send Inquiry</Link>
          </div>
        </article>
    );
};

export default HeaderSideBar;