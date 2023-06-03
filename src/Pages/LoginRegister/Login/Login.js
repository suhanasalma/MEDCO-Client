import React, { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Login = ({ signIn, setSignIn, isOpen }) => {
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
      <div
        style={{
          background: "#2c4c3b",
          background: "-webkit-linear-gradient(to right, #2c4c3b, #af976d)",
          background: "linear-gradient(to right, #2c4c3b, #af976d)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          color: "#FFFFFF",
          transition: "transform 0.6s ease-in-out",
        }}
        className={`w-5/12 p-10 text-center text-white flex items-center justify-center duration-1000 ease-in-out ${
          signIn ? " translate-x-[140%] sign-up-container" : ""
        }`}
      >
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Welcome Back 2</h1>
          <p className="text-sm">
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={() => setSignIn(!signIn)}
            className="border-2 border-white w-52 rounded-lg px-4 py-2"
          >
            Sign In
          </button>
        </div>
      </div>

      <form
        className={`w-7/12 bg-white p-10 duration-1000 ease-in-out ${
          signIn ? " -translate-x-[71%]" : ""
        }`}
      >
        <h1 className="text-center mb-5 font-bold text-green text-xl">
          Create Account 2
        </h1>
        <div className="flex gap-5 my-5 items-center justify-center">
          <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
            {" "}
            <FaFacebookF />
          </div>
          <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
            {" "}
            <FaGooglePlusG />
          </div>
          <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
            {" "}
            <FaLinkedinIn />
          </div>
        </div>
        <section className=" grid grid-cols-2 gap-10">
          <div className="relative">
            <label
              onFocus={() => setfirstNameFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                firstNameFocus ? "bottom-10 text-green" : "bottom-3 text-gray"
              }`}
              htmlFor=""
            >
              firstName
            </label>
            <input
              onFocus={() => setfirstNameFocus(true)}
              // onBlur={() => setfirstNameFocus(false)}
              className={`w-11/12 px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
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
              className={`w-11/12 px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
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
              className={`w-11/12 px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
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
              className={`w-11/12 px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="tel"
              required
              pattern="[0-9]{3}[0-9]{8}"
              // placeholder="First Name"
            />
          </div>
        </section>
        <div className="text-white hover:text-green text-center my-5 btn w-52 rounded-lg px-4 py-2 bg-brown cursor-pointer mx-auto">
          <input className=" font-bold text-lg text-center  " type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
