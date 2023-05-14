import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import "./PopularSearches.css";
import { searchInfos } from "./PopularSearchesInfo";
import Carousel from 'react-elastic-carousel';

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
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 6 },
    { width: 1750, itemsToShow: 7 },
  ]

  return (
    <div className="w-10/12 mx-auto my-32 text-md">
      <Title title="Popular Searches on Medco" />
      <section className="flex gap-16 items-end">
        <div className="vertical-lines space-y-2 mt-10">
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
          {searchInformation.map((data) => (
            <div className="bg-light-green border-2 border-light-green w-full mx-4  h-24 p-2 text-center rounded-lg hover:bg-white hover:border-2 hover:border-green transition ease-in-out lg:delay-100">
              <img
                className="rounded-full border-4 border-white w-10 h-10 object-contain mx-auto"
                alt=""
                src={data.img}
              />
              <p className="font-bold text-green text-sm">{data.name}</p>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default PopularSearches;
