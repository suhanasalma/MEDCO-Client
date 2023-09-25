import React, { useState } from "react";
import doctor from "../../Assests/OurDoctors/6.jpg";
import logo from "../../Assests/Logo/MEDCO1.png";
import { VscCallOutgoing, VscCalendar } from "react-icons/vsc";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./DoctorCard.module.css";
import DoctorSlotsModal from "../ReactDayPicker/DoctorSlotsModal";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
    useQuery,
  } from 'react-query'
import AppointmentType from "./AppointmentType";

const DoctorCard = () => {
  const [seeAppointment, setSeeAppointment] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointType, setAppointType] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [bookingSummery,setBookingSummery] = useState(true)

  const {data = [],refetch,isError,isFetching} = useQuery({
    queryKey:[""],
    queryFn: async () =>
    fetch(`/availableSlots.json`).then((res) =>
        res.json()
       )
  })

  return (
    <div className={`shadow-md w-64 md:w-56 lg:w-64 mt-10 ${appointType? "h-fit" : "h-96"} border-2 border-light-brown rounded-md`}>
        <div className="flex justify-center items-center gap-3">
            <img className="w-7 h-7 object-contain my-4" src={logo} alt="" />
            <p className="text-sm text-green font-thin">Medco</p>
        </div>
        <img
            className={`w-32 h-32 rounded-full object-cover object-top mx-auto  ${styles.dcImg}`}
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
        <div className="flex justify-between items-start gap-5 pt-4 px-4 text-xl text-green relative mt-2 py-5">
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

                <span className="opacity-0 group-hover:opacity-100 duration-300 absolute text-xs top-0 z-20">
                    send any queries
                </span>
            </div>
            <div className=" group">
                <VscCalendar
                    onClick={() => setAppointType(!appointType)}
                    className="cursor-pointer"
                />
                <span 
                className="opacity-0 group-hover:opacity-100 duration-300 absolute right-0 text-xs z-20 top-0"
                >
                    Book Appointment
                </span>
            </div>
        </div>
       <div>
       <AnimatePresence>
        {appointType && (
          <motion.div
            key="appointment_type"
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{  opacity: 0, height: 0 ,overflow: "hidden" }}
            transition={{ duration: 0.3 }}
          >
           <AppointmentType setOpenModal={setOpenModal} />
          </motion.div>
        )}
      </AnimatePresence>
       {openModal &&
        <DoctorSlotsModal buttonName = "Book Appointment" bookingSummery={bookingSummery} setSelectAppointmentDate={setSelectedDate} openModal={openModal} setOpenModal={setOpenModal} availableSlots={data.availableSlots}/>
       }
      
       </div>
       
    </div>
  );
};

export default DoctorCard;
