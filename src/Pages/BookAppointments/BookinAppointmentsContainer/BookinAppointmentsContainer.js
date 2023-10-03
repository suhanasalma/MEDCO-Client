import React, { useState } from "react";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import TelemedicineAppointment from "../TelemedicineAppointment/TelemedicineAppointment";
import PhysicalAppointment from "../PhysicalAppointment/PhysicalAppointment";
import { Link } from "react-router-dom";


const BookinAppointmentsContainer = () => {
  const [telemedicineAppointment, setTelemedicineAppointment] = useState(true);

  const handleTelemedicineAppointment = () => {
    setTelemedicineAppointment(true);
  };
  const handleBookAppointment = () => {
    setTelemedicineAppointment(false);
  };
  return (
    <div className="p-2 sm:w-10/12 mx-auto my-5">
      <BreadCrumbs
        breadcrumbs={[
          { title: "Home", link: "/home" },
          {
            title: "Book Appointment",
            active: true,
            link: "/BookinAppointments",
          },
        ]}
      />
      <div className="flex justify-between items-center border-b-2 border-b-light-gray  mt-10">
      <section className="flex items-center">
        <p
          onClick={handleTelemedicineAppointment}
          className={`cursor-pointer px-4 sm:px-14 py-2 text-white text-sm sm:text-base
            ${telemedicineAppointment ? "bg-gray " : "bg-light-gray"}`}
        >
          Telemedicine Appointment
        </p>
        <p
          onClick={handleBookAppointment}
          className={`cursor-pointer px-4 sm:px-14 py-2 text-white text-sm sm:text-base
            ${!telemedicineAppointment ? "bg-gray " : "bg-light-gray "} `}
        >
          Book Appointment
        </p>
      </section>
      <Link className="text-brown font-medium hover:underline text-sm sm:text-base">Cancel or Manage Appointments</Link>
      </div>
      {telemedicineAppointment ? <TelemedicineAppointment /> : <PhysicalAppointment />}
    </div>
  );
};

export default BookinAppointmentsContainer;
