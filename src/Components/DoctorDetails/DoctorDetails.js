import React, { useState } from "react";
import doctorImage from "../../Assests/OurDoctors/1.jpg";
import { FcSurvey, FcVideoCall, FcCallback, FcComments } from "react-icons/fc";
import {FaNotesMedical } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

import {
  RiVideoChatLine,
  RiCommunityLine,
  RiMailDownloadLine,
  RiPhoneLine,
} from "react-icons/ri";
import { RxEyeOpen, RxEyeNone } from "react-icons/rx";

import { GiDoctorFace } from "react-icons/gi";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClose ,AiOutlineCloseSquare} from "react-icons/ai";
import "./doctorDetails.css";
const DoctorDetails = ({ setDoctorDetails }) => {
  const [makeAppointment, setMakeAppointment] = useState(false);
  const [physicalAppointmentVisible, setPhysicalAppointmentVisible] =
    useState(false);
  const [telemedicineAppointmentVisible, setTelemedicineAppointmentVisible] =
    useState(false);
  return (
    <div className="z-[1000] bg-white h-screen overflow-auto w-11/12 sm:w-9/12 ml-auto ">
      <p className="p-4" >
      <AiOutlineCloseSquare onClick={() => setDoctorDetails(false)} className="text-xl text-green font-bold shadow-lg cursor-pointer"/>      </p>
      <section>
        <div className="flex flex-col lg:flex-row items-center justify-between xl:justify-around bg-brown sm:p-20 pb-40 p-5">
          <img
            className="sm:w-72 sm:h-72 w-40 h-40 rounded-full object-cover object-bottom"
            src={doctorImage}
            alt="doctorimage"
          />
          <div className="space-y-3 relative text-center lg:text-start lg:mt-0 mt-10">
            <p className=" uppercase text-white text-3xl font-semibold">
              Dr. PR ALLA PHILIPPE
            </p>
            <p className="font-medium text-white text-lg">Neurologie</p>
            <p className="text-gray">Head of Department</p>
            <div className="text-white">
              <p className="mb-2">Availabel for</p>
              <ul className="grid grid-cols-2 gap-5 text-xs">
                <li className="flex items-center justify-between gap-2">
                  <FcVideoCall />
                  Video Appointment
                </li>
                <li className="flex items-center justify-between gap-2">
                  <FcCallback />
                  Audio Appointment
                </li>
                <li className="flex items-center justify-between gap-2">
                  <FcComments />
                  Chat Appointment
                </li>
                <li className="flex items-center justify-between gap-2">
                  <FcSurvey />
                  Physical Appointment
                </li>
              </ul>
            </div>
            <div
              onClick={() => setMakeAppointment(!makeAppointment)}
              className="bg-green hover:text-green font-medium btn text-white px-5 sm:px-10 py-2 rounded-md flex items-center justify-between gap-2"
            >
              <button>Make an appointment</button>
              {!makeAppointment ? <BsArrowRight /> : <AiOutlineClose />}
            </div>

            {makeAppointment && (
              <div className="absolute bg-white shadow-2xl appointmentCard text-sm rounded-md w-96">
                <p className="uppercase bg-light-gray p-4 text-green font-medium ">
                  make an appointment with pr alla philippe
                </p>
                <div className="border-b-2  border-b-light-gray py-2 px-4 text-brown flex items-center gap-2 cursor-pointer">
                  <RiPhoneLine className="text-2xl" />
                  <div className="text-left">
                    <p>By Phone</p>
                    <p>01515332</p>
                  </div>
                </div>
                <div className="border-b-2 border-b-light-gray py-2 px-4 text-brown flex items-center gap-2 cursor-pointer">
                  <RiMailDownloadLine className="text-2xl" />
                  <div className="text-left">
                    <p>By Email</p>
                    <p>dr@gmail.com</p>
                  </div>
                </div>
                <div className="border-b-2 border-b-light-gray py-2 px-4 text-brown flex items-center gap-2 cursor-pointer">
                  <RiVideoChatLine className="text-2xl" />
                  <div className="text-left">
                    <p>Telemedicine Appointment</p>
                    <p>01515332</p>
                  </div>
                </div>
                <div className="py-2 px-4 text-brown flex items-center gap-2 cursor-pointer">
                  <RiCommunityLine className="text-2xl" />
                  <div className="text-left">
                    <p>Physical Appointment</p>
                    <p>dr@gmail.com</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-green btn text-white hover:text-green">
                  Already a patient?
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="shadow-md w-11/12 md:w-9/12 mx-auto -mt-32 sm:-mt-16 bg-white p-10">
        <div className="lg:flex items-start justify-between">
          <div className="space-y-2 lg:mb-0 mb-10">
            <div className="flex items-center gap-5 text-2xl text-brown font-medium">
              <RiPhoneLine className="" />
              <p>Contacts</p>
            </div>
            <p className="sm:text-lg text-green font-medium">
              DR LEVI Jean François
            </p>
            <p className="sm:text-lg text-gray font-thin">
              jean-francois.levi@ahparis.org
            </p>
            <p className="sm:text-lg text-gray font-thin">opd2@ahparis.org</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-5 text-2xl text-brown font-medium">
              <GiDoctorFace className="" />
              <p>Specialties</p>
            </div>
            <p className="sm:text-lg text-green font-medium">General Surgery</p>
            <p className="sm:text-lg text-green font-medium">
              Cardiovascular and Thoracic Surgery
            </p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="grid grid-cols-2">
          <p className="sm:text-2xl text-brown font-medium">Language</p>
          <div className="sm:text-lg text-green font-medium">
            <p>English</p>
            <p>Bangla</p>
          </div>
        </div>
      </section>
      <section className="w-11/12 mx-auto my-10">
        <p className="sm:text-xl text-brown font-medium">
          CONSULTATION HOURS FOR
        </p>

        <div className="my-5">
          <p
            onClick={() =>
              setTelemedicineAppointmentVisible(!telemedicineAppointmentVisible)
            }
            className="sm:text-lg text-green font-medium flex items-center gap-5 cursor-pointer"
          >
            For Telemedicine
            {telemedicineAppointmentVisible ? <RxEyeOpen /> : <RxEyeNone />}
          </p>
          <div
            className={`${
              telemedicineAppointmentVisible ? "" : "hidden"
            } grid grid-cols-1 md:grid-cols-2 gap-10 lg:hidden`}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <div key={i} className="shadow-md p-5 border-2 border-soft-gray text-gray font-semibold">
                <p className="">Date: 15th AUG</p>
                <p>Day: Sun</p>

                <div className="">
                  <p>Time:</p>
                  <div className="grid grid-cols-2 gap-5">
                    <p className="bg-gray text-white p-1 rounded-sm">
                      10:00 - 10:30
                    </p>
                    <p className="bg-gray text-white p-1 rounded-sm">
                      10:30 - 11:00
                    </p>
                    <p className="bg-gray text-white p-1 rounded-sm">
                      10:00 - 10:30
                    </p>
                    <p className="bg-gray text-white p-1 rounded-sm">
                      10:30 - 11:00
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <table className="w-full">
              <thead className="bg-light-gray border-b-2 border-gray">
                <tr className="">
                  <th className="p-3 text-sm font-semibold tracking-wide text-left flex items-center gap-2">
                    Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Day
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody
                className={`${telemedicineAppointmentVisible ? "" : "hidden"}`}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <tr
                    key={i}
                    className={`${
                      i === 0 || i % 2 === 0 ? "bg-soft-gray" : ""
                    }`}
                  >
                    <td className="p-3 text-sm text-gray">15th AUG</td>
                    <td className="p-3 text-sm text-gray">SUN</td>
                    <td className="p-3 text-sm text-gray flex items-center justify-between gap-5">
                      <p className="bg-gray text-white p-1 rounded-sm">
                        10:00 - 10:30
                      </p>
                      <p className="bg-gray text-white p-1 rounded-sm">
                        10:30 - 11:00
                      </p>
                      <p className="bg-gray text-white p-1 rounded-sm">
                        10:00 - 10:30
                      </p>
                      <p className="bg-gray text-white p-1 rounded-sm">
                        10:30 - 11:00
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p
            onClick={() =>
              setPhysicalAppointmentVisible(!physicalAppointmentVisible)
            }
            className="sm:text-lg text-green font-medium cursor-pointer flex items-center gap-5"
          >
            Physical Appointment
            {physicalAppointmentVisible ? <RxEyeOpen /> : <RxEyeNone />}
          </p>
          <div
            className={`${
              physicalAppointmentVisible ? "" : "hidden"
            } grid grid-cols-1 md:grid-cols-2 gap-10 lg:hidden`}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <div key={i} className="shadow-md p-5 border-2 border-soft-gray text-gray font-semibold">
                <p>Date: 15th AUG</p>
                <p>Day: Sun</p>
                <p>Bangladesh Hospital: 09:00 - 12:00</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <table className="w-full">
              <thead className="bg-light-gray border-b-2 border-gray">
                <tr className="cursor-pointer">
                  <th className="p-3 text-sm font-semibold tracking-wide text-left flex items-center gap-2">
                    Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Day
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Bangladesh Hospital
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Sheikh Mujib Medical Hospital
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Bangladesh Hospital
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Sheikh Mujib Medical Hospital
                  </th>
                </tr>
              </thead>
              <tbody
                className={`${physicalAppointmentVisible ? "" : "hidden"}`}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <tr
                    key={i}
                    className={`${
                      i === 0 || i % 2 === 0 ? "bg-[#f2f3f4]" : ""
                    }`}
                  >
                    <td className="p-3 text-sm text-gray">15th AUG</td>
                    <td className="p-3 text-sm text-gray">Sun</td>
                    <td className="p-3 text-sm text-gray">09:00 - 12:00</td>
                    <td className="p-3 text-sm text-gray">--</td>
                    <td className="p-3 text-sm text-gray">09:00 - 12:00</td>
                    <td className="p-3 text-sm text-gray">--</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-11/12 mx-auto my-10">
        <p className="sm:text-xl text-brown font-medium">CLINICAL EXPERTISE & SERVICES OFFERED:</p>
        <ul>
            {
              [0,1,2,3,4].map((item,i)=><li key={i} className="font-semibold text-gray text-sm flex items-center gap-2"><FaNotesMedical className="text-green"/>Ear Tubes (Grommets)</li>)  
            }
        </ul>
      </section>
      <section className="w-11/12 mx-auto my-10">
        <p className="sm:text-xl text-brown font-medium">PROFESSIONAL EXPERIENCE:</p>
        <ul>
            {
              [0,1,2,3,4].map((item,i)=><li key={i} className="font-semibold text-gray text-sm flex items-center gap-2"><TbCertificate className="text-green"/>ENT Consultant , Albertus- Centre, Germany</li>)  
            }
        </ul>
      </section>
    </div>
  );
};

export default DoctorDetails;
