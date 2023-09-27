import React from "react";
import "./PhysicalAppointment.css";
import DepartmentSelect from "../DepartmentSelect/DepartmentSelect";
import { useState } from "react";
import { availableSlots, departments } from "../DepartmentSelect/departments";
import DoctorSlotsModal from "../../../Components/ReactDayPicker/DoctorSlotsModal";
import SelectOptions from "../../../Components/SelectOptions/SelectOptions";
import { TbCircleCheckFilled, TbCalendar } from "react-icons/tb";
import FileUpload from "./FileUpload";

const PhysicalAppointment = () => {
  const [selectDepartment, setSelectDepartment] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [selectAppointmentDate, setSelectAppointmentDate] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [bookingSummery, setBookingSummery] = useState(false);
  const [textLength, setTextLength] = useState(0);

  const handleSelectToggle = (index) => {
    setOpenSelectIndex(index === openSelectIndex ? null : index);
  };
  const handleFileInput = (e) => {
    let file = e.target.files[0];
    console.log("file", file);
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
      <section className="lg:w-8/12 space-y-5 border-2">
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
        <div className="sm:w-8/12 ">
          <p className="text-sm text-brown font-medium">Specialties</p>
          <SelectOptions options={departments.options} />
          {/* <DepartmentSelect
            setSelectDepartment={setSelectDepartment}
            setOpenSelectIndex={setOpenSelectIndex}
            isOpen={openSelectIndex === 0}
            toggleSelect={() => handleSelectToggle(0)}
            selectorDetails={departments}
          /> */}
        </div>
        <div className="sm:w-8/12">
          <p className="text-sm text-brown font-medium">
            Search the doctor's name or surname
          </p>
          <SelectOptions options={departments.options} />
          {/* <DepartmentSelect
            setSelectDepartment={setSelectDepartment}
            setOpenSelectIndex={setOpenSelectIndex}
            isOpen={openSelectIndex === 1}
            toggleSelect={() => handleSelectToggle(1)}
            selectorDetails={departments}
          /> */}
        </div>
        <div className="sm:flex items-start gap-20 text-brown font-medium text-lg ">
          <div>
            <label
              onClick={() => setSelectAppointmentDate(null)}
              className="flex items-center"
            >
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
          <div className="" onClick={() => setOpenModal(true)}>
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
              <span className="radio-label"> Choose a preferred date</span>
            </label>
            {selectAppointmentDate && (
              <div className="flex items-center gap-2 border-2 border-light-brown rounded-md text-green font-semibold shadow-sm">
                <TbCalendar className="text-2xl" />{" "}
                <p>
                  {selectAppointmentDate[0]} <br />
                  {selectAppointmentDate[1]}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="sm:w-8/12">
          <p className="text-sm text-brown font-medium ">
            Medical concern or request *
          </p>
          <div className="">
            <textarea
              onInput={(e) => setTextLength(e.target.value.length)}
              maxLength="2000"
              placeholder="ex: Rash, Genral checkup"
              className="border-2 border-light-gray block w-full text-soft_black placeholder:text-sm"
              cols="80"
            />
            <div className="text-right">
              <span className=" text-light-gray">{textLength}/2000</span>
            </div>
          </div>
        </div>
        <div className="sm:w-8/12">
          <p className="text-sm text-brown font-medium ">
            Attach files (.jpg, .png, .pdf, .jpeg -less than 5 MB in size)
          </p>
          <div className="-gray py-1">
            <label
              onInput={(e) => handleFileInput(e)}
              className="border-2 border-light-gray py-2 font-semibold text-brown"
            >
              Choose file...
              <input
                className="opacity-0"
                type="file"
                accept="image/png, image/jpeg, .pdf, .docx, image/jpg,"
              />
              <span className="bg-light-gray p-2">browse</span>
            </label>
          </div>
        </div>
        <FileUpload/>
        <div>
          {openModal && (
            <DoctorSlotsModal
              buttonName="Select Date & Time"
              bookingSummery={bookingSummery}
              setSelectAppointmentDate={setSelectAppointmentDate}
              openModal={openModal}
              setOpenModal={setOpenModal}
              availableSlots={availableSlots}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default PhysicalAppointment;
