import React, { useEffect, useState ,useRef} from 'react';
import logo from '../../../Assests/Logo/MEDCO1.png'
import { TbBell, TbUserPlus, TbListSearch ,TbShoppingCartDiscount} from "react-icons/tb";
import { Link } from 'react-router-dom';


const Header = () => {
   const [lan, setLan] = useState(
     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png"
   );
   const [open,setOpen] = useState(false)
   const [notification,setNotification] = useState(1)
   const navbarRef = useRef(null);
   useEffect(() => {
    // add event listener to document object
    document.addEventListener('click', handleClickOutside);
    // cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // if click occurred outside the component, close the menu
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

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

   return (
     <div className=" p-2" >
       <section className="flex justify-around items-center ">
         <img className="w-16 rounded-lg" src={logo} alt="" />
         <div className="w-3/12 border-4 border-green rounded-lg text-center flex justify-between items-center p-2">
           <TbListSearch className="text-2xl" />
           <input type="text" className="outline-none " placeholder="search" />
         </div>
         <div className="relative group">
          <div>
          <TbBell className="text-2xl text-green " />
           {notification > 0 && <p className="bg-green rounded-full w-3 h-3  text-sm text-center font-bold absolute bottom-4 right-0"></p>}
          </div>
          {notification > 0 && <p class="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2">{notification}</p>}
         </div>
         <div ref={navbarRef}>
           <TbUserPlus
             onClick={() => setOpen((prevOpen) => !prevOpen)}
             className="text-2xl text-green relative"
           />
           <div
             className={`${
               open
                 ? "block absolute py-2 px-4 border-2 border-green font-bold bg-white text-green"
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
         <div className="relative group">
          <div>
          <TbShoppingCartDiscount className="text-2xl text-green " />
           {notification > 0 && <p className="bg-green rounded-full w-3 h-3  text-sm text-center font-bold absolute bottom-4 right-0"></p>}
          </div>
          {notification > 0 && <p class="opacity-0 group-hover:opacity-100 duration-300 absolute rounded-md bg-green text-white text-sm font-bold p-2">{notification}</p>}
         </div>
         <div className="flex items-center gap-3">
           <img className="w-6 h-6 rounded-full" src={lan} alt="" />
           <select
             onClose={() => setOpen((prevOpen) => !prevOpen)}
             className="text-green font-bold"
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
       <hr  className='my-2 mx-14 bg-green'/>
       <section className='flex justify-around items-center'>
         <p>Find a Doctor</p>
         <p>Find a Hospital</p>
         <p>Find a Service</p>
         <p>Find a Hospital</p>
         <p>Find a Hospital</p>
         <p>Find a Hospital</p>
       </section>
     </div>
   );
};

export default Header;