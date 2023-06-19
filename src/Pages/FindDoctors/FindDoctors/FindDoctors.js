import React, { useState } from "react";
import { organsInfos } from "./OrganInfo";
import { Symptoms } from "./OrganInfo";
import HumanBody from "../HumanBodySvg/HumanBody";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import "./findDoctor.css";
import AffectedOrgans from "../AffectedOrgans/AffectedOrgans";
import SelectSymptoms from "../SelectSymptoms/SelectSymptoms";
import ProgressBar from "../ProgressBar/ProgressBar";

const FindDoctors = () => {
  const [organ, setOrgan] = useState("MaleHead");
  const [symptom, setSymptom] = useState("");
  const [visibleHuman, setVisibleHuman] = useState(true);
  const [visibleOrgan, setVisibleOrgan] = useState(false);
  const [visibleSymptom, setVisibleSymptom] = useState(false);
  const [visibleDoctors, setVisibleDoctors] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [indexNumber, setIndexNumber] = useState(1);

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
    setIndexNumber(1);
  };
  const showOrgans = () => {
    setVisibleHuman(false);
    setVisibleOrgan(true);
    setVisibleSymptom(false);
    setVisibleDoctors(false);
    setIndexNumber(2);
  };
  const showSymptoms = () => {
    setVisibleHuman(false);
    setVisibleOrgan(false);
    setVisibleDoctors(false);
    setVisibleSymptom(true);
    setIndexNumber(3);
  };
  const showDoctor = () => {
    setVisibleHuman(false);
    setVisibleOrgan(false);
    setVisibleDoctors(true);
    setVisibleSymptom(false);
    setIndexNumber(3);
  };
  console.log(currentStep);
  const stepsName = [
    { id: 1, name: "Regions", show: showBodys },
    { id: 2, name: "Organs", show: showOrgans },
    { id: 3, name: "Symptoms", show: showSymptoms },
    { id: 4, name: "Doctor", show: showDoctor },
  ];
  const totalSteps = stepsName.length;

  // Calculate progress percentage
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

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
        indexNumber={indexNumber}
        stepsName={stepsName}
        currentStep={currentStep}
        progress={progress}
        showSymptoms={showSymptoms}
        showOrgans={showOrgans}
        showBodys={showBodys}
      />
      <div
        className={`my-14 h-[440px] px-6 py-10 ${visibleDoctors && "hidden xl:block"}`}
        style={{ boxShadow: " 0 .5rem 1rem rgba(0,0,0,.15)" }}
      >
        {/* <ProgressBar indexNumber={indexNumber} stepsName={stepsName} currentStep={currentStep} progress={progress} showSymptoms={showSymptoms} showOrgans={showOrgans} showBodys= {showBodys}/> */}
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
        className={`${
          visibleDoctors ? "" : "hidden xl:block "
        }  xl:inline h-full w-full xl:w-3/12 mt-20 xl:mt-5`}
      >
        <p className="text-center text-brown xl:text-green">Select a Doctor:</p>
      </article>
    </div>
  );
};

export default FindDoctors;
