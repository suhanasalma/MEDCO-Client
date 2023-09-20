import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { countries } from "./InformationLists";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import chroma from "chroma-js";

const DoctorSearchFields = () => {
  const animatedComponents = makeAnimated();
  const [minPriceRange, setMinPriceRange] = useState(500);
  const [maxPriceRange, setMaxPriceRange] = useState(5000);
  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const customeStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = data.color || "#2c4c3b"; // Default color if not specified
      const chromaColor = chroma(color);

      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "#2c4c3b"
          : isFocused
          ? chromaColor.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? "white"
          : isFocused
          ? "#2c4c3b"
          : color,
        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor: "!isDisabled"
            ? isSelected
              ? "#2c4c3b"
              : chromaColor.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot(), color: "" }),
    placeholder: (styles) => ({ ...styles, ...dot("#E5F6DF") }),
    singleValue: (styles, { data }) => ({
      ...styles,
      ...dot(data.color || "#2c4c3b"),
      color: "#2c4c3b",
      fontWeight: "500",
    }),
  };

  const handleRange = (e) => {
    setMinPriceRange(e.target.value);
  };

  return (
    <div className="sm:w-5/12 xl:w-3/12">
      <div className="space-y-5 px-5 py-10 text-gray font-semibold w-full grid grid-cols-1 gap-5 sm:block"> 
        <div  className="">
         <p className="text-gray font-semibold text-xl mb-2"> Visit Fee</p>
          <div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-2">
                <p className="text-gray">MIN</p>
                <input
                  className="border-2 w-20 text-center"
                  placeholder={minPriceRange}
                  type="number"
                />
              </div>
              <span>-</span>
              <div className="flex items-center gap-2 ">
                <p>MAX</p>
                <input
                  className="border-2 w-20 text-center"
                  placeholder={maxPriceRange}
                  type="number"
                />
              </div>
            </div>
            <input onInput={(e) => handleRange(e)} type="range" />
          </div>
        </div>
        <div className="relative border-[1px] border-l-light-gray border-y-light-gray border-r-green py-1 text-center">
          <input
            className="px-2 outline-none w-11/12"
            placeholder="Search"
            type="search"
          />
          <div className=" bg-green text-white text-xs flex items-center justify-center absolute top-0 right-0 px-2 h-full">
            <TfiSearch />
          </div>
        </div>
        <div className="space-y-1">
          <p>Country</p>
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#2c4c3b",
              },
            })}
            styles={customeStyles}
            // closeMenuOnSelect={false}
            components={animatedComponents}
            // isMulti
            isClearable
            options={countries}
          />
        </div>
        <div className="space-y-1">
          <p>District/State</p>
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#2c4c3b",
              },
            })}
            styles={customeStyles}
            // closeMenuOnSelect={false}
            components={animatedComponents}
            // isMulti
            isClearable
            options={countries}
          />
        </div>
        <div className="space-y-1">
          <p>Speciality</p>
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#2c4c3b",
              },
            })}
            styles={customeStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            isClearable
            options={countries}
          />
        </div>
        <div className="space-y-1">
          <p>Qualifications</p>
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#2c4c3b",
              },
            })}
            styles={customeStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            isClearable
            options={countries}
          />
        </div>
        <div className="space-y-1">
          <p>Departments</p>
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#2c4c3b",
              },
            })}
            styles={customeStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            isClearable
            options={countries}
          />
        </div>
        <div className="space-y-1">
          <p>Hospitals</p>
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#2c4c3b",
              },
            })}
            styles={customeStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isClearable
            isMulti
            options={countries}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorSearchFields;
