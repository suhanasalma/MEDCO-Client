import React, { useEffect, useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../Components/InputField/InputField";
import AuthSideBar from "../Auth/AuthSideBar";
import { useSelector } from "react-redux";
import "./Register.css";

const Register = ({ signIn, setSignIn, onClose }) => {
  const [firstNameFocus, setfirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [createPassFocus, setCreatePassFocus] = useState(false);
  const [matchPassFocus, setMatchPassFocus] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const registrationSchema = useSelector(
    (state) => state?.validation?.validationSchema
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const handleRegistration = (data) => {
    reset();
  };

  const handleTextareaChange = (event) => {
    setAddressFocus(true);
    trigger("address");
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
    setTextareaHeight(event.target.style.height);
  };

  const formInputs = [
    {
      name: "firstName",
      label: "First Name",
      setFocusFunction: setfirstNameFocus,
      settedFoucs: firstNameFocus,
    },
    {
      name: "lastName",
      label: "Last Name",
      setFocusFunction: setLastNameFocus,
      settedFoucs: lastNameFocus,
    },
    {
      name: "age",
      label: "Age",
      setFocusFunction: setAgeFocus,
      settedFoucs: ageFocus,
    },
    {
      name: "email",
      label: "Email",
      setFocusFunction: setEmailFocus,
      settedFoucs: emailFocus,
    },
    {
      name: "phone",
      label: "Phone",
      setFocusFunction: setPhoneFocus,
      settedFoucs: phoneFocus,
    },
    {
      name: "createPass",
      label: "Create password",
      fieldType: "password",
      setFocusFunction: setCreatePassFocus,
      settedFoucs: createPassFocus,
    },
    {
      name: "matchPass",
      label: "Match password",
      fieldType: "password",
      setFocusFunction: setMatchPassFocus,
      settedFoucs: matchPassFocus,
    },
  ];

  return (
    <div
      className={`w-full md:w-auto min-h-[500px] flex my-10 duration-1000 ease-in-out  mx-10 lg:mx-0 
      ${signIn ? "opacity-0 z-0 " : "z-10 opacity-100"}`}
    >
      <AuthSideBar
        setSignIn={setSignIn}
        signIn={signIn}
        title="Welcome Back"
        details=" To keep connected with us please login with your email"
      />

      <div
        className={`w-full sm:w-7/12 bg-white p-10 duration-1000 ease-in-out  ${
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

        <form className="" onSubmit={handleSubmit(handleRegistration)}>
          <section
            className="mt-10  grid grid-cols-2 
          sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10 items-start registration"
          >
            {formInputs.map((field) => (
              <InputField
                label={field.label}
                name={field.name}
                setFocus={field.setFocusFunction}
                focus={field.settedFoucs}
                register={register}
                errors={errors}
                trigger={trigger}
                type={field.fieldType}
                disabled={signIn}
              />
            ))}

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
                disabled={!signIn}
                onFocus={() => {
                  setAddressFocus(true);
                  trigger("address");
                }}
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
          </section>

          <div className="text-white hover:text-green text-center mt-10 btn w-52 rounded-lg px-4 py-2 hover:border-green border-2 border-brown bg-brown cursor-pointer mx-auto">
            <button
              disabled={signIn}
              className=" font-medium text-base text-center  "
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="font-bold text-green text-xs text-center sm:hidden">
          <span className="font-medium">already have an account? </span>
          <button
            disabled={signIn}
            onClick={() => setSignIn(!signIn)}
            className="border-b-2 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
