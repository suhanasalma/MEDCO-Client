import React, { useEffect, useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../Components/InputField/InputField";
import AuthSideBar from "../Auth/AuthSideBar";

const Register = ({  signIn, setSignIn, onClose }) => {
  const [firstNameFocus, setfirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [createPassFocus, setCreatePassFocus] = useState(false);
  const [matchPassFocus, setMatchPassFocus] = useState(false);

  const RegistrationSchema = yup
    .object()
    .shape({
      firstName: yup
        .string("name should be in string")
        .required("please enter name")
        .max(20, "Name should not exceed 20 characters")
        .matches(/^[^0-9][^0-9]*$/, "Name should not contain numbers"), //Name should not start with a number or contain numbers
      age: yup
        .mixed()
        .test("is-valid-age", "Age must be a valid number", function (value) {
          if (typeof value === "number" && value > -1 && value <= 200) {
            return true;
          }
          if (
            typeof value === "string" &&
            !isNaN(parseInt(value)) &&
            parseInt(value) > -1 &&
            parseInt(value) <= 200
          ) {
            return true;
          }
          return false;
        })
        .required("Please enter your age"),
      email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Please enter your email")
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
          "Please enter a valid email address"
        ),
      createPass: yup
        .string()
        .required("Please enter a password")
        .min(8, "Password should be at least 8 characters")
        .max(100, "Password should not exceed 100 characters")
        .matches(/^(?=.*[A-Z]).*$/, "at least 1 uppercase letter")
        .matches(/^(?=.*\d.*\d).*$/, "at least 2 numbers"),
      matchPass: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("createPass")], "Passwords doesn't match"),
      phone: yup.string().required("Please enter a phone number"),
      address: yup
        .string()
        .required("Please enter address")
        .max(400, "Address should not exceed 400 characters"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    resolver: yupResolver(RegistrationSchema),
  });

  const handleRegistration = (data) => {
    console.log(data);
    reset()
  };
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleTextareaChange = (event) => {
    setAddressFocus(true);
    trigger("address");
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setTextareaHeight(event.target.style.height);
  };

  return (
    <div
      className={`min-h-[500px] flex my-10 duration-500 ease-in-out  mx-10 lg:mx-0 overflow-hidden absolute ${
        signIn ? "opacity-0 z-0" : "z-10 opacity-100"
      }`}
    >
      <AuthSideBar setSignIn={setSignIn} signIn={signIn} title='Welcome Back' details=' To keep connected with us please login with your email'/>

      <div
        className={`w-full sm:w-7/12 bg-white p-10 duration-1000 ease-in-out ${
          signIn ? " sm:-translate-x-[71%]" : ""
        }`}
      >
        <div className="flex justify-end">
          <VscChromeClose className="font-bold text-2xl" onClick={onClose} />
        </div>
        <h1 className="text-center mb-5 font-bold text-green text-xl">
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
          <section className="mt-10 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10 items-start	">
            <InputField label='First Name' name='firstName' setFocus={setfirstNameFocus} focus = {firstNameFocus} register={register} errors={errors} trigger={trigger}/>

            <InputField label='Last Name' name='lastName' setFocus={setLastNameFocus} focus = {lastNameFocus} register={register} errors={errors} trigger={trigger}/>
            <InputField label='Age' name='age' setFocus={setAgeFocus} focus = {ageFocus} register={register} errors={errors} trigger={trigger}/>
            <InputField label='Email' name='email' setFocus={setEmailFocus} focus = {emailFocus} register={register} errors={errors} trigger={trigger}/>
            <InputField label='Phone' name='phone' setFocus={setPhoneFocus} focus = {phoneFocus} register={register} errors={errors} trigger={trigger}/>
            <div className="relative">
              <label
                onClick={() => setAddressFocus(true)}
                className={`absolute duration-500 ease-in-out left-2    ${
                  addressFocus || errors.address
                    ? "bottom-16 text-green font-semibold"
                    : "bottom-10 text-sm text-brown"
                }`}
                htmlFor=""
              >
                Address
              </label>

              <textarea
                onFocus={() => setAddressFocus(true)}
                onInput={handleTextareaChange}
                className={`w-full px-4 py-2 outline-none bg-[#F9F6EE] rounded-md`}
                type="text"
                style={{ height: textareaHeight }}
                {...register("address")}
              />
              {errors.address && (
                <span className="text-red text-xs absolute left-5 -bottom-2  ">
                  {errors.address.message}
                </span>
              )}
            </div>
            <InputField label='Create Password' type ='password' name='createPass' setFocus={setCreatePassFocus} focus = {createPassFocus} register={register} errors={errors} trigger={trigger}/>
            <InputField label='Match password' type ='password' name='matchPass' setFocus={setMatchPassFocus} focus = {matchPassFocus} register={register} errors={errors} trigger={trigger}/>
          </section>
          <div className="text-white hover:text-green text-center mt-10 btn w-52 rounded-lg px-4 py-2 hover:border-green border-2 border-brown bg-brown cursor-pointer mx-auto">
            <button
              className=" font-medium text-base text-center  "
              type="submit"
            >
              Sign Up
            </button>
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
