import React, { useState } from "react";
import {
  FaRegCheckCircle,
} from "react-icons/fa";

const AdvancedSearch = ({ advanceSearch }) => {
   const [selectedDay, setSelectedDay] = useState('');
   const [selectedTime, seSelectedTime] = useState("");
   const [selectedDate, setSelectedDate] = useState('');
   const days = [
      {id:1,name:"Sat"},
      {id:2,name:"Sun"},
      {id:3,name:"Mon"},
      {id:4,name:"Tue"},
      {id:5,name:"Wed"},
      {id:6,name:"Thu"},
      {id:7,name:"Fri"},
   ]
   const times = [
     { id: 1, name: "12:00 AM - 12:00 Pm" },
     { id: 2, name: "01:00 PM - 06:00 PM" },
     { id: 3, name: "07:00 PM - 12:00 AM" },
   ];
   const handleDays = (id)=>{
       if (selectedDay.includes(id)) {
         // If the ID is already selected, remove it from the selection
         setSelectedDay(selectedDay.filter((selectedId) => selectedId !== id));
       } else {
         // If the ID is not selected, add it to the selection
         setSelectedDay([...selectedDay, id]);
       }
   }
   const handleTimes = (id)=>{
       if (selectedTime.includes(id)) {
         // If the ID is already selected, remove it from the selection
         seSelectedTime(selectedTime.filter((selectedId) => selectedId !== id));
       } else {
         // If the ID is not selected, add it to the selection
         seSelectedTime([...selectedTime, id]);
       }
   }


  return (
    <div className="mt-10 text-white">
      <p>Search By Day and Time</p>
      <hr className="border-light-gray my-5" />
      <div>
        <p>Days</p>
        <div className="grid grid-cols-4 lg:grid-cols-7 gap-5 lg:gap-0">
          {days.map((day) => (
            <div className=" flex items-center gap-2">
              <div
                className={`rounded-full bg-white border-4 border-green w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 `}
              >
                <input
                  onChange={() => handleDays(day.id)}
                  type="checkbox"
                  checked={selectedDay.includes(day.id)}
                  className="opacity-0 absolute rounded-full"
                />
                {selectedDay.includes(day.id) && (
                  <FaRegCheckCircle className="text-green text-3xl" />
                )}
              </div>
              <label htmlFor="">{day.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <p>Times</p>
        <div className="grid grid-cols-3 gap-5 lg:gap-0">
          {times.map((time) => (
            <div className=" flex items-center gap-2">
              <div
                className={`rounded-full bg-white border-4 border-green w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 `}
              >
                <input
                  onChange={() => handleTimes(time.id)}
                  type="checkbox"
                  checked={selectedTime.includes(time.id)}
                  className="opacity-0 absolute rounded-full"
                />
                {selectedTime.includes(time.id) && (
                  <FaRegCheckCircle className="text-green text-3xl" />
                )}
              </div>
              <label htmlFor="">{time.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
