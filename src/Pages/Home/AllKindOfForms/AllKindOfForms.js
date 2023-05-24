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
     <section className="mb-32 bg-green w-10/12 mx-auto flex justify-between  gap-10 p-20 text-white">
       <div className="flex gap-10   p-5">
         <button
           onClick={handlePreviousSlide}
           className="ring-offset-2 ring-4 w-10 h-10 rounded-full text-white font-bold"
         >
           ❮
         </button>
         <button
           onClick={handleNextSlide}
           className="ring-offset-2 ring-4 w-10 h-10 rounded-full text-white font-bold"
         >
           ❯
         </button>
       </div>
       <selectedReview.component />
       <div onMouseLeave={() => setMenu(false)}>
         <FaBars onMouseOverCapture={() => setMenu(true)} />
         <div
           className={`${
             menu
               ? "bg-white text-green font-medium p-5 text-sm space-y-4"
               : "hidden"
           }`}
         >
           {forms.map((form) => (
             <div className="">
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