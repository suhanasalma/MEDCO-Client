import React, { useRef, useState } from "react";
import { VscChromeClose, VscTrash } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../Components/InputField/InputField";
import AuthSideBar from "../Auth/AuthSideBar";
import { useSelector } from "react-redux";
import "./Register.css";
import FirebaseLogin from "../FirebaseLogin/FirebaseLogin";
import selectImage from "../../../Assests/Logo/selectimages.png";

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
  const [selectedImage, setSelectedImage] = useState(selectImage);
  const fileInputRef = useRef(null);

  const registrationSchema = useSelector(
    (state) => state?.validation?.validationSchema
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const handleRegistration = (data) => {
    const submittedData = {
      ...data,
      selectedImage
    }
    console.log(submittedData);
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
  const displaySelectedImage = (e) => {
    const files = e.target.files
    if (files && files[0] && files[0].size < 240000) {
          const reader = new FileReader();
          reader.onload = function (event) {
            setSelectedImage(event.target.result);
          };
          reader.readAsDataURL(files[0]);
    } else {
        window.prompt('file size is bigger then 3kb')
        fileInputRef.current.value = "";
        setSelectedImage(selectImage);
    }
  };

  const deleteImage = () => {
    setSelectedImage(selectImage);
    fileInputRef.current.value = "";
  };

  return (
    <div
      className={`w-full md:w-auto min-h-[500px] max-h-[500px] flex my-10 duration-1000 ease-in-out  mx-10 lg:mx-0 
      ${signIn ? "opacity-0 z-0 " : "z-10 opacity-100"}`}
    >
      <AuthSideBar
        setSignIn={setSignIn}
        signIn={signIn}
        title="Welcome Back"
        details=" To keep connected with us please login with your email"
        button="Sign In"
      />

      <div
        className={`w-full sm:w-7/12 overflow-scroll bg-white p-10 duration-1000 ease-in-out  ${
          signIn ? " sm:-translate-x-[71%]" : ""
        }`}
      >
        <div className="flex justify-end ">
          <VscChromeClose className="font-bold text-2xl" onClick={onClose} />
        </div>
        <h1 className="text-center mb-5 font-bold text-green text-xl">
          Create Account
        </h1>
        <FirebaseLogin />

        <form className="" onSubmit={handleSubmit(handleRegistration)}>
          <section
            className=" grid grid-cols-2 
          sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10 items-start registration"
          >
            {formInputs?.map((field, i) => (
              <InputField
                key={i}
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
                disabled={signIn}
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
          <section className="relative mt-10">
            <div className="image-input h-32 w-32">
              <label
                htmlFor="upload-image"
                className="image-input-label w-full h-full mx-auto"
              >
                <img
                  alt="select"
                  id="selected-image"
                  className="w-full h-full object-cover selected-image"
                  src={selectedImage}
                />
              </label>
              <input
                accept=".jpg, .jpeg, .png"
                ref={fileInputRef}
                //  {...register("img")}
                type="file"
                id="upload-image"
                className="image-input-field"
                onChange={(e) => displaySelectedImage(e)}
              />
            </div>
           
              <VscTrash
                onClick={deleteImage}
                className="absolute -top-3 left-0 font-bold text-white w-6 h-6  border-2 rounded-full  bg-red flex items-center justify-center"
              />

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
