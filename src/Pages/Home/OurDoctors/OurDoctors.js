import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import { Link } from "react-router-dom";
import { ourDoctorsInfo } from "./OurDoctorsInfo";
import "./ourDoctors.css";
import LinkButton from "../../../Components/LinkButton/LinkButton";

const OurDoctors = () => {
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0);
  const selectedDoctor = ourDoctorsInfo[selectedDoctorIndex];

  const handleNextSlide = () => {
    setSelectedDoctorIndex((prevIndex) =>
      prevIndex === ourDoctorsInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSlide = () => {
    setSelectedDoctorIndex((prevIndex) =>
      prevIndex === 0 ? ourDoctorsInfo.length - 1 : prevIndex - 1
    );
  };

  const handleLowerSliderButton = (id) => {
    setSelectedDoctorIndex(id);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse lg:gap-3 xl:gap-0 gap-8 flex-wrap  lg:w-10/12 md:w-full w-10/12 mx-auto lg:justify-between justify-center items-center mt-10 mb-20">
      <div className="space-y-8">
        <div className="space-y-8 md:block hidden">
        <p className="font-bold text-lg">Our Doctors</p>
        <Title design="text-4xl" title="Qualified Doctors" />
        <Details
          design="w-80 lg:w-96"
          details="Handle directly by general doctors and professional and experienced specialist doctors"
        />
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedDoctor.bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="text-white bg border-2 w-80 h-64 sm:w-96 sm:h-64 md:w-72 md:h-52 lg:w-96 lg:h-64 rounded-s-3xl rounded-br-3xl p-5 xl:p-10 space-y-5"
        >
          <p className="lg:text-2xl">{selectedDoctor.department}</p>
          <p className="text-xl lg:text-3xl font-bold leading-relaxed">
            {selectedDoctor.name}
          </p>
          <p>
            <Link>Read More </Link>
          </p>
        </div>
        <div>
          <LinkButton design='w-44' title="View All Doctors" />
        </div>
        <div className="flex gap-5 justify-center items-center mt-5  md:hidden ">
            {ourDoctorsInfo.map((doctor) => (
              <button
                key={doctor.id}
                onClick={() => handleLowerSliderButton(doctor.id)}
                className={`${
                  selectedDoctor.id === doctor.id ? "bg-green" : ""
                } w-5 h-5 border-4 border-green rounded-full`}
              ></button>
            ))}
          </div>
      </div>
      
      <div className="">
      <div className="space-y-8 md:hidden block mb-10">
        <p className="font-bold text-lg">Our Doctors</p>
        <Title design="text-4xl" title="Qualified Doctors" />
        <Details
          design="w-96"
          details="Handle directly by general doctors and professional and experienced specialist doctors"
        />
        </div>
        <section className="relative">
          <div className="border-[16px] border-brown w-[22rem] h-[22rem] lg:w-[24rem] lg:h-[24rem] xl:w-[30rem] xl:h-[30rem] rounded-xl  md:rounded-s-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src={selectedDoctor?.img}
              alt=""
            />
          </div>

          <button
            onClick={handleNextSlide}
            className="bg-brown rounded-full w-10 h-10 text-white font-bold text-2xl absolute top-52 left-10"
          >
            ❯
          </button>
          {/* <button
              onClick={handlePreviousSlide}
              className="bg-brown rounded-full w-10 h-10 text-white font-bold text-2xl absolute top-40 left-80"
            >
              ❮
            </button> */}
          <div className="md:flex gap-5 justify-end items-center mt-5 hidden">
            {ourDoctorsInfo.map((doctor) => (
              <button
                key={doctor.id}
                onClick={() => handleLowerSliderButton(doctor.id)}
                className={`${
                  selectedDoctor.id === doctor.id ? "bg-green" : ""
                } w-5 h-5 border-4 border-green rounded-full`}
              ></button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurDoctors;
