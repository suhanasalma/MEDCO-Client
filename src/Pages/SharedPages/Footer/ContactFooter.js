import React from "react";
import {
  FaPhoneAlt,
  FaPhoneVolume,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";

const ContactFooter = () => {
  return (
    <section className="lg:flex lg:justify-center gap-10 lg:text-center bg-brown text-white">
      <div className="border-b-2 lg:border-b-0 lg:border-x-2 border-white space-y-1 lg:flex lg:flex-col lg:items-center  p-5">
        <FaPhoneVolume className=" sm:text-3xl mb-2" />
        <p className="text-sm sm:text-base">
          1111 (Bangladesh Only) <br />
          <span className="text-xs sm:text-sm">
            Emergencies - Appointments - Ambulance
          </span>
          <br />
          <span className="text-xs">Available 24 hours every day</span>
        </p>
      </div>
      <div className="border-b-2 lg:border-b-0 lg:border-r-2  border-white space-y-1 lg:flex flex-col items-center  p-5">
        <FaPhoneAlt className="sm:text-3xl mb-2" />
        <p className="text-sm sm:text-base">
          Call Medco <br /> <span className="text-xs sm:text-sm">+880 1515151</span>
          <br />
          <span className="text-xs">Available 24 hours every day</span>
        </p>
      </div>
      <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-white space-y-3	flex lg:flex-col justify-between items-center gap-10 lg:gap-0 p-5">
      <div className="flex lg:flex-col lg:items-center gap-5">
      <FaEnvelopeOpen className="sm:text-3xl " />
        <p className="text-xs sm:text-base">Subscribe to our Newsletter</p>
      </div>
        <button className="text-xs sm:text-sm px-4 font-thin border-2 w-5/12 lg:w-full">SIGN UP NOW</button>
      </div>
      <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-white space-y-3	flex lg:flex-col justify-between items-center gap-10 lg:gap-0 p-5">
      <div className="flex lg:flex-col lg:items-center gap-5">
        <FaMapMarkerAlt className="sm:text-3xl" />
        <p className="text-xs sm:text-base">Map and Direction</p>
        </div>
        <button className="px-2 text-xs sm:text-sm font-thin border-2 w-5/12 lg:w-full">GET DIRECTIONS</button>
      </div>
    </section>
  );
};

export default ContactFooter;
