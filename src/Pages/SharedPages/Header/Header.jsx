import React, { useEffect, useState } from 'react';
import logo from '../../../Assests/Logo/MEDCO1.png'
import { TbBell, TbUserPlus, TbListSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Header = () => {
   const [lan, setLan] = useState(
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png"
   );
   const [open,setOpen] = useState(false)
   const countries = [
     {
       name: "United States",
       alpha2code: "EN",
       image:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png",
     },
     {
       name: "China",
       alpha2code: "CN",
       image:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png",
     },
     {
       name: "Bangladesh",
       alpha2code: "BD",
       image:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/250px-Flag_of_Bangladesh.svg.png",
     },
     {
       name: "Thailand",
       alpha2code: "TH",
       image:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/250px-Flag_of_Thailand.svg.png",
     },
     {
       name: "Philippines",
       alpha2code: "PH",
       image:
         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/250px-Flag_of_the_Philippines.svg.png",
     },
    
   ];

useEffect(() => {
  function handleClick(event) {
    console.log("Window clicked!");
  
  }
  // Add event listener when the component mounts
  window.addEventListener("click", handleClick);

  // Remove event listener when the component unmounts
  return () => {
    window.removeEventListener("click", handleClick);
  };
}, []);

   return (
     <div className="bg-[#2c4c3b] p-2">
       <section className="flex justify-around items-center ">
         <img className="w-16 rounded-lg" src={logo} alt="" />
         <div className="w-2/12 bg-white rounded-lg text-center flex justify-between items-center p-2">
           <TbListSearch className="text-2xl" />
           <input type="text" className="outline-none " placeholder="search" />
         </div>
         <div className="relative">
           <TbBell className="text-2xl text-white " />
           <p className="bg-red-500 rounded-full w-3 h-3  text-sm text-center font-bold absolute bottom-4 right-0"></p>
         </div>
         <div>
           <TbUserPlus
             onClick={() => setOpen((prevOpen) => !prevOpen)}
             className="text-2xl text-white relative"
           />
           <div
             className={`${
               open
                 ? "block absolute p-4 border-8 border-white font-bold bg-[#2c4c3b] space-y-5 text-white"
                 : "hidden"
             }`}
           >
             <p>
               <Link>Login</Link>
             </p>
             <p>
               <Link>Create Account</Link>
             </p>
           </div>
         </div>
         <div className="flex items-center gap-5">
           <img className="w-6 h-6 rounded-full" src={lan} alt="" />
           <select
             onClose={() => setOpen((prevOpen) => !prevOpen)}
             className="bg-[#2c4c3b] text-white font-bold"
             onChange={(e) => setLan(e.target.value)}
             id=""
           >
             {countries?.map((country, i) => (
               <option key={i} value={country.image}>
                 {country.alpha2code}
               </option>
             ))}
           </select>
         </div>
       </section>
       <section>
         <p>Find a Doctor</p>
         <p>Find a Hospital</p>
         <p>Find a Doctor</p>
         <p>Find a Hospital</p>
       </section>
     </div>
   );
};

export default Header;