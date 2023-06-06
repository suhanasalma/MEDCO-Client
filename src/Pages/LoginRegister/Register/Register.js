import React, { useEffect, useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Register = ({ isOpen, signIn, setSignIn ,onClose}) => {
  const [firstNameFocus, setfirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [createPassFocus, setCreatePassFocus] = useState(false);
  const [matchPassFocus, setMatchPassFocus] = useState(false);
  const [data, setData] = useState("");

  const RegistrationSchema = yup.object({
    firstName: yup.string('name should be in string').required("please enter name").max(20, "Name should not exceed 20 characters").matches(/^[^0-9][^0-9]*$/, "Name should not contain numbers"),//Name should not start with a number or contain numbers
    age:  yup
    .mixed()
    .test('is-valid-age', 'Age must be a valid number', function (value) {
      if (typeof value === 'number' && value > -1 && value <= 200) {
        return true;
      }
      if (typeof value === 'string' && !isNaN(parseInt(value)) && parseInt(value) > -1 && parseInt(value) <= 200) {
        return true;
      }
      return false;
    })
    .required("Please enter your age"),
    email:yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
      "Please enter a valid email address"
    ),
    createPass: yup.string()
    .required("Please enter a password")
    .min(8, "Password should be at least 8 characters")
    .max(100, "Password should not exceed 100 characters")
    .matches(
      /^(?=.*[A-Z]).*$/,
      "at least 1 uppercase letter"
    )
    .matches(
      /^(?=.*\d.*\d).*$/,
      "at least 2 numbers"
    ),
    matchPass: yup.string()
    .required("Please confirm your password")
    .oneOf([yup.ref("createPass")], "Passwords doesn't match"),
  }).required();

  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(RegistrationSchema)
  });

  const handleRegistration = (data)=>{
    console.log(data);
  }

  return (
    <div
      className={`min-h-[500px] flex my-10 duration-500 ease-in-out  mx-10 lg:mx-0 overflow-hidden absolute ${
        signIn ? "opacity-0 z-0" : "z-10 opacity-100"
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
        className={`w-5/12 p-10 text-center text-white hidden sm:flex items-center justify-center duration-1000 ease-in-out ${
          signIn ? " sm:translate-x-[140%] " : ""
        }`}
      >
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
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

      <div
        className={`w-full sm:w-7/12 bg-white p-10 duration-1000 ease-in-out ${
          signIn ? " sm:-translate-x-[71%]" : ""
        }`}
      >
        <div className="flex justify-end">
        <VscChromeClose className="font-bold text-2xl" onClick={onClose}/>
        </div>
        <h1  className="text-center mb-5 font-bold text-green text-xl">
          Create Account
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
        <form onSubmit={handleSubmit(handleRegistration)}>
          <section className="mt-10 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <label
              onClick={() => setfirstNameFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                firstNameFocus  || errors.firstName ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              First Name
            </label>
            <input {...register("firstName")}
              onFocus={() => setfirstNameFocus(true)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="text"
            />
         
         {errors.firstName && <span className="text-red text-xs absolute left-5 -bottom-2 ">{errors.firstName?.message} </span>}
          </div>
          <div className="relative">
            <label
              onClick={() => setLastNameFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                lastNameFocus  || errors.lastName ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              Last Name
            </label>
            <input  {...register("lastName")}
              onFocus={() => setLastNameFocus(true)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="text"
            />
             {errors.lastName && <span className="text-red text-xs absolute left-5 -bottom-2 ">{errors.lastName?.message} </span>}
          </div>
          <div className="relative">
            <label
              onClick={() => setLastNameFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                lastNameFocus  || errors.lastName ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              Age
            </label>
            <input  {...register("age",{ min: 0, max: 200 })}
              onFocus={() => setLastNameFocus(true)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="text"
            />
              {errors.age && <span className="text-red text-xs absolute left-5 -bottom-2 ">{errors.age?.message} </span>}
          </div>
          <div className="relative">
            <label
              onClick={() => setEmailFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                emailFocus || errors.email ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              Email
            </label>
            <input  {...register("email", { required: true })}
              onFocus={() => setEmailFocus(true)}
              className={`w-full px-4 py-2 outline-none bg-[#F9F6EE] rounded-md`}
              type="email"
            />
              {errors.email && <span className="text-red text-xs absolute left-5 -bottom-2 ">{errors.email?.message} </span>}
          </div>
          <div className="relative">
            <label
              onClick={() => setPhoneFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                phoneFocus  || errors.phone ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              Phone
            </label>
            <input {...register("phone", { required: true })}
              onFocus={() => setPhoneFocus(true)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="tel"
              pattern="[0-9]{3}[0-9]{8}"
            />
               {errors.phone && <span className="text-red text-xs absolute left-5 -bottom-2  ">Enter valid 11 digit</span>}
          </div>
          <div className="relative">
            <label
              onClick={() => setCreatePassFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                createPassFocus  || errors.createPass ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              Create Password
            </label>
            <input {...register("createPass")}
              onFocus={() => setCreatePassFocus(true)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md`}
              type="password"
            />
              {errors.createPass && <span className="text-red text-xs absolute left-5 -bottom-2 ">{errors.createPass?.message} </span>}
          </div>
          <div className="relative">
            <label
              onClick={() => setMatchPassFocus(true)}
              className={`absolute duration-500 ease-in-out left-2    ${
                matchPassFocus || errors.matchPass ? "bottom-8 text-green font-semibold" : "bottom-3 text-sm text-brown"
              }`}
              htmlFor=""
            >
              Match password
            </label>
            <input  {...register("matchPass")}
              onFocus={() => setMatchPassFocus(true)}
              className={`w-full  px-4 py-2 outline-none bg-[#F9F6EE] rounded-md 
             
               `}
              type="password"
            />
             {errors.matchPass && <span className="text-red text-xs absolute left-5 -bottom-2 ">{errors.matchPass?.message}</span>}
          </div>
          </section>
          <div className="text-white hover:text-green text-center mt-10 btn w-52 rounded-lg px-4 py-2 hover:border-green border-2 border-brown bg-brown cursor-pointer mx-auto">
        <button className=" font-medium text-base text-center  " type="submit" >Sign Up</button>
        </div>
        </form>
        
       <div className="font-bold text-green text-xs text-center sm:hidden">
        <span className="font-medium">already have an account? </span>
        <span
            onClick={() => setSignIn(!signIn)}
            className="border-b-2 cursor-pointer"
          >
            Login
          </span>
       </div>
      </div>
    </div>
  );
};

export default Register;
