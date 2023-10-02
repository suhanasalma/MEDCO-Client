import React from "react";
import "./PhysicalAppointment.css";
import { useState } from "react";
import { availableSlots, departments } from "../DepartmentSelect/departments";
import DoctorSlotsModal from "../../../Components/ReactDayPicker/DoctorSlotsModal";
import SelectOptions from "../../../Components/SelectOptions/SelectOptions";
import { TbCircleCheckFilled, TbCalendar } from "react-icons/tb";
import FileUpload from "./FileUpload";
import doctor from "../../../Assests/OurDoctors/6.jpg";
import logo from "../../../Assests/Logo/MEDCO1.png";
import { AiFillClockCircle } from "react-icons/ai";
const AppointmentDetails = ({setShowDoctor,showDoctor,setRecommendDoctor,recommendDoctor,setSelectAppointmentDate,setOpenModal,selectAppointmentDate,setTextLength,doctorSchedule,openModal,bookingSummery,textLength}) => {
    return (
        <article className="lg:flex items-start justify-between gap-5">
          <section
            className={`space-y-5 lg:w-8/12
           
            `}
          >
            <div className="md:flex items-center gap-20 text-brown text-md">
              <div
                onClick={() => {
                  setShowDoctor(false);
                  setRecommendDoctor(true);
                }}
              >
                <label className="flex items-center">
                  <input
                    className="radio-input"
                    value="Recommend a doctor"
                    type="radio"
                    name="choose_doctor"
                    defaultChecked
                  />

                  <span className="radio-outer-circle">
                    <span className="radio-inner-circle"></span>
                  </span>
                  <span className="radio-label">Recommend a doctor</span>
                </label>
              </div>
              <div
                onClick={() => {
                  setShowDoctor(true);
                  setRecommendDoctor(false);
                }}
              >
                <label className="flex items-center">
                  <input
                    className="radio-input"
                    value="I will choose my doctor"
                    type="radio"
                    name="choose_doctor"
                    defaultChecked={showDoctor}
                  />

                  <span className="radio-outer-circle">
                    <span className="radio-inner-circle"></span>
                  </span>
                  <span className="radio-label">I will choose my doctor</span>
                </label>
              </div>
            </div>
            <div className="">
              <p className="text-md text-brown ">Specialties</p>
              <SelectOptions options={departments.options} />
            </div>
            {!recommendDoctor && (
              <div className="">
                <p className="text-md text-brown ">
                  Search the doctor's name or surname
                </p>
                <SelectOptions options={departments.options} />
              </div>
            )}
            <div className="md:flex items-start gap-20 text-brown  text-md ">
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
                    defaultChecked
                  />

                  <span className="radio-outer-circle">
                    <span className="radio-inner-circle"></span>
                  </span>
                  <span className="radio-label">Earliest date available</span>
                </label>
              </div>
              <div className="" onClick={() => setOpenModal(true)}>
                <label className="flex items-center ">
                  <input
                    className="radio-input"
                    value="I will choose my doctor"
                    type="radio"
                    name="choose_date"
                    defaultChecked={selectAppointmentDate}
                  />

                  <span className="radio-outer-circle">
                    <span className="radio-inner-circle"></span>
                  </span>
                  <span className="radio-label"> Choose a preferred date</span>
                </label>
              </div>
            </div>
            <div>
              {selectAppointmentDate && (
                <div className="md:flex items-center justify-between gap-5 text-green">
                  <div className="flex items-center gap-2 border-[1px] border-light-gray rounded-md flex-1  px-4 py-2">
                    
                    <TbCalendar className="text-2xl text-brown" />
                    <p className="text-gray font-normal">
                      Date:  
                      <span className="text-brown font-medium ml-3">
                          {selectAppointmentDate[0]}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 border-[1px] border-light-gray rounded-md flex-1  px-4 py-2">
                    
                    <AiFillClockCircle className="text-2xl text-brown" />
                    <p className="text-gray font-normal">
                      Time: 
                      <span className="ml-3 text-brown font-medium">
                        {selectAppointmentDate[1]}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <p className="text-md text-brown">Medical concern or request *</p>
              <div className="">
                <textarea
                  onInput={(e) => setTextLength(e.target.value.length)}
                  maxLength="2000"
                  placeholder="ex: Rash, Genral checkup"
                  className="border-[1px] border-light-gray block w-full text-soft_black placeholder:text-md rounded-sm"
                  cols="80"
                />
                <div className="text-right">
                  <span className=" text-light-gray">{textLength}/2000</span>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-md text-brown ">
                Attach files (.jpg, .png, .pdf, .jpeg -less than 5 MB in size)
              </p>
              <FileUpload />
            </div>
           
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

          <section
            className={`shadow-md  border-2 border-light-brown rounded-md text-center text-gray px-2 ${
              showDoctor ? "" : "hidden"
            }`}
          >
            <div className="flex justify-center items-center gap-3">
              <img className="w-7 h-7 object-contain my-4" src={logo} alt="" />
              <p className="text-sm text-green font-thin">Medco</p>
            </div>
            <img
              className={`w-32 h-32 rounded-full object-cover object-top mx-auto `}
              src={doctor}
              alt=""
            />
            <h1 className=" text-lg text-brown mt-4">Maria Julia</h1>

            <hr className="text-light-gray my-5" />
            <div className="p-2 text-center">
              <p className="text-sm text-green font-thin">Specialist</p>
              <p className="text-green  text-sm">
                Anesthesiology Anesthesiology - Pain Medicine
              </p>
              <p className="text-sm font-light">ID: 20232108</p>
            </div>
            <div className="p-3 bg-green text-center text-white cursor-pointer">
              <p>View Profile</p>
            </div>
            <div className="my-5">
              <p className="text-brown ">Doctor's Schedule</p>
              <div className="p-3 bg-green text-center text-white cursor-pointer flex justify-between items-center text-sm ">
                <p className="flex-1">DAY</p>
                <p className="flex-1">TIME</p>
                <p className="flex-1">LOCATION</p>
              </div>
              <div className="">
                {doctorSchedule.map((schedule,i) => (
                  <div key={i} className="flex justify-between items-center text-xs py-2">
                    <p className="flex-1">{schedule.day}</p>
                    <p className="flex-1">{schedule.time}</p>
                    <p className="flex-1">{schedule.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
    );
};

export default AppointmentDetails;