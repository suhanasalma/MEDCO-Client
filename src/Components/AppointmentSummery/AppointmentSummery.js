import React, { useState,useRef } from "react";
import { VscChevronLeft ,VscTrash} from "react-icons/vsc";
import image from "../../Assests/OurDoctors/1.jpg";
import acne from "../../Assests/OurDoctors/acne.jpg";
import { TbCalendar } from "react-icons/tb";
import selectImage from "../../Assests/Logo/selectimages.png";


import DoctorMeetLinkModal from "../CompleteAppointment/DoctorMeetLinkModal";

const AppointmentSummery = ({ setAppointmentSummeryPage}) => {
    const fileInputRef = useRef(null);
    const [openModal,setOpenModal] = useState(false)
    const [editPersonalInfo,setEditPersonalInfo] = useState(false)
  let customerDetails = {
    Name: "Suhana Salma",
    contact: "0152365896",
    Email: "suhanasalma@gmil.com",
    Birthday:"11/27/97",
    Gender:"Female",
    image:
      "https://i.pinimg.com/originals/d5/91/08/d591082ea11eb8e2cf089e03d39fe851.jpg",
  };
  const [selectedImage, setSelectedImage] = useState(customerDetails.image);
  const displaySelectedImage = (e) => {
    const files = e.target.files;
    if (files && files[0] && files[0].size < 240000) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      window.prompt("file size is bigger then 3kb");
      fileInputRef.current.value = "";
      setSelectedImage(selectImage);
    }
  };
  const deleteImage = () => {
    setSelectedImage(selectImage);
    fileInputRef.current.value = "";
  };

  return (
    <div 
    // className="w-10/12 sm:w-8/12 lg:w-7/12 mx-auto space-y-10 mt-5"
    >
      <div
        onClick={() =>setAppointmentSummeryPage(false)}
        className="flex items-center font-normal text-gray cursor-pointer hover:underline"
      >
        <VscChevronLeft className="text-2xl" />
        <p>Back</p>
      </div>
      <hr className="text-brown my-5" />
      <div className="">
        <p>Review Appointment</p>
        <p className="text-sm text-gray font-normal">
          Please review to confirm your appointment details below.
        </p>
        <div className="flex items-center gap-5 my-8">
          <img
            className=" w-20 h-32 rounded-lg object-cover"
            src={image}
            alt="doctor_image"
          />
          <div className="text-sm space-y-1">
            <li className="text-brown font-bold">Ophthalmology</li>
            <p>Dr. Sombat Srisuwanporn</p>
            <p className="text-xs text-gray font-semibold">
              Ophthalmology, Ophthalmology - Cataract , Ophthalmology -
              Refractive Surgery
            </p>
          </div>
        </div>
        <div className="">
          <p className="mb-2">What is your condition or treatment needed?</p>

          <div className="w-full p-5 bg-light-green ">
            <p className="mb-5 text-gray">Acne</p>
            <p>
              Attached file
              <span className="text-gray text-sm">(Optional)</span>
            </p>
            <img
              alt="select"
              id="selected-image"
              className="w-52 rounded-md"
              src={acne}
            />
          </div>
        </div>
        <div className="my-5">
          <p className="mb-2">Your selected date and time</p>
          <div className="flex items-center gap-2  border-y-2 border-r-2  border-l-8 border-l-brown border-light-gray px-4 py-1 rounded-lg calender">
            <TbCalendar className="text-2xl text-brown" />
            <p>
              30 Sept 2023 <br />
              10:30
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-5">
          <p className="mb-2">Your Details</p>
          <button onClick={()=>setEditPersonalInfo(!editPersonalInfo)} className="mb-2 text-xs bg-green px-4 py-1 rounded-sm text-white cursor-pointer">{editPersonalInfo?"Save":"Edit Details"}</button>
          </div>

          <div className="flex items-start gap-10 text-wrap">
          {editPersonalInfo?<div className="relative">
                <div className="image-input w-32">
                  <label
                    htmlFor="upload-image"
                    className="image-input-label mx-auto"
                  >
                    <img
                      alt="select"
                      id="selected-image"
                      className={`${selectedImage === selectImage?"w-32  ":"w-32"} h-full object-contain selected-image`}
                      src={selectedImage}
                    />
                  </label>
                  <input
                    accept=".jpg, .jpeg, .png"
                    ref={fileInputRef}
                    type="file"
                    id="upload-image"
                    className="image-input-field"
                    onChange={(e) => displaySelectedImage(e)}
                  />
                </div>

                <VscTrash
                  onClick={deleteImage}
                  className="absolute -top-3 left-0 font-bold text-white w-6 h-6  border-2 rounded-full  bg-gray flex items-center justify-center"
                />
              </div>: <img
              src={customerDetails.image}
              alt="customer"
              className="w-32 rounded-sm outline-double outline-brown"
            />}
           
            <div className=" space-y-2">
              {Object.keys(customerDetails)
                .filter((detail) => detail !== "image")
                .map((detail,i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-2  items-center sm:break-keep break-all">
                    <p>{detail} :</p>
                    {editPersonalInfo?<input placeholder={detail} defaultValue= {customerDetails[detail]} className="text-brown font-normal outline-none border-[1px] border-light-brown px-2"/>:
                    <p className="text-brown font-normal ">
                      {customerDetails[detail]}
                    </p>}
               
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div onClick={()=>setOpenModal(true)} className="bg-green text-white p-2 text-center rounded-lg cursor-pointer mt-10">
        <p>Book Appointment</p>
      </div>
      {openModal &&<DoctorMeetLinkModal setAppointmentSummeryPage={setAppointmentSummeryPage} openModal={openModal} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default AppointmentSummery;
