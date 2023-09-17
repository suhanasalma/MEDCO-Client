import React from "react";
import DoctorCard from "../../../Components/Doctor/DoctorCard";
import img from '../../../Assests/OurDoctors/7.jpg'

const AllDoctorCards = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12,13,14,15,16].map((item, i) => (
          <div className="border-2 border-light-gray h-72 flex flex-col items-center justify-center gap-2">
            <img className="w-32 h-32 rounded-full object-cover object-top mx-auto" src={img} alt="doctor"/>
            <p>Elisy Pery</p>
            <p>Senior at orthopedic</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctorCards;
