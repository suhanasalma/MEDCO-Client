import React, { useEffect, useState, useRef } from "react";
import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";
import SideHeader from "./SideHeader";

const SecondHeader = () => {
     const [openAbout, setOpenAbout] = useState(false);
     const [patientService, setPatientService] = useState(false);
     const [medicleTravel, setMedicleTravel] = useState(false);
     const [contactOpen, setContactOpen] = useState(false);
     const [insuranceOpen, setInsuranceOpen] = useState(false);
     const menuRef = useRef(null);
  return (
    <section className="p-2 lg:w-10/12 mx-auto ">
      <SideHeader />
      <UpperHeader />
      <hr className="my-4 text-light-gray hidden md:block" />
      <LowerHeader />
      <SecondHeader />
    </section>
  );
};

export default SecondHeader;
