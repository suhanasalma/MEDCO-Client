import React from 'react';
import DatePicker from "react-datepicker";
import { getYear, getMonth, addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import './DateTime.css'

const DateTime = ({title}) => {
  console.log(title);
      const [startDate, setStartDate] = useState(new Date());
      const years = Array.from(
        { length: getYear(new Date()) - 1900 },
        (_, index) => 1990 + index
      );

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
   return (
     <DatePicker
       //  renderCustomHeader={({
       //    date,
       //    changeYear,
       //    changeMonth,
       //  }) => (
       //    <div
       //      style={{
       //        margin: 10,
       //        display: "flex",
       //        gap: "10px",
       //        justifyContent: "center",
       //      }}
       //    >
       //      <select
       //        value={getYear(date)}
       //        onChange={({ target: { value } }) => changeYear(value)}
       //      >
       //        {years.map((option) => (
       //          <option key={option} value={option}>
       //            {option}
       //          </option>
       //        ))}
       //      </select>

       //      <select
       //        value={months[getMonth(date)]}
       //        onChange={({ target: { value } }) =>
       //          changeMonth(months.indexOf(value))
       //        }
       //      >
       //        {months.map((option) => (
       //          <option key={option} value={option}>
       //            {option}
       //          </option>
       //        ))}
       //      </select>
       //    </div>
       //  )}
       selected={startDate}
       isClearable
       className="red-border"
       onChange={(date) => setStartDate(date)}
       shouldCloseOnSelect={false}
       placeholderText={title}
       maxDate={addDays(new Date(), 0)}
       showMonthDropdown
       showYearDropdown
       dropdownMode="select"
       yearDropdownItemNumber={1}
       scrollableYearDropdown
     />
   );
};

export default DateTime;