import React from 'react';
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import './DateTime.css'

const DateTime = ({title}) => {
      const [startDate, setStartDate] = useState(null);
      
   return (
     <DatePicker
       selected={startDate}
       isClearable
       dateFormat="dd/MM/yyyy"
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