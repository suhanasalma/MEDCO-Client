import React, { useState } from "react";
import { organsInfos } from "./OrganInfo";
import { Symptoms } from "./OrganInfo";
import HumanBody from "../HumanBodySvg/HumanBody";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import "./findDoctor.css";
import AffectedOrgans from "../AffectedOrgans/AffectedOrgans";
import SelectSymptoms from "../SelectSymptoms/SelectSymptoms";
import ProgressBar from "../ProgressBar/ProgressBar";
import CustomSelect from "../../../Components/CustomSelect/CustomeSelect";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const FindDoctors = () => {
  const [organ, setOrgan] = useState("MaleHead");
  const [symptom, setSymptom] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [visibleHuman, setVisibleHuman] = useState(true);
  const [visibleOrgan, setVisibleOrgan] = useState(false);
  const [visibleSymptom, setVisibleSymptom] = useState(false);
  const [visibleDoctors, setVisibleDoctors] = useState(false);
  const [doctorsAvaialble, setDoctorsAvailable] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const handleBodyPartClick = (event) => {
    setOrgan(event);
    setVisibleHuman(false);
    setVisibleDoctors(false);
    setVisibleSymptom(false);
    setVisibleOrgan(true);
    setCurrentStep(2);
  };
  const handleOrganClick = (event) => {
    setSymptom(event);
    setVisibleOrgan(false);
    setVisibleHuman(false);
    setVisibleSymptom(true);
    setVisibleDoctors(false);
    setCurrentStep(3);
  };
  const handleSymptomsClick = (event) => {
    setSelectDoctor(event);
    setVisibleDoctors(true);
    setVisibleOrgan(false);
    setVisibleHuman(false);
    setVisibleSymptom(false);
    setCurrentStep(4);
  };
  // const handleDoctorClick = (event) => {
  //   setCurrentStep(4)
  // };

  const showBodys = () => {
    setVisibleHuman(true);
    setVisibleOrgan(false);
    setVisibleSymptom(false);
    setVisibleDoctors(false);
  };
  const showOrgans = () => {
    if (progress >= 33.33333333333333 && progress <= 100) {
      setVisibleHuman(false);
      setVisibleOrgan(true);
      setVisibleSymptom(false);
      setVisibleDoctors(false);
    }
  };
  const showSymptoms = () => {
    if (progress >= 66.66666666666666 && progress <= 100) {
      setVisibleHuman(false);
      setVisibleOrgan(false);
      setVisibleDoctors(false);
      setVisibleSymptom(true);
    }
  };
  const showDoctor = () => {
    if (progress === 100) {
      setVisibleHuman(false);
      setVisibleOrgan(false);
      setVisibleDoctors(true);
      setVisibleSymptom(false);
    }
  };

  const stepsName = [
    { id: 1, name: "Regions", show: showBodys },
    { id: 2, name: "Organs", show: showOrgans },
    { id: 3, name: "Symptoms", show: showSymptoms },
    { id: 4, name: "Doctor", show: showDoctor },
  ];
  const totalSteps = stepsName.length;

  // Calculate progress percentage
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const dateSelector = {
    icon: FaCalendarAlt,
    title: "No Date Specified",
    options: [
      "No Date Specified",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
  };
  const timeSelector = {
    icon: FaClock,
    title: "No Time Specified",
    options: [
      "12:00 AM - 08:00 AM",
      "08:00 AM - 01:00 PM",
      "01:00 PM - 04:00 PM",
      "04:00 PM - 08:00 PM",
      "08:00 PM - 12:00 AM",
    ],
  };

  return (
    <div className="p-2 sm:w-10/12 mx-auto my-10">
      <BreadCrumbs
        breadcrumbs={[
          { title: "Home", link: "/home" },
          {
            title: "Find A Doctor",
            active: true,
            link: "/findDoctors",
          },
        ]}
      />
      <ProgressBar
        stepsName={stepsName}
        currentStep={currentStep}
        progress={progress}
        showSymptoms={showSymptoms}
        showOrgans={showOrgans}
        showBodys={showBodys}
      />
      <div
        className={`my-14 h-[440px] px-6 py-10 ${
          visibleDoctors && "hidden xl:block"
        }`}
        style={{ boxShadow: " 0 .5rem 1rem rgba(0,0,0,.15)" }}
      >
        <section className="flex items-end gap-5 h-full justify-between py-10">
          <article
            className={`${
              visibleHuman ? "xl:w-auto" : "hidden xl:inline"
            }  h-full w-full xl:w-auto`}
          >
            <p className="text-center text-brown xl:text-green">
              Select rigion of the body:
            </p>
            <HumanBody
              organ={organ}
              handleBodyPartClick={handleBodyPartClick}
            />
          </article>
          <article
            className={`${
              visibleOrgan ? "" : "hidden xl:inline"
            } xl:inline w-full xl:w-auto h-full`}
          >
            <p className="text-center text-brown xl:text-green">
              Select affected organ:
            </p>
            <AffectedOrgans
              organ={organ}
              organsInfos={organsInfos}
              symptom={symptom}
              handleOrganClick={handleOrganClick}
            />
          </article>
          <article
            className={`${
              visibleSymptom ? "" : "hidden xl:inline"
            }  xl:inline h-full w-full xl:w-3/12`}
          >
            <p className="text-center text-brown xl:text-green xl:hidden">
              {symptom}
            </p>
            <p className="text-center text-brown xl:text-green">
              Select Symptom:
            </p>
            <SelectSymptoms
              handleSymptomsClick={handleSymptomsClick}
              Symptoms={Symptoms}
              symptom={symptom}
            />
          </article>
        </section>
      </div>
      <article
        className={`border-2 border-red ${
          visibleDoctors ? "" : "hidden xl:block "
        }  xl:inline h-full w-full xl:w-3/12 mt-20 xl:mt-5`}
      >
        <p className="text-center text-brown xl:text-green sm:text-3xl text-2xl xl:hidden">
          Select a Doctor:
        </p>
        <div className="w-full my-5 flex justify-center items-center">
          
          <div className="w-5/6 sm:w-3/6 space-y-4">
            <CustomSelect height={52} selectorDetails={dateSelector} />
            <CustomSelect height={40} selectorDetails={timeSelector} />
            <button
              className={` bg-green text-white text-md  px-4 py-1 mx-auto w-full rounded-md ${
                doctorsAvaialble ? "" : "hidden"
              }`}
            >
              Search Doctor
            </button>
          </div>
        </div>
        <p className="text-center text-brown xl:text-green sm:text-3xl text-2xl hidden xl:block">
          Select a Doctor:
        </p>
      </article>
    </div>
  );
};

export default FindDoctors;
