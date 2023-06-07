import React, { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import AuthSideBar from "../Auth/AuthSideBar";
const Login = ({ signIn, setSignIn, onClose }) => {
  const [firstNameFocus, setfirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  return (
    <div
      className={`min-h-[500px] flex my-10 duration-500 ease-in-out  mx-10 lg:mx-0 overflow-hidden absolute ${
        signIn ? "z-10 opacity-100" : "opacity-0 z-0"
      }`}
    >
      
     <AuthSideBar setSignIn={setSignIn} signIn={signIn} title='Create Account' details=' To keep connected with us please sign with personal details'/>

      <div
        className={`w-full sm:w-7/12 bg-white p-10 duration-1000 ease-in-out ${
          signIn ? " sm:-translate-x-[71%]" : ""
        }`}
      > <div className="flex justify-end">
      <VscChromeClose className="font-bold text-2xl" onClick={onClose}/>
      </div>
        <h1 className="text-center mb-5 font-bold text-green text-xl">
         Login
        </h1>
        
        <div className="flex gap-5 my-5 items-center justify-center">
          <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
            <FaFacebookF />
          </div>
          <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
            <FaGooglePlusG />
          </div>
          <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
            <FaLinkedinIn />
          </div>
        </div>
        <form className="mt-10 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative">
            <label
              onClick={() => setfirstNameFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                firstNameFocus ? "bottom-10 text-green" : "bottom-3 text-gray"
              }`}
              htmlFor=""
            >
              firstName
            </label>
            <input
              onFocus={() => setfirstNameFocus(true)}
              // onBlur={() => setLastNameFocus(false)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="text"
              // placeholder="First Name"
            />
          </div>
          <div className="relative">
            <label
              onClick={() => setLastNameFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                lastNameFocus ? "bottom-10 text-green" : "bottom-3 text-gray"
              }`}
              htmlFor=""
            >
              firstName
            </label>
            <input
              onFocus={() => setLastNameFocus(true)}
              // onBlur={() => setLastNameFocus(false)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="text"
              // placeholder="First Name"
            />
          </div>
          <div className="relative">
            <label
              onClick={() => setEmailFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                emailFocus ? "bottom-10 text-green" : "bottom-3 text-gray"
              }`}
              htmlFor=""
            >
              firstName
            </label>
            <input
              onFocus={() => setEmailFocus(true)}
              // onBlur={() => setEmailFocus(false)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="text"
              // placeholder="First Name"
            />
          </div>
          <div className="relative">
            <label
              onClick={() => setPhoneFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                phoneFocus ? "bottom-10 text-green" : "bottom-3 text-gray"
              }`}
              htmlFor=""
            >
              firstName
            </label>
            <input
              onFocus={() => setPhoneFocus(true)}
              // onBlur={() => setPhoneFocus(false)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="tel"
              required
              pattern="[0-9]{3}[0-9]{8}"
              // placeholder="First Name"
            />
          </div>
        </form>
        <div className="text-white hover:text-green text-center mt-10 btn w-52 rounded-lg px-4 py-2 hover:border-green border-2 border-brown bg-brown cursor-pointer mx-auto">
          <button className=" font-bold text-lg text-center  " type="submit" >Sign In</button>
        </div>
        <div className="font-bold text-green text-xs text-center sm:hidden">
        <span className="font-medium">already have an account? </span>
        <span
            onClick={() => setSignIn(!signIn)}
            className="border-b-2 cursor-pointer"
          >
            Sign Up
          </span>
       </div>
      </div>
    </div>
  );
};

export default Login;
