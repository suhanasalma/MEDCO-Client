import React from "react";
import SelectOptions from "../../../Components/SelectOptions/SelectOptions";
import { useState } from "react";
import FileUpload from "../../../Components/FileUpload/FileUpload";

const MedcoContact = () => {
  const [doctorInquery, setDoctorInquery] = useState(false);
  let inquiryTypse = [
    { value: "general", label: "General Inquiry" },
    { value: "contact_my_doctor", label: "Contact My Doctor" },
  ];
  return (
    <div className="space-y-5 my-5">
      <div>
        <p className="text-brown">Type of Inquiry *</p>
        <SelectOptions options={inquiryTypse} />
      </div>
      <div className="space-y-1">
        <p className="text-brown">Hospital Name</p>
        <SelectOptions options={inquiryTypse} />
      </div>
      <div className="space-y-1">
        <p className="text-brown"> Search the doctor's name or surname *</p>
        <SelectOptions options={inquiryTypse} />
      </div>
      <div className="space-y-1">
        <p className="text-brown">Condition or treatment of interest</p>
        <SelectOptions options={inquiryTypse} />
      </div>
      <div className="space-y-1">
        <p className="text-brown">Upload Files</p>
        <FileUpload/>
      </div>
      
      <div className="space-y-1">
        <p className="text-brown">Your Question *</p>
        <textarea
          placeholder=""
          className="border-[1px] border-light-gray block w-full text-soft_black placeholder:text-md rounded-sm outline-none"
          cols="80"
        />
      </div>
      <div className="space-y-1">
        <p className="text-brown">First Name *</p>
        <input
          type="text"
          placeholder=""
          className="border-[1px] border-light-gray block w-full text-soft_black placeholder:text-md rounded-sm p-2 outline-none"
        />
      </div>
      <div className="space-y-1">
        <p className="text-brown">Last Name *</p>
        <input
          type="text"
          placeholder=""
          className="border-[1px] border-light-gray block w-full text-soft_black placeholder:text-md rounded-sm p-2 outline-none"
        />
      </div>
      <div className="space-y-1">
        <p className="text-brown">Email *</p>
        <input
          type="email"
          placeholder=""
          className="border-[1px] border-light-gray block w-full text-soft_black placeholder:text-md rounded-sm p-2 outline-none"
        />
      </div>
      <div className="space-y-1">
        <p className="text-brown">Phone No *</p>
        <input
          type="tel"
          placeholder=""
          className="border-[1px] border-light-gray block w-full text-soft_black placeholder:text-md rounded-sm p-2 outline-none"
        />
      </div>
      <div className="">
        <p className="text-brown">Date of birth</p>
        <input
          className="border-2 border-[#F9F6EE] bg-[#F9F6EE] w-full px-4 py-1 rounded-sm text-brown p-2 outline-none"
          type="date"
        />
      </div>
      <div className="">
        <p className="text-brown">Gender</p>
        <SelectOptions options={inquiryTypse} />
      </div>
      <div className="text-center">
      <button className="text-xs bg-green btn hover:text-green w-52 md:px-6 border-2 border-green py-2 rounded-full text-white font-medium">
            Send Inquiry
          </button>
      </div>
    </div>
  );
};

export default MedcoContact;
