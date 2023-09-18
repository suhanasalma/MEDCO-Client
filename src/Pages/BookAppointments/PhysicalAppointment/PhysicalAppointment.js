import React from "react";
import "./PhysicalAppointment.css";
import DepartmentSelect from "../DepartmentSelect/DepartmentSelect";
import { useState } from "react";
import { availableSlots, departments } from "../DepartmentSelect/departments";
import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";

import SelectDoctorDaysModal from "../../../Components/ReactDayPicker/SelectDoctorDaysModal";

const PhysicalAppointment = () => {
  const [selectDepartment, setSelectDepartment] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [openModal, setOpenModal] =useState(false)
  const handleSelectToggle = (index) => {
    setOpenSelectIndex(index === openSelectIndex ? null : index);
  };
  return (
    <div>
      <div className="step text-xs">
        <div className="step__item" id="divStep1">
          <p className="step__item__text">Appointment Details</p>
          <p className="step__item__number">1</p>
        </div>
        <div className="step__item " id="divStep2">
          <p className="step__item__text">Patient's information</p>
          <p className="step__item__number active">2</p>
        </div>
        <div className="step__item" id="divStep3">
          <p className="step__item__text">Additional Services</p>
          <p className="step__item__number">3</p>
        </div>
      </div>
      <section className="lg:w-8/12 ">
        <div className="sm:flex items-center gap-20 text-brown font-medium text-lg">
          <div>
            <label className="flex items-center">
              <input
                className="radio-input"
                value="Recommend a doctor"
                type="radio"
                name="choose_doctor"
              />

              <span className="radio-outer-circle">
                <span className="radio-inner-circle"></span>
              </span>
              <span className="radio-label">Recommend a doctor</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                className="radio-input"
                value="I will choose my doctor"
                type="radio"
                name="choose_doctor"
              />

              <span className="radio-outer-circle">
                <span className="radio-inner-circle"></span>
              </span>
              <span className="radio-label">I will choose my doctor</span>
            </label>
          </div>
        </div>
        <div className="sm:w-8/12 my-8">
          <p className="text-sm text-brown font-medium">Specialties</p>
          <DepartmentSelect
            setSelectDepartment={setSelectDepartment}
            setOpenSelectIndex={setOpenSelectIndex}
            isOpen={openSelectIndex === 0}
            toggleSelect={() => handleSelectToggle(0)}
            selectorDetails={departments}
          />
        </div>
        <div className="sm:w-8/12 my-8">
          <p className="text-sm text-brown font-medium">
            Search the doctor's name or surname
          </p>
          <DepartmentSelect
            setSelectDepartment={setSelectDepartment}
            setOpenSelectIndex={setOpenSelectIndex}
            isOpen={openSelectIndex === 1}
            toggleSelect={() => handleSelectToggle(1)}
            selectorDetails={departments}
          />
          {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={departments?.options}
        isClearable
      /> */}
        </div>
        <div className="sm:flex items-center gap-20 text-brown font-medium text-lg">
          <div>
            <label className="flex items-center">
              <input
                className="radio-input"
                value="Recommend a doctor"
                type="radio"
                name="choose_date"
              />

              <span className="radio-outer-circle">
                <span className="radio-inner-circle"></span>
              </span>
              <span className="radio-label">Earliest date available</span>
            </label>
          </div>
          <div  onClick={() => setOpenModal(true)} >
            <label className="flex items-center">
              <input
                className="radio-input"
                value="I will choose my doctor"
                type="radio"
                name="choose_date"
              />

              <span className="radio-outer-circle">
                <span className="radio-inner-circle"></span>
              </span>
              <span  className="radio-label"> Choose a preferred date</span>
            </label>
          </div>
        </div>
        <div>
        {openModal &&
            <SelectDoctorDaysModal openModal={openModal} setOpenModal={setOpenModal} availableSlots={availableSlots} />

        }
      {/* <AnimatePresence>
        {openModal && (
          <motion.div
            key="advanced-search"
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="advanced-search"
          >
            <SelectDoctorDaysModal openModal={openModal} setOpenModal={setOpenModal} availableSlots={availableSlots} />
          </motion.div>
        )}
      </AnimatePresence> */}
        </div>
      </section>
    </div>
  );
};

export default PhysicalAppointment;
