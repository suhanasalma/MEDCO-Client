import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AvailableDays = ({setSelectedDate,selectedDate,availableTimes}) => {

    const isDateAvailable = (date) => {
        const today = new Date();
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(today.getDate() + 30);
    
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
    
        // Check if the date is within the next 30 days and it matches an available day
        return (
          date >= today &&
          date <= thirtyDaysFromNow &&
          availableTimes.some((day) => day.day === dayOfWeek)
        );
      };
    
      // Function to highlight active days
      const highlightActiveDays = (date) => {
        if (isDateAvailable(date)) {
          return "active-day";
        }
        return null;
      };
    return (
        <div className=''>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                filterDate={isDateAvailable}
                dateFormat="dd/MM/yyyy"
                dayClassName={highlightActiveDays}
                className="opacity-0 w-10 h-10 right-0 -left-3 bottom-5 absolute mx-auto"
            />
           
      <div> {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</p>
      )}</div>
        </div>
    );
};

export default AvailableDays;