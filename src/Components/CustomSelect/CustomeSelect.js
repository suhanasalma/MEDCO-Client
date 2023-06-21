import React, { useState } from "react";
const CustomSelect = ({ height, selectorDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectorDetails.title);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
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
      <div className={`select-items  ${height ? `h-${height}` : "h-[300px]"} text-sm ${isOpen ? "" : "select-hide"}`}>
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
