import React, { useState } from "react";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import OrganSearch from "../OrganSearches/OrganSearch/OrganSearch";
import SearchDoctor from "../SearchDoctor/SearchDoctor/SearchDoctor";


const FindDoctorsContainer = () => {
  const [organSearch, setOrganSearch] = useState(false);
  const findDoctorsTab = [
    {
      id: 0,
      name: "OrganSearch",
      component: OrganSearch,
    },
    {
      id: 1,
      name: "Blood Doner",
      component: OrganSearch,
    },
  ];
  const handleOrganTab = () => {
    setOrganSearch(true);
  };
  const handleSearchDoctorTab = () => {
    setOrganSearch(false);
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
      <section className="flex border-b-2 border-b-light-gray items-center mt-10">
        <p
          onClick={handleOrganTab}
          className={`cursor-pointer px-14 py-2 text-white
            ${organSearch ? "bg-gray " : "bg-light-gray"}`}
        >
          Organ Search
        </p>
        <p
          onClick={handleSearchDoctorTab}
          className={`cursor-pointer px-14 py-2 text-white
            ${!organSearch ? "bg-gray " : "bg-light-gray "} `}
        >
          Find a Doctor
        </p>
      </section>
      {organSearch ? <OrganSearch /> : <SearchDoctor />}
    </div>
  );
};

export default FindDoctorsContainer;
