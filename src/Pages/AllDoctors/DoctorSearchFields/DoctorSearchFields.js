import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { countries } from "./InformationLists";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import chroma from "chroma-js";
import './doctorSearchFields.css'

const DoctorSearchFields = () => {
  const animatedComponents = makeAnimated();
  const [minPriceRange, setMinPriceRange] = useState(500);
  const [maxPriceRange, setMaxPriceRange] = useState(5000);
  const [step, setStep] = useState(500);
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

  const handleMinRange = (e) => {
    const newMinValue = parseInt(e.target.value);
    if (newMinValue <= maxPriceRange - step) {
      setMinPriceRange(newMinValue);
    } else {
      setMinPriceRange(maxPriceRange - step);
    }
  };

  const handleMaxRange = (e) => {
    const newMaxValue = parseInt(e.target.value);
    if (newMaxValue >= minPriceRange + step) {
      setMaxPriceRange(newMaxValue);
    } else {
      setMaxPriceRange(minPriceRange + step);
    }
  };
  const dynamicMaxValue = 5000 - step;

  const progressStyle = {
    left: `${((minPriceRange - step) / dynamicMaxValue) * 100}%`,
    right: `${100 - ((maxPriceRange - step) / dynamicMaxValue) * 100}%`,
  };
  return (
    <div className="sm:w-5/12 xl:w-3/12  min-h-fit max-h-screen overflow-auto">
      <div className="space-y-10 px-5 py-10 text-gray font-semibold w-full grid grid-cols-1 gap-5 sm:block">
        <div className="">
          <p className="text-gray font-semibold text-xl mb-2">
            Appointment Fee
          </p>
          <div>
            <div className="flex justify-between gap-5 text-sm text-brown">
              <p>{minPriceRange} $</p>
              <p>{maxPriceRange} $</p>
            </div>
            <div className="slider">
              <div className="progress" style={progressStyle}></div>
            </div>

            <div className="range-input">
              <input
                className="range-min "
                value={minPriceRange}
                min={500}
                max={5000}
                step={step}
                onChange={(e) => handleMinRange(e)}
                type="range"
              />

              <input
                className="range_max"
                value={maxPriceRange}
                min={500}
                max={5000}
                step={step}
                onChange={(e) => handleMaxRange(e)}
                type="range"
              />
            </div>
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
          <p>Appointment Type</p>
          <div className="font-medium text-sm">
            <div>
              <label className="flex items-center">
                <input
                  className="radio-input hidden"
                  value="Recommend a doctor"
                  type="radio"
                  name="appointment_type"
                />

                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    border: "2px solid #2c4c3b",
                    borderRadius: "50%",
                    display: "inline-block",
                    position: "relative",
                    marginRight: "5px",
                  }}
                  className="radio-out-circle"
                >
                  <span className="radio-inn-circle"></span>
                </span>
                <span className="radio-label">Online Appointment</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  className="radio-input"
                  value="I will choose my doctor"
                  type="radio"
                  name="appointment_type"
                />

                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    border: "2px solid #2c4c3b",
                    borderRadius: "50%",
                    display: "inline-block",
                    position: "relative",
                    marginRight: "5px",
                  }}
                  className="radio-out-circle"
                >
                  <span className="radio-inn-circle"></span>
                </span>
                <span className="radio-label">Physical Appointment</span>
              </label>
            </div>
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
