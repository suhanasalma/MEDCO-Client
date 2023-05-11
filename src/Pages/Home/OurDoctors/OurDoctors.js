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
    console.log(id);
    setSelectedDoctorIndex(id);
  };

  return (
    <div className="flex w-9/12 mx-auto justify-between mt-10 mb-20">
      <div className="space-y-8">
        <p className="font-bold text-lg">Our Doctors</p>
        <Title design="text-4xl" title="Qualified Doctors" />
        <Details
          design="w-96"
          details="Handle directly by general doctors and professional and experienced specialist doctors"
        />
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedDoctor.bg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="text-white bg border-2 w-96 h-64 rounded-s-3xl rounded-br-3xl p-10 space-y-5"
        >
          <p className="text-2xl">{selectedDoctor.department}</p>
          <p className="text-3xl font-bold leading-relaxed">
            {selectedDoctor.name}
          </p>
          <p>
            <Link>Read More </Link>
          </p>
        </div>
        <div>
          <LinkButton title="View All Doctors" />
        </div>
      </div>
      <div className="">
        <section className="relative">
          <div className="border-[16px] border-brown w-[30rem] h-[30rem]  rounded-s-full overflow-hidden">
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
          <div className="flex gap-5 justify-end items-center mt-5">
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
