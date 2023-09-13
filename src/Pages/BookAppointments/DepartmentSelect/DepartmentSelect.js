import React, { useState } from "react";
import './departmentSelect.css'
const DepartmentSelect = ({
  height,
  selectorDetails,
  toggleSelect,
  isOpen,
  setOpenSelectIndex,
  setSelectDepartment
}) => {
  const [selectedOption, setSelectedOption] = useState(selectorDetails.title);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setOpenSelectIndex(null);
    setSelectDepartment(option)
  };


  return (
    <div className="custom-department-select w-full">
      <div
        className={`flex gap-2 items-center select-department-selected ${
          isOpen ? "select-department-arrow-active" : ""
        }`}
        onClick={toggleSelect}
      >
        <selectorDetails.icon className='text-green'/>
        <span className="text-green">{selectedOption}</span>
      </div>
      <div
        className={`select-department-items ${
          height ? `h-${height}` : "h-72"
        } text-sm ${isOpen ? "" : "select-department-hide"}`}
      >
        {selectorDetails?.options?.map((option, index) => (
          <div
            key={index}
            className={`${option.name === selectedOption ? "same-department-as-selected" : ""}`}
            onClick={() => handleSelect(option.name)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DepartmentSelect;
