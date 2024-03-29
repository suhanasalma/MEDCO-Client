import React, { useState } from "react";
import BreadCrumbs from "../../../../Components/BreadCrumbs/BreadCrumbs";
import SelectSymptoms from "../SelectSymptoms/SelectSymptoms";
import ProgressBar from "../ProgressBar/ProgressBar";
import HumanBody from "../HumanBodySvg/HumanBody";
import AffectedOrgans from "../AffectedOrgans/AffectedOrgans";
import { Symptoms, organsInfos } from "./OrganInfo";
import CustomSelect from "../../../../Components/CustomSelect/CustomeSelect";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import SelectDoctor from "../SelectDoctor/SelectDoctor";
import AppointmentSummery from "../../../../Components/AppointmentSummery/AppointmentSummery";
import DoctorDetails from "../../../../Components/DoctorDetails/DoctorDetails";
import { useEffect } from "react";

const OrganSearch = () => {
  const [organ, setOrgan] = useState("MaleHead");
  const [symptom, setSymptom] = useState("");
  const [selectDoctor, setSelectDoctor] = useState("");
  const [visibleHuman, setVisibleHuman] = useState(true);
  const [visibleOrgan, setVisibleOrgan] = useState(false);
  const [visibleSymptom, setVisibleSymptom] = useState(false);
  const [visibleDoctors, setVisibleDoctors] = useState(false);
  const [doctorsAvaialble, setDoctorsAvailable] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [appointmentSummeryPage, setAppointmentSummeryPage] = useState(false);
  const [seeDoctorDetails, setSeeDoctorDetails] = useState(false);

  const handleSelectToggle = (index) => {
    setOpenSelectIndex(index === openSelectIndex ? null : index);
  };

  const handleBodyPartClick = (event) => {
    setSelectDoctor("");
    setOrgan(event);
    setVisibleHuman(false);
    setVisibleDoctors(false);
    setVisibleSymptom(false);
    setVisibleOrgan(true);
    setCurrentStep(2);
  };
  const handleOrganClick = (event) => {
    setSelectDoctor("");
    setSymptom(event);
    setVisibleOrgan(false);
    setVisibleHuman(false);
    setVisibleSymptom(true);
    setVisibleDoctors(false);
    setCurrentStep(3);
  };
  const handleSymptomsClick = (event) => {
    setDoctorsAvailable(false);
    setSelectDoctor(event);
    setVisibleDoctors(true);
    setVisibleOrgan(false);
    setVisibleHuman(false);
    setVisibleSymptom(false);
    setCurrentStep(4);
  };

  const showBodys = () => {
    setVisibleHuman(true);
    setVisibleOrgan(false);
    setVisibleSymptom(false);
    setVisibleDoctors(false);
  };
  const showOrgans = () => {
    if (progress >= 33 && progress <= 100) {
      setVisibleHuman(false);
      setVisibleOrgan(true);
      setVisibleSymptom(false);
      setVisibleDoctors(false);
    }
  };
  const showSymptoms = () => {
    if (progress >= 66 && progress <= 100) {
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
  useEffect(() => {
    if (seeDoctorDetails) {
      // Prevent scrolling of the page when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling of the page when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [seeDoctorDetails]);
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
      "No Time Specified",
      "12:00 AM - 08:00 AM",
      "08:00 AM - 01:00 PM",
      "01:00 PM - 04:00 PM",
      "04:00 PM - 08:00 PM",
      "08:00 PM - 12:00 AM",
    ],
  };

  return (
    <div className="p-2 w-full mx-auto mb-10">
      {appointmentSummeryPage ? (
        <AppointmentSummery
          setAppointmentSummeryPage={setAppointmentSummeryPage}
        />
      ) : (
        <>
          <ProgressBar
            stepsName={stepsName}
            currentStep={currentStep}
            progress={progress}
            showSymptoms={showSymptoms}
            showOrgans={showOrgans}
            showBodys={showBodys}
          />
          <p className="text-center text-brown font-medium text-2xl hidden xl:block">
            Interactive Symptom Checker{" "}
          </p>
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
                  selectDoctor={selectDoctor}
                  handleSymptomsClick={handleSymptomsClick}
                  Symptoms={Symptoms}
                  symptom={symptom}
                />
              </article>
            </section>
          </div>
          <div
            className={` ${
              visibleDoctors ? "" : "hidden xl:block "
            }  h-full w-full  mt-20 xl:mt-5`}
          >
            {selectDoctor === "Others" && (
              <div className="w-full my-5 flex justify-center items-center mb-14">
                <div className="w-5/6 sm:w-4/6 gap-10 space-y-6 xl:space-y-0 xl:flex items-center mx-auto">
                  <CustomSelect
                    setOpenSelectIndex={setOpenSelectIndex}
                    isOpen={openSelectIndex === 0}
                    toggleSelect={() => handleSelectToggle(0)}
                    height={52}
                    selectorDetails={dateSelector}
                  />
                  <CustomSelect
                    setOpenSelectIndex={setOpenSelectIndex}
                    isOpen={openSelectIndex === 1}
                    toggleSelect={() => handleSelectToggle(1)}
                    height={52}
                    selectorDetails={timeSelector}
                  />
                  <button
                    onClick={() => setDoctorsAvailable(true)}
                    className={` bg-green text-white text-md  px-4 py-1 mx-auto w-full rounded-md `}
                  >
                    Search Doctor
                  </button>
                </div>
              </div>
            )}
            {((selectDoctor && selectDoctor !== "Others") ||
              doctorsAvaialble) && (
              <SelectDoctor setSeeDoctorDetails={setSeeDoctorDetails}
              seeDoctorDetails = {seeDoctorDetails}
                setAppointmentSummeryPage={setAppointmentSummeryPage}
              />
            )}
          </div>
        </>
      )}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
        className={`fixed top-0 transition-all w-full duration-700 ease-in-out ${
          seeDoctorDetails ? "right-0" : "right-[-5000px]"
        }`}
      >
        <DoctorDetails setSeeDoctorDetails={setSeeDoctorDetails} />
      </div>
    </div>
  );
};

export default OrganSearch;
