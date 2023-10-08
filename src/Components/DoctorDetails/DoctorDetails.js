import React from "react";
import doctorImage from "../../Assests/OurDoctors/1.jpg";
import { FcSurvey, FcVideoCall, FcCallback, FcComments } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const DoctorDetails = ({setDoctorDetails}) => {
    const [makeAppointment,setMakeAppointment] = useState(false)
  return (
    <div className="z-[10000] bg-white border-2 h-screen overflow-auto w-9/12 ml-auto ">
        <p className="py-2"  onClick={()=>setDoctorDetails(false)}>X</p>
      <section>
        <div className="flex items-center justify-between bg-brown p-20">
          <img
            className="w-72 h-72 rounded-full object-cover object-bottom"
            src={doctorImage}
            alt="doctorimage"
          />
          <div className="space-y-3">
            <p className=" uppercase text-white text-3xl font-semibold">
              Dr. PR ALLA PHILIPPE
            </p>
            <p className="font-medium text-white text-lg">Neurologie</p>
            <p className="text-gray">Head of Department</p>
            <div className="text-white">
              <p className="mb-2">Availabel for</p>
              <ul className="grid grid-cols-2 gap-5 text-xs" >
                <li  className="flex items-center justify-between gap-2" ><FcVideoCall/>Video Appointment</li>
                <li className="flex items-center justify-between gap-2" ><FcCallback/>Audio Appointment</li>
                <li className="flex items-center justify-between gap-2" ><FcComments/>Chat Appointment</li>
                <li className="flex items-center justify-between gap-2" ><FcSurvey/>Physical Appointment</li>
              </ul>
            </div>
            <button onClick={()=>setMakeAppointment(!makeAppointment)} className="bg-green hover:text-green font-medium btn text-white px-10 py-2 rounded-md flex items-center justify-between gap-2 relative">Make an appointment {!makeAppointment?<BsArrowRight/> : <AiOutlineClose/>}</button>
          </div>
        </div>
    {makeAppointment && <div className="absolute bg-white lg:bottom-48 2xl:bottom-44 bottom-[180px] right-10 shadow-2xl">
          <p className="uppercase bg-light-gray px-2">make an appointment with pr alla philippe</p>
          <div className="border-b-2  border-b-light-gray py-2 px-4 text-brown">
            <p>By Phone</p>
            <p>01515332</p>
          </div>
          <div className="border-b-2 border-b-light-gray py-2 px-4 text-brown">
            <p>By Email</p>
            <p>dr@gmail.com</p>
          </div>
          <div className="border-b-2 border-b-light-gray py-2 px-4 text-brown">
            <p>Telemedicine Appointment</p>
            <p>01515332</p>
          </div>
          <div className="border-b-2 border-b-light-gray py-2 px-4 text-brown">
            <p>Physical Appointment</p>
            <p>dr@gmail.com</p>
          </div>
          <button>Already a patient?</button>
        </div>}
        
      </section>
      <section>
        <div>
          <p>Contacts</p>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetails;
