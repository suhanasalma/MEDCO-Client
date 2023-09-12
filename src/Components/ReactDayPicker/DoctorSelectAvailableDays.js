import React, { useState } from "react";
import { format, isBefore, addDays } from "date-fns";
import { DayPicker, Row, RowProps } from "react-day-picker";

import "react-day-picker/dist/style.css";

const DoctorSelectAvailableDays = ({availableSlots ,setOpenModal}) => {
  const [selected, setSelected] = useState();
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [location, setLocation] = useState('');

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p className="font-bold text-gray mt-2"><span className="text-sm">{location}</span> <br/> {format(selected, "PP")}.<br/> <span className="text-brown font-semi-bold">{Object.keys(selectedTime)}</span></p>;
  }

  const disabledDays = (date) => {
    let today = new Date();
    today = today.setDate(today.getDate() -1)
    const isOlder = date < today;

    const dayOfWeek = date
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    return (
        isOlder ||
      !availableSlots.days.some((day) => day === dayOfWeek)
    );
  };

  const isActive = (date) => {
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 60);

    const dayOfWeek = date
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    // Check if the date is within the next 30 days and it matches an available day
    return (
       availableSlots.days.some((day) => day === dayOfWeek)
    );
  };


  const isTimeAvailable = (date) => {
    if (!date || !date.getFullYear) {
        // Handle the case where date is undefined or doesn't have a getFullYear method.
        return;
      }
    setSelected(date);
    setSelectedTime('')

    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
    const selectedDate = date.getDate();
    
    if (
      availableSlots[year] &&
      availableSlots[year][month] &&
      availableSlots[year][month][dayOfWeek] &&
      availableSlots[year][month][dayOfWeek].dates[selectedDate]
    ) {
      setAvailableTimeSlots(
        availableSlots[year][month][dayOfWeek].dates[selectedDate]
      );
      setLocation( availableSlots[year][month][dayOfWeek].location)
    } else {
      // No available time slots for the selected date
      setAvailableTimeSlots([]);
      setLocation('')
    }
  };  

  return (
    <div>
        {footer}
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={isTimeAvailable}
        disabled={disabledDays}
        disableNavigation
        styles={{
          caption: { color: "#af976d" },
        }}
        modifiers={{
            active: isActive, // Apply the custom modifier for active days
          }}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
        modifiersStyles={{
          disabled: { fontSize: "75%" },
          active: {color: "#af976d" ,fontWeight:"700" },
        }}
      />
      <hr className="text-light-gray mb-5"/>
      <p className="text-light-gray">You can only make bookings 1 months in advance</p>
      <div className=" mt-5 space-y-4">
        <p className="font-bold text-brown">Preferred Time</p>
        <div className="grid xl:grid-cols-4 grid-cols-3 gap-5">
          {selected && availableTimeSlots?.map((slot,i) => (
            <button disabled={slot[Object.keys(slot)] === "booked"} key={i} onClick={()=>setSelectedTime(slot)} className={`${slot[Object.keys(slot)] === "booked" ? "bg-light-gray text-white":""}  ${selectedTime === slot ? "bg-brown text-white" :""} border-light-gray border-2 px-6 rounded-lg text-center cursor-pointer text-gray `}>
              {Object.keys(slot)}
            </button>
          ))}
        </div>
      </div>
      <div onClick={() => setOpenModal(false)} className="bg-brown text-white font-medium text-center rounded-lg py-1 text-md mt-10">
        <button>Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorSelectAvailableDays;
