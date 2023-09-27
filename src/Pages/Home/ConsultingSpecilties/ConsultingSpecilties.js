import React from "react";
import Title from "../../../Components/Title/Title";
import { searchInfos } from "../PopularSearches/PopularSearchesInfo";
import TreatmentCategoryCard from "../../../Components/TreatmentCategoryCard/TreatmentCategoryCard";
import "./ConsultingSpecilties.css";

const ConsultingSpecilties = () => {
  return (
    <div className="w-10/12 mx-auto mb-32 ">
      <Title design="title text-center" title="Our Consulting Specialties" />
      <p  className=" text-gray text-center sm:w-9/12 mx-auto mt-5"
       >Ask a doctor online and get quick medical advice for your health queries or visit our hospitals. Our medical panel consists of over 3500+ doctors from 80+ specialities</p>

      <div className="speConsultation grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-14">
        {searchInfos.specialties?.map((data, i) => (
          <TreatmentCategoryCard
            key={i}
            design="w-52 h-32"
            imgDesign="w-20 h-20"
            data={data}
          />
        ))}
      </div>
      <div className="flex items-center justify-center my-5">
        {[1, 2, 3, 4]?.map((x, i) => (
          <button
            key={i}
            className="w-4 h-4 rounded-full bg-brown hover:bg-green mx-2"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ConsultingSpecilties;
