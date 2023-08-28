import React, { useState } from "react";
import Carousel from "../../Home/Carousel/Carousel";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import Title from "../../../Components/Title/Title";
import HeaderInput from "../../SharedPages/Header/HeaderInput";
import Symptoms from "../Symptoms/Symptoms";
import Hospitals from "../Hospitals/Hospitals";
import video from "../../../Assests/HomeCarousel/autism.jpg";
import video1 from "../../../Assests/hospitalBuilding.jpg";

const ClinicAndCenters = () => {
  const [searchValue, setSearchValue] = useState("");

  const typing = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <section className="">
      <div className="h-[500px] relative">
        {/* <Carousel /> */}
        <img
          className="h-full w-full object-cover"
          src={video}
          alt="clinic and center"
        />
        <div style={{position:"absolute", top:"50%" , left:"50%",transform: "translate(-50%, -50%)"}}> 
          <p className="text-4xl text-green font-bold ">Clinics and Centers</p>
        </div>
        <div></div>
        <BreadCrumbs
          breadcrumbs={[
            { title: "Home", link: "/home" },
            {
              title: "Clinics and Centers",
              active: true,
              link: "/ClincAndCenter",
            },
          ]}
        />
      </div>
      <div className="mt-20">

        <div className="flex flex-col items-center my-10 gap-5 bg-light-gray h-80 py-10  mx-auto shadow shadow-green">
          <section className="lg:w-3/6 bg-white rounded-lg">
            <fieldset className="rounded-lg space-y-1 px-2 w-full py-3">
              <div className="relative w-full ">
                <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className={`${
                      searchValue !== "" ? "hidden" : "block"
                    } w-4 h-4`}
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </span>
                <input
                  onInput={(e) => typing(e)}
                  type="search"
                  name="Search"
                  placeholder="Search for a condition or treatment or hospital"
                  className="w-full input py-1 px-5 text-sm focus:outline-none "
                />
              </div>
            </fieldset>
          </section>
          <button className="text-xs bg-green btn hover:text-green w-52 md:px-6 border-2 border-green py-2 rounded-full text-white font-medium">
            Search
          </button>
        </div>
        <div className="flex justify-evenly -mt-40 bg-white w-10/12 mx-auto py-5 shadow-2xl">
          <Symptoms />
          <Hospitals />
        </div>
      </div>
    </section>
  );
};

export default ClinicAndCenters;
