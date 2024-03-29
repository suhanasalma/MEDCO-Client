import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import "./PopularSearches.css";
import { searchInfos } from "./PopularSearchesInfo";
import Carousel from "react-elastic-carousel";
import TreatmentCategoryCard from "../../../Components/TreatmentCategoryCard/TreatmentCategoryCard";

const PopularSearches = () => {
  const [searchInformation, setSearchInformation] = useState(
    searchInfos.specialties
  );
  const [selectedCategory, setSelectedCategory] = useState("specialties");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "specialties") {
      setSearchInformation(searchInfos.specialties);
    } else if (category === "conditions") {
      setSearchInformation(searchInfos.conditions);
    } else if (category === "procedures") {
      setSearchInformation(searchInfos.procedures);
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 300, itemsToShow: 2, itemsToScroll: 2 },
    { width: 400, itemsToShow: 3, itemsToScroll: 3 },
    { width: 600, itemsToShow: 4, itemsToScroll:4 },
    { width: 800, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1000, itemsToShow: 6, itemsToScroll: 6 },
  ];

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-32 text-md">
      <Title title="Popular Searches on Medco" />
      <section className="flex gap-16 items-end">
        <div className="vertical-lines space-y-3 mt-10">
          <p
            onClick={() => handleCategoryClick("specialties")}
            className={`${
              selectedCategory === "specialties"
                ? "text-green font-bold"
                : "text-gray"
            } cursor-pointer`}
          >
            Specialties
          </p>

          <p
            onClick={() => handleCategoryClick("conditions")}
            className={`${
              selectedCategory === "conditions"
                ? "text-green font-bold"
                : "text-gray"
            } cursor-pointer`}
          >
            Conditions
          </p>
          <p
            onClick={() => handleCategoryClick("procedures")}
            className={`${
              selectedCategory === "procedures"
                ? "text-green font-bold"
                : "text-gray"
            } cursor-pointer`}
          >
            Procedures
          </p>
        </div>
        <Carousel breakPoints={breakPoints}>
          {searchInformation?.map((data, i) => (
            <TreatmentCategoryCard
              key={i}
              fontDesign="text-xs"
              imgDesign="w-12 h-12"
              data={data}
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default PopularSearches;
