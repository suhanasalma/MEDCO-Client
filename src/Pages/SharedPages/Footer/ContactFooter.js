import React from 'react';
import {
  FaPhoneAlt,
  FaPhoneVolume,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";

const ContactFooter = () => {

   return (
     <section className="flex justify-around items-center text-center bg-light-green">
       <div className=" border-2 border-white p-10">
         <FaPhoneVolume />
         <p>
           1111 (Bangladesh Only) <br />
           <span>Emergencies - Appointments - Ambulance</span>
           <br />
           <span>Available 24 hours every day</span>
         </p>
       </div>
       <div className=" border-2 border-white p-10">
         <FaPhoneAlt />
         <p>
           Call Medco <br /> <span>+880 1515151</span>
           <br />
           <span>Available 24 hours every day</span>
         </p>
       </div>
       <div className=" border-2 border-white p-10">
         <FaEnvelopeOpen />
         <p>Subscribe to our Newsletter</p>
         <button>SIGN UP NOW</button>
       </div>
       <div className=" border-2 border-white p-10">
         <FaMapMarkerAlt />
         <p>Map and Directions</p>
         <button>GET DIRECTIONS</button>
       </div>
     </section>
   );
};

export default ContactFooter;