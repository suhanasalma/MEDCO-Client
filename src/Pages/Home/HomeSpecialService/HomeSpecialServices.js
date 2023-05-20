import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import "./SpecialServices.css";
import SpecialServiceCard from "./SpecialServiceCard";
import { specialServices } from "./SpecialServiceInfo";

const HomeSpecialServices = () => {
 const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

const handleMouseEnter = (index) => {
  setHoveredCardIndex(index);
};

const handleMouseLeave = () => {
  setHoveredCardIndex(null);
};

  return (
    <div className="my-20 w-11/12 lg:w-10/12 mx-auto">
      <Title title="Our Special Services" design="text-4xl " />
      <Details
        details="In times like today your health is very important, Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered"
        design="text-sm sm:w-8/12 lg:w-5/12 my-5"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-10 lg:gap-x-5 2xl:gap-x-10 gap-y-10  justify-items-center content-center ">
        {specialServices.map((card, i) => (
          <SpecialServiceCard key={i}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            i={i}
            card={card}
            hoveredCardIndex={hoveredCardIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSpecialServices;
