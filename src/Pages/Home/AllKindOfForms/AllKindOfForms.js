import React, { useState } from 'react';
import BookAppointment from './BookAppointment/BookAppointment';
import BloodDoner from './BloodDoner/BloodDoner';
import { FaBars } from "react-icons/fa";

const AllKindOfForms = () => {
  const [menu,setMenu] = useState(false)

   const forms = [
     {
       id: 0,
       name: "Appointment",
       component: BookAppointment,
     },
     {
       id: 1,
       name: "Blood Doner",
       component: BloodDoner,
     },
   ];

  
     const [selectedFormIndex, setSelectedFormIndex] = useState(0);
     const selectedReview = forms[selectedFormIndex];

     const handleNextSlide = () => {
       setSelectedFormIndex((prevIndex) =>
         prevIndex === forms.length - 1 ? 0 : prevIndex + 1
       );
     };

     const handlePreviousSlide = () => {
       setSelectedFormIndex((prevIndex) =>
         prevIndex === 0 ? forms.length - 1 : prevIndex - 1
       );
     };

     const handleLowerSliderButton = (id) => {
       setSelectedFormIndex(id);
     };

   return (
     <section className="mb-32 bg-green w-11/12 md:w-10/12 mx-auto flex justify-between gap-5 sm:gap-10 py-10 lg-py-20 px-5 lg:px-10 text-white">
       <div className="flex md:gap-10 gap-5 py-5 md:p-5">
         <button
           onClick={handlePreviousSlide}
           className="ring-offset-2 ring-2 md:ring-4 md:w-10 md:h-10 h-5 w-5 rounded-full text-white font-bold text-xs md:text-base"
         >
           ❮
         </button>
         <button
           onClick={handleNextSlide}
           className="ring-offset-2 ring-2 md:ring-4 md:w-10 md:h-10 h-5 w-5 rounded-full text-white font-bold text-xs md:text-base"
         >
           ❯
         </button>
       </div>
       <selectedReview.component />
       <div
         className="transition-all ease-in-out delay-300 "
         onMouseLeave={() => setMenu(false)}
       >
         <FaBars className="" onMouseOverCapture={() => setMenu(true)} />
         <div
           className={`${
             menu
               ? "bg-white text-green font-medium p-5 text-sm space-y-4"
               : "hidden"
           }`}
         >
           {forms.map((form, i) => (
             <div
               key={i}
               onClick={() => handleLowerSliderButton(form.id)}
               className="cursor-pointer"
             >
               <p>{form.name}</p>
               <hr />
             </div>
           ))}
         </div>
       </div>
     </section>
   );
};

export default AllKindOfForms;