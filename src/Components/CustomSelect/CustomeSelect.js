import React, { useState } from "react";
import './CustomeSelect.css'
const CustomSelect = ({
  height,
  selectorDetails,
  toggleSelect,
  isOpen,
  setOpenSelectIndex,
}) => {
  const [selectedOption, setSelectedOption] = useState(selectorDetails.title);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setOpenSelectIndex(null);
  };


  return (
    <div className="custom-select w-full">
      <div
        className={`flex gap-2 items-center select-selected ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleSelect}
      >
        <selectorDetails.icon />
        {selectedOption}
      </div>
      <div
        className={`select-items ${
          height ? `h-${height}` : "h-[300px]"
        } text-sm ${isOpen ? "" : "select-hide"}`}
      >
        {selectorDetails?.options?.map((option, index) => (
          <div
            key={index}
            className={`${option === selectedOption ? "same-as-selected" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomSelect;
