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
  const handleBodyPartClick = (event) => {
    setOrgan(event);
    setVisibleHuman(false);
    setVisibleOrgan(true);
  };
  const handleOrganClick = (event) => {
    setSymptom(event);
    setVisibleOrgan(false);
    setVisibleHuman(false);
    setVisibleSymptom(true);
  };

  const showBodys = ()=>{
    setVisibleHuman(true);
    setVisibleOrgan(false);
    setVisibleSymptom(false);
  }
  const showOrgans = ()=>{
    setVisibleHuman(false);
    setVisibleOrgan(true);
    setVisibleSymptom(false);
  }
  const showSymptoms = ()=>{
    setVisibleHuman(false);
    setVisibleOrgan(false);
    setVisibleSymptom(true);
  }

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

      <div className="border-2 my-14 h-[440px] px-6 py-10" style={{ boxShadow: " 0 .5rem 1rem rgba(0,0,0,.15)" }}>
        {/* <div className="flex justify-center xl:hidden gap-10">
          <span onClick={showBodys}>Rigion</span>
          <span onClick={showOrgans}>Organs</span>
          <span onClick={showSymptoms}>Symptoms</span>
          <span onClick={showBodys}>Doctor</span>
        </div> */}
        <ProgressBar/>
        <section className="flex items-end gap-5 h-full justify-between py-10">
          <article
            className={`${
              visibleHuman ? "xl:w-auto" : "hidden xl:inline"
            }  h-full w-full xl:w-auto`}
          >
            <p className="text-center">Select rigion of the body:</p>
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
            <p className="text-center">Select affected organ:</p>
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
            <p className="text-center">Select Symptom:</p>
            <SelectSymptoms Symptoms={Symptoms} symptom={symptom} />
          </article>
        </section>
      </div>
    </div>
  );
};

export default FindDoctors;
