import React from "react";
import "./PhysicalAppointment.css";
import DepartmentSelect from "../DepartmentSelect/DepartmentSelect";
import { useState } from "react";
import { availableSlots, departments } from "../DepartmentSelect/departments";
import DoctorSlotsModal from "../../../Components/ReactDayPicker/DoctorSlotsModal";
import SelectOptions from "../../../Components/SelectOptions/SelectOptions";
import { TbCircleCheckFilled, TbCalendar } from "react-icons/tb";
import FileUpload from "./FileUpload";
import doctor from "../../../Assests/OurDoctors/6.jpg";
import logo from "../../../Assests/Logo/MEDCO1.png";
import styles from "../../../Components/DoctorCards/DoctorCard.module.css";
import { AiFillClockCircle } from "react-icons/ai";
import AppointmentDetails from "./AppointmentDetails";
import PatientInformation from "./PatientInformation";

const PhysicalAppointment = () => {
  const [selectDepartment, setSelectDepartment] = useState("");
  const [showDoctor, setShowDoctor] = useState(false);
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [selectAppointmentDate, setSelectAppointmentDate] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [bookingSummery, setBookingSummery] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [recommendDoctor, setRecommendDoctor] = useState(true);

  const handleSelectToggle = (index) => {
    setOpenSelectIndex(index === openSelectIndex ? null : index);
  };
  const handleFileInput = (e) => {
    let file = e.target.files[0];
    console.log("file", file);
  };

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

  return (
    <section className="shadow-sm rounded-md p-4">
      <div className="sm:w-10/12 lg:w-11/12 xl:w-10/12 mx-auto ">
        <div className="step text-xs ">
          <div className="step__item" id="divStep1">
            <p className="step__item__text">Appointment Details</p>
            <p className="step__item__number active">1</p>
          </div>
          <div className="step__item " id="divStep2">
            <p className="step__item__text">Patient's information</p>
            <p className="step__item__number">2</p>
          </div>
          <div className="step__item" id="divStep3">
            <p className="step__item__text">Additional Services</p>
            <p className="step__item__number">3</p>
          </div>
        </div>

        {/* <AppointmentDetails setShowDoctor ={setShowDoctor}
            showDoctor ={showDoctor}
            setRecommendDoctor = {setRecommendDoctor}
            recommendDoctor={recommendDoctor}
            setSelectAppointmentDate={setSelectAppointmentDate}
            setOpenModal={setOpenModal}
            selectAppointmentDate={selectAppointmentDate}
            setTextLength={setTextLength}
            doctorSchedule={doctorSchedule}
            openModal={openModal}
            bookingSummery={bookingSummery}
            textLength={textLength}/> */}
        <PatientInformation />
      </div>
     <div className="text-center flex items-center justify-center gap-10 mt-10"> 
        <button className="bg-green text-white px-4 py-1 w-32 rounded-md">Back</button> 
        <button className="bg-green text-white px-4 py-1 w-32 rounded-md">Next</button>
     </div>
    </section>
  );
};

export default PhysicalAppointment;
