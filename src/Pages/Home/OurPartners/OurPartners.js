import React from 'react';
import Marquee from "react-fast-marquee";
import Title from '../../../Components/Title/Title';
import Details from '../../../Components/Details/Details';
import square from '../../../Assests/Partners/square.png'
import DMC from '../../../Assests/Partners/DMC.jpg'
import CMC from '../../../Assests/Partners/chittagong-medical-college-hospita.png'
import Enam from '../../../Assests/Partners/enam-medical-college.jpg'
import BMC from '../../../Assests/Partners/square.png'
import United from '../../../Assests/Partners/united.jpg'
import Universal from '../../../Assests/Partners/universal.png'
import RMC from '../../../Assests/Partners/Rangamati-Medicle.jpg'

const partsners = [
  {
    name: "square Hospital",
    img: square,
  },
  {
    name: "Dhaka Medicle Hospital",
    img: DMC,
  },
  {
    name: "Chittagong Medicle Hospital",
    img: CMC,
  },
  {
    name: "Enam Medical College",
    img: Enam,
  },
  {
    name: "Banagladesh Medical Hospital",
    img: BMC,
  },
  {
    name: "United Hospital",
    img: United,
  },
  {
    name: "Universal Hospital",
    img: Universal,
  },
  {
    name: "Rangamati Hospital",
    img: RMC,
  },
];


const OurPartners = () => {
   return (
     <div className="w-10/12 mx-auto">
       <div className="space-y-6 ">
         <Title title="Our Partners" design="text-center text-2xl 2xl:text-4xl" />
         <Details
           design="text-sm md:w-8/12 lg:w-8/12 mx-auto text-center"
           details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio necessitatibus ipsum quidem ut? Libero possimus placeat unde enim consequatur quis numquam itaque ut illo? Officiis assumenda modi facilis sed optio incidunt ipsa aspernatur consequuntur amet laboriosam. Velit eaque voluptates dignissimos, deserunt ipsam praesentium, commodi a eos reprehenderit nemo ipsa?"
         />
       </div>
       <div className="my-10">
         <Marquee pauseOnClick={true} autoFill={true}>
           {partsners.map((hospital, i) => (
             <img
               key={i}
               className="w-32 h-32 rounded-full object-cover mx-10"
               alt="hospital"
               src={hospital.img}
             />
           ))}
         </Marquee>
       </div>
     </div>
   );
};

export default OurPartners;