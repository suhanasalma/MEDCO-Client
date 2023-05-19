import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import consultation from "../../../Assests/specialService/consultation.png";
import hotel from "../../../Assests/specialService/hotel.png";
import doctors from "../../../Assests/specialService/doctors.png";
import gift from "../../../Assests/specialService/gitCard.jpg";
import period from "../../../Assests/specialService/period.jpg";
import pharmacy from "../../../Assests/specialService/pharmacy.png";
import "./SpecialServices.css";
import LinkButton from "../../../Components/LinkButton/LinkButton";
import { Link } from "react-router-dom";

const HomeSpecialServices = () => {
  const specialServices = [
    {
      name: "Free Weekly Consultation",
      image: consultation,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Online Pharmacy",
      image: pharmacy,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Doctors Community",
      image: doctors,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Book a Hotel",
      image: hotel,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Gift Card",
      image: gift,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Menstrual Calender",
      image: period,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
  ];
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
          <div
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            style={{
              backgroundImage:
                hoveredCardIndex === i &&
                `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
             
              // transition: "all ease-in-out .5s",
            }}
            className="w-80 sm:w-64  md:w-[200px] lg:w-[240px] 2xl:w-72 h-[225px] border-4 rounded-s-3xl rounded-br-3xl p-4 transition-all ease-in-out delay-300"
            key={i}
          >
            <img
              className={`${
                hoveredCardIndex === i
                  ? "hidden"
                  : " w-20 h-20 object-cover rounded-md"
              }`}
              src={card.image}
              alt=""
            />
            <Title
              title={card.name}
              design={`${
                hoveredCardIndex === i
                  ? "text-white font-bold text-base lg:text-xl my-4 text-center"
                  : "font-bold text-base lg:text-lg my-4"
              }`}
            />
            {hoveredCardIndex === i && (
              <Details
                details="details to tell "
                design="text-lg text-white text-center mb-5"
              />
            )}
            {hoveredCardIndex === i ? (
              <div className="text-center">
                <Link className="border-4 border-green bg-white px-6  rounded-s-3xl rounded-br-3xl text-green font-bold py-1 ">
                  See More
                </Link>
              </div>
            ) : (
              <Link className="border-2  bg-green px-6  rounded-s-3xl rounded-br-3xl text-white  py-1">
                See More
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSpecialServices;
