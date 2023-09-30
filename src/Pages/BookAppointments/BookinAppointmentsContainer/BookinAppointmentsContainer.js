import React, { useState } from "react";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import TelemedicineAppointment from "../TelemedicineAppointment/TelemedicineAppointment";
import PhysicalAppointment from "../PhysicalAppointment/PhysicalAppointment";


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
      <section className="flex border-b-2 border-b-light-gray items-center mt-10">
        <p
          onClick={handleTelemedicineAppointment}
          className={`cursor-pointer px-14 py-2 text-white
            ${telemedicineAppointment ? "bg-gray " : "bg-light-gray"}`}
        >
          Telemedicine Appointment
        </p>
        <p
          onClick={handleBookAppointment}
          className={`cursor-pointer px-14 py-2 text-white
            ${!telemedicineAppointment ? "bg-gray " : "bg-light-gray "} `}
        >
          Book Appointment
        </p>
      </section>
      {telemedicineAppointment ? <TelemedicineAppointment /> : <PhysicalAppointment />}
    </div>
  );
};

export default BookinAppointmentsContainer;
