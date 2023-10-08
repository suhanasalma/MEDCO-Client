import React from "react";
import DoctorCard from "../../../Components/DoctorCards/DoctorCard";
import { useState } from "react";
const AllDoctorCards = ({setAppointmentSummeryPage,setDoctorDetails,doctorDetails}) => {

  return (
    <div className="min-h-fit max-h-screen overflow-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 justify-items-center	select_doctor gap-5">
            {
                [
                "#af976d",
                "#2c4c3b",
                "blue",
                "#2c4c3b",
                "blue",
                "#af976d",
                "blue",
                "#2c4c3b",
                "#af976d",
                "#af976d",
                "#2c4c3b",
                "blue",
                ].map((item,i)=><DoctorCard setDoctorDetails={setDoctorDetails}
                doctorDetails={doctorDetails} key={i} setAppointmentSummeryPage={setAppointmentSummeryPage}/>)
            }
        </div>
    </div>
  );
};

export default AllDoctorCards;
