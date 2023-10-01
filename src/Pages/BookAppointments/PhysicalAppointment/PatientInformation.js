import React from "react";
import { useState } from "react";
import { VscChromeClose, VscTrash } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import InputField from "../../../Components/InputField/InputField";

const PatientInformation = () => {
  const [firstNameFocus, setfirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [hasBeforeAppointment, setHasBeforeAppointment] = useState(false);
  const [doctorCodeFocus, setDoctorCodeFocus] = useState(false);
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
      name: "phone",
      label: "Phone",
      setFocusFunction: setPhoneFocus,
      settedFoucs: phoneFocus,
    },
    {
      name: "email",
      label: "Email",
      setFocusFunction: setEmailFocus,
      settedFoucs: emailFocus,
    },
  ];
  const handleInformation = (data) => {
    const submittedData = {
      ...data,
    };
    console.log(submittedData);
    reset();
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit(handleInformation)}>
        <section
          className=" grid grid-cols-2 
          sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10 items-start Information"
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
              // disabled={signIn}
            />
          ))}
           <div
          onClick={() => setHasBeforeAppointment(!hasBeforeAppointment)}
          className="flex items-center cursor-pointer text-brown"
        >
          <div className="relative rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
            <input
              checked={hasBeforeAppointment}
              type="checkbox"
              className="opacity-0 absolute rounded-full  cursor-pointer"
            />
            {hasBeforeAppointment && (
              <svg
                className=" fill-current w-3 h-3 text-brown pointer-events-none"
                viewBox="0 0 20 20"
                fill="#af976d"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </div>
          <p>Have you ever booked appointment with this doctor</p>
        </div>
        <div>
            <InputField
              key="doctorCode"
              label="Doctor Code"
              name="doctorCode"
              setFocus= {setDoctorCodeFocus}
              focus={doctorCodeFocus}
              register={register}
              errors={errors}
              trigger={trigger}
              required = {hasBeforeAppointment}
              // disabled={signIn}
            />
        </div>
        <div>
            <p className="text-brown">Date of birth</p>
            <input className="border-2 border-light-brown bg-light-brown" type="date"/>
        </div>
        </section>
       <button>SUbmit</button>
      </form>
    </div>
  );
};

export default PatientInformation;
