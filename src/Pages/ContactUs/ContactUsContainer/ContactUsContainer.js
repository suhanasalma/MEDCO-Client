import React from "react";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import { useState } from "react";
import MedcoContact from "../MedcoContact/MedcoContact";
import HospitalContact from "../HospitalContact/HospitalContact";
import { Link } from "react-router-dom";

const ContactUsContainer = () => {
    const [medcoContact, setMedcoContact] = useState(false);

    const handleMedcoTab = () => {
        setMedcoContact(true);
      };
      const handleLocalTab = () => {
        setMedcoContact(false);
      };

  return (
    <div className="p-2 sm:w-10/12 mx-auto mb-10 mt-5">
      <BreadCrumbs
        breadcrumbs={[
          { title: "Home", link: "/home" },
          {
            title: "Contact Us",
            active: true,
            link: "/ContactUs",
          },
        ]}
      />
<div className="flex justify-between items-center border-b-2 border-b-light-gray  mt-10">
<section className="flex  items-center">
        <p
          onClick={handleMedcoTab}
          className={`cursor-pointer px-4 sm:px-14 py-2 text-white text-sm sm:text-base
            ${medcoContact ? "bg-gray " : "bg-light-gray"}`}
        >
          Contact Medco
        </p>
        <p
          onClick={handleLocalTab}
          className={`cursor-pointer px-4 sm:px-14 py-2 text-white text-sm sm:text-base
            ${!medcoContact ? "bg-gray " : "bg-light-gray "} `}
        >
          Contact Hospital
        </p>
      </section>
      <Link className="text-brown font-medium hover:underline text-sm sm:text-base">My Queries</Link>
</div>
     <section className="w-11/12 md:w-8/12 mx-auto">
     {medcoContact ? <MedcoContact /> : <HospitalContact />}
     </section>
    </div>
  );
};

export default ContactUsContainer;
