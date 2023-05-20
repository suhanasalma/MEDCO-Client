import React, { useState } from 'react';
import BookAppointment from './BookAppointment/BookAppointment';
import BloodDoner from './BloodDoner/BloodDoner';

const AllKindOfForms = () => {

   const forms = [
     {
       id: 0,
       name: "appointment",
       component: BookAppointment,
     },
     {
       id: 1,
       name: "bloodDoner",
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
       <selectedReview.component/>
     </section>
   );
};

export default AllKindOfForms;