import React from "react";
import DoctorCard from "../../../../Components/DoctorCards/DoctorCard";
import './selectDoctor.css'

const SelectDoctor = () => {
  return (
    <div>
      <p className="text-center text-brown xl:text-green font-medium sm:text-3xl text-2xl ">
        Select a Doctor:
      </p>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center gap-5 sm:gap-x-20 lg:gap-5 select_doctor">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
          <DoctorCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default SelectDoctor;
