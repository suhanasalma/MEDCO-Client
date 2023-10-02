import React from "react";
import "./PhysicalAppointment.css";
import { useState } from "react";
import AppointmentDetails from "./AppointmentDetails";
import PatientInformation from "./PatientInformation";
import AppointmentSummery from "../../../Components/AppointmentSummery/AppointmentSummery";

const PhysicalAppointment = () => {
  const [selectDepartment, setSelectDepartment] = useState("");
  const [showDoctor, setShowDoctor] = useState(false);
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [selectAppointmentDate, setSelectAppointmentDate] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [bookingSummery, setBookingSummery] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [recommendDoctor, setRecommendDoctor] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const doctorSchedule = [
    {
      day: "MON",
      time: "13:00 - 16:00",
      location: "Spine Institute / Pain Clinic (Building A 20A)",
    },
    {
      day: "TUE",
      time: "13:00 - 16:00",
      location: "Spine Institute / Pain Clinic (Building A 20A)",
    },
  ];

  const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  console.log("currentPage", currentPage);

  return (
    <section className="shadow-sm rounded-md p-4 ">
      <div className="sm:w-10/12 lg:w-11/12 xl:w-10/12 mx-auto ">
        <div className="step text-xs text-green font-medium">
          <div className="step__item" id="divStep1">
            <p className="step__item__text">Appointment Details</p>
            <p
              className={`step__item__number ${currentPage === 1 && "active"} `}
            >
              1
            </p>
          </div>
          <div className="step__item " id="divStep2">
            <p className="step__item__text">Patient's information</p>
            <p
              className={`step__item__number ${currentPage === 2 && "active"} `}
            >
              2
            </p>
          </div>
          <div className="step__item" id="divStep3">
            <p className="step__item__text">Additional Services</p>
            <p
              className={`step__item__number ${currentPage === 3 && "active"} `}
            >
              3
            </p>
          </div>
        </div>

        {currentPage === 1 && (
          <AppointmentDetails
            setShowDoctor={setShowDoctor}
            showDoctor={showDoctor}
            setRecommendDoctor={setRecommendDoctor}
            recommendDoctor={recommendDoctor}
            setSelectAppointmentDate={setSelectAppointmentDate}
            setOpenModal={setOpenModal}
            selectAppointmentDate={selectAppointmentDate}
            setTextLength={setTextLength}
            doctorSchedule={doctorSchedule}
            openModal={openModal}
            bookingSummery={bookingSummery}
            textLength={textLength}
          />
        )}
        {currentPage === 2 && <PatientInformation />}
        {currentPage === 3 && <AppointmentSummery/>}
      </div>
      <div className="text-center flex items-center justify-center gap-10 mt-10">
        {currentPage !== 1 && (
          <button
            onClick={handlePrevPage}
            className="bg-green text-white px-4 py-1 w-32 rounded-md"
          >
            Back
          </button>
        )}
        { currentPage !== 3 &&<button
          onClick={handleNextPage}
          className="bg-green text-white px-4 py-1 w-32 rounded-md"
        >
          Next
        </button>}
      </div>
    </section>
  );
};

export default PhysicalAppointment;
