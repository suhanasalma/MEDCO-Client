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
    <div className="lg:w-10/12 w-11/12 mx-auto mt-10 mb-20 border-4">
      <div className="space-y-4 hidden mb-5 secondDetails">
        <p className="font-bold text-lg">Our Doctors2</p>
        <Title design="text-4xl" title="Qualified Doctors" />
        <Details
          // design="w-96"
          details="Handle directly by general doctors and professional and experienced specialist doctors"
        />
      </div>
      <div className="flex flex-row lg:gap-3 xl:gap-0 gap-8  md:justify-between justify-center items-center ourDocContainer">
        <div className="space-y-5">
          <div className="space-y-8 sm:block hidden doctorsHeader">
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
            className={`${selectedDoctor.imgClass} text-white bg border-2  h-64 w-72 sm:h-52 md:w-72 md:h-52 lg:w-96 lg:h-64 rounded-s-3xl rounded-br-3xl p-5 xl:p-10 space-y-5 doctorCard`}
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
            <LinkButton
              design="w-52 border-2 border-green"
              title="View All Doctors"
            />
          </div>
          <div className="gap-2 justify-center items-center mt-5  hidden secondBtn">
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
          <section className="relative">
            <div className="border-[16px] border-brown sm:w-[19rem] sm:h-[19rem] md:w-[21rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] xl:w-[30rem] xl:h-[30rem] rounded-xl  sm:rounded-s-full overflow-hidden mx-auto doctorImage">
              <img
                className={`${selectedDoctor.imgClass} w-full h-full object-cover object-top `}
                src={selectedDoctor?.img}
                alt=""
              />
            </div>

            <button
              onClick={handleNextSlide}
              className="bg-brown rounded-full w-10 h-10 text-white font-bold text-2xl absolute top-52 left-10 imgBtn"
            >
              ❯
            </button>
            <div className="flex gap-2 md:gap-5 justify-end items-center mt-5 firstBtn">
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
    </div>
  );
};

export default OurDoctors;
