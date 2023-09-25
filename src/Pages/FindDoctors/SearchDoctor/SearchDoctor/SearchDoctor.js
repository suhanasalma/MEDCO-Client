import React, { useState } from "react";
import CustomSelect from "../../../../Components/CustomSelect/CustomeSelect";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import AdvancedSearch from "../AdvancedSearches/AdvancedSearch/AdvancedSearch";
import { motion, AnimatePresence } from "framer-motion";


const SearchDoctor = () => {
  const [openSelectIndex, setOpenSelectIndex] = useState(null);
  const [advanceSearch, setAdvancedSearch] = useState(false);
  const handleSelectToggle = (index) => {
    setOpenSelectIndex(index === openSelectIndex ? null : index);
  };
  const dateSelector = {
    icon: FaCalendarAlt,
    title: "---Please select---",
    options: [
      "---Please select---",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
  };


  return (
    <section className="py-10 px-4 w-full mx-auto mb-10 bg-green min-h-[240px] ">
      <div className="w-full flex justify-center items-center h-52">
        <div className="lg:flex justify-around items-center gap-5 w-full ">
          <div className="lg:w-4/12 space-y-3">
            <p className="text-white">Search by specialty</p>
            <CustomSelect
              setOpenSelectIndex={setOpenSelectIndex}
              isOpen={openSelectIndex === 0}
              toggleSelect={() => handleSelectToggle(0)}
              height={52}
              selectorDetails={dateSelector}
            />
          </div>
          <p className="text-white text-xl">OR</p>
          <div className="lg:w-4/12 space-y-3">
            <label className="text-white" htmlFor="">
              Search by doctor's name
            </label>
            <input
              placeholder="Doctor's name"
              className="w-full p-2 rounded-sm outline-brown"
              type="text"
            />
          </div>
        </div>
      </div>
      <p
        onClick={() => setAdvancedSearch(!advanceSearch)}
        className="text-white text-center cursor-pointer hover:underline"
      >
        Select Advanced Search
      </p>
      <AnimatePresence>
        {advanceSearch && (
          <motion.div
            key="advanced-search"
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            // className="advanced-search"
          >
            <AdvancedSearch advanceSearch={advanceSearch} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SearchDoctor;
