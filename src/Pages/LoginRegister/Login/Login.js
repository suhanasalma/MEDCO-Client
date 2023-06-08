import React, { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import AuthSideBar from "../Auth/AuthSideBar";
import { useForm } from "react-hook-form";
import InputField from "../../../Components/InputField/InputField";
const Login = ({ signIn, setSignIn, onClose }) => {
  const [emailFocus, setEmailFocus] = useState(false);
   const [passFocus, setPassFocus] = useState(false);
   const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

   const handleLogin = (data) => {
     reset();
   };

    const formInputs = [
      {
        name: "email",
        label: "Email",
        setFocusFunction: setEmailFocus,
        settedFoucs: emailFocus,
      },
      {
        name: "password",
        label: "Password",
        setFocusFunction: setPassFocus,
        settedFoucs: passFocus,
        fieldType: "password",
      },
    ];
  return (
    <div
      className={`w-11/12  md:w-auto min-h-[500px] flex my-10 duration-1000 ease-in-out  mx-20 lg:mx-0 absolute ${
        signIn ? "z-10 opacity-1" : "opacity-0 z-0"
      }`}
    >
      <AuthSideBar
        setSignIn={setSignIn}
        signIn={signIn}
        title="Create Account"
        details=" To keep connected with us please sign with personal details"
      />

      <div
        className={`w-full sm:w-7/12 bg-white p-10 duration-1000 ease-in-out ${
          signIn ? " sm:-translate-x-[71%]" : ""
        }`}
      >
        <div className="flex justify-end">
          <VscChromeClose className="font-bold text-2xl" onClick={onClose} />
        </div>
        <h1 className="text-center mb-5 font-bold text-green text-xl">Login</h1>
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
        <form className="mt-10 grid grid-cols-1 gap-10">
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
              disabled={!signIn}
            />
          ))}
        </form>
        <div className="text-white hover:text-green text-center mt-10 btn w-52 rounded-lg px-4 py-2 hover:border-green border-2 border-brown bg-brown cursor-pointer mx-auto">
          <button  disabled={!signIn} className=" font-bold text-lg text-center" type="submit">
            Sign In
          </button>
        </div>
        <div className="font-bold text-green text-xs text-center sm:hidden">
          <span className="font-medium">already have an account? </span>
          <button  disabled={!signIn}
            onClick={() => setSignIn(!signIn)}
            className="border-b-2 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
