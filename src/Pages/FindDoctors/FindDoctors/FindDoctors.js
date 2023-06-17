import React, { useState } from "react";
import { organsInfos } from "./OrganInfo";
import { Symptoms } from "./OrganInfo";
import HumanBody from "../HumanBodySvg/HumanBody";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import "./findDoctor.css";
import AffectedOrgans from "../AffectedOrgans/AffectedOrgans";
import SelectSymptoms from "../SelectSymptoms/SelectSymptoms";

const FindDoctors = () => {
  const [organ, setOrgan] = useState("MaleHead");
  const [symptom, setSymptom] = useState("");
  const handleBodyPartClick = (event) => {
    setOrgan(event);
  };

  return (
    <div className="p-2 w-10/12 mx-auto my-10">
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
      <section
        style={{ boxShadow: " 0 .5rem 1rem rgba(0,0,0,.15)" }}
        className="flex gap-10 my-14 justify-between h-[400px] p-10 "
      >
        <article className="w-4/12">
          <p className="text-center">Select rigion of the body:</p>
          <HumanBody organ={organ} handleBodyPartClick={handleBodyPartClick} />
        </article>
        <article className="w-3/12">
          <p className="text-center">Select affected organ:</p>
          <AffectedOrgans
            setSymptom={setSymptom}
            organ={organ}
            organsInfos={organsInfos}
            symptom={symptom}
          />
        </article>
        <article className="w-3/12">
          <p className="text-center">Select Symptom:</p>
          <SelectSymptoms Symptoms={Symptoms} symptom={symptom} />
        </article>
      </section>
    </div>
  );
};

export default FindDoctors;
