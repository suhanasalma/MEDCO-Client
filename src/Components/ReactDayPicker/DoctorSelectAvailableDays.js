import React, { useState } from "react";
import { format, isBefore, addDays } from "date-fns";
import { DayPicker, Row, RowProps } from "react-day-picker";

import "react-day-picker/dist/style.css";

const DoctorSelectAvailableDays = ({ availableTimes }) => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  const isDateAvailable = (date) => {
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 60);

    const dayOfWeek = date
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    // Check if the date is within the next 30 days and it matches an available day
    return (
      isBefore(date, today) ||
      !availableTimes.some((day) => day.day === dayOfWeek)
    );
  };

  return (
    <div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        disabled={isDateAvailable}
        disableNavigation
        styles={{
          caption: { color: "#af976d" },
        }}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
        modifiersStyles={{
          disabled: { fontSize: "75%" },
        }}
      />
      <hr />
      <div className=" mt-5 space-y-4">
        <p className="font-bold text-brown">Preferred Time</p>
        <div className="flex flex-wrap gap-5">
          {availableTimes.map((times) => (
            <div className="border-light-gray border-2 rounded-lg  px-2 text-gray cursor-pointer">
              {times.time}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-brown text-white font-medium text-center rounded-lg py-2 text-xl mt-10">
        <button>Select</button>
      </div>
    </div>
  );
};

export default DoctorSelectAvailableDays;
