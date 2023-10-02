import React, { useState } from "react";
import styles from './CustomeSelect.module.css'
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
    <div className={`${styles.customSelect} w-full`}>
      <div
        className={`flex gap-2 items-center  ${styles.selectSelected} ${
          isOpen ? styles.selectArrowActive : ""
        }`}
        onClick={toggleSelect}
      >
        <selectorDetails.icon className='text-green'/>
        <span className="text-brown">{selectedOption}</span>
      </div>
      <div
        className={`${styles.selectItems} ${
          height ? `h-${height}` : "h-72"
        } text-sm ${isOpen ? "" : styles.selectHide}`}
      >
        {selectorDetails?.options?.map((option, index) => (
          <div
            key={index}
            className={`${option === selectedOption ? styles.sameAsSelected : ""}`}
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
