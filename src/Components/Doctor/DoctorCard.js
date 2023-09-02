import React, { useState } from "react";
import doctor from "../../Assests/OurDoctors/6.jpg";
import logo from "../../Assests/Logo/MEDCO1.png";
import { VscCallOutgoing, VscCalendar } from "react-icons/vsc";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DoctorCard.css";
import AvailableDays from "../DatePicker/DatePicker";

const DoctorCard = () => {
  const [seeAppointment, setSeeAppointment] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const availableTimes = [
    {
      day: "FRI",
      time: "10:00 - 20:00",
      location: "Medical Clinics (Building A 15B)",
    },
    {
      day: "SAT",
      time: "14:00 - 20:00",
      location: "Medical Clinics (Building A 15B)",
    },
    {
      day: "MON",
      time: "16:00 - 20:00",
      location: "Medical Clinics (Building A 15B)",
    },

    {
      day: "TUE",
      time: "10:00 - 20:00",
      location: "Medical Clinics (Building A 15B)",
    },
  ];

  return (
    <div className="shadow-md w-64 md:w-56 lg:w-64 mt-10 border-2 border-light-brown rounded-md">
        <div className="flex justify-center items-center gap-3">
            <img className="w-7 h-7 object-contain my-4" src={logo} alt="" />
            <p className="text-sm text-green font-thin">Medco</p>
        </div>
        <img
            className="w-32 h-32 rounded-full object-cover object-top mx-auto  dc-img"
            src={doctor}
            alt=""
        />
        <div className="p-2 text-center">
            <h1 className="font-semibold text-lg text-brown">Maria Julia</h1>
            <p className="text-green font-medium text-sm">Medicine Specialist</p>
            <p className="text-sm font-light">ID: 20232108</p>
        </div>
        <div className="p-3 bg-green text-center text-white cursor-pointer">
            <p>View Profile</p>
        </div>
        <div className="flex justify-between items-start gap-5 pt-4 px-4 text-xl text-green relative mt-2 ">
            <div className=" group">
                <a className="" href="tel:+880151515151">
                    <VscCallOutgoing className="cursor-pointer group" />
                </a>

                <p className="opacity-0 group-hover:opacity-100 duration-300 absolute text-xs top-0 z-20">
                    Call for appointment
                </p>
            </div>
            <div className=" group">
                <Link>
                    <FaRegComments className="cursor-pointer" />
                </Link>

                <span className="opacity-0 group-hover:opacity-100 duration-300 absolute text-xs z-20 top-0">
                    send any queries
                </span>
            </div>
            <div className=" group">
                <VscCalendar
                    onClick={() => setSeeAppointment(!seeAppointment)}
                    className="cursor-pointer"
                />
                <AvailableDays selected={selectedDate} setSelectedDate={setSelectedDate} availableTimes={availableTimes} />
                <span className="opacity-0 group-hover:opacity-100 duration-300 absolute right-0 text-xs z-20 top-0">
                    Book Appointment
                </span>
            </div>
        </div>
        {/* {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</p>
      )} */}
    </div>
  );
};

export default DoctorCard;
