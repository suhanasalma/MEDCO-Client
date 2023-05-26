import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";
import DateTime from "./DateTime";
import SecondBloodForm from "./SecondBloodForm";

const BloodDoner = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const countries = [
    {
      name: "Bangladesh",
    },
    {
      name: "Australia",
    },
    {
      name: "Canada",
    },
  ];
  const cities = {
    Bangladesh: [
      {
        id: "Bangladesh",
        name: "Dhaka",
      },
      {
        id: "Bangladesh",
        name: "Khulna",
      },
      {
        id: "Bangladesh",
        name: "Barishal",
      },
    ],

    Australia: [
      {
        id: "Australia",
        name: "Melbourne",
      },
      {
        id: "Australia",
        name: "Sydney",
      },
      {
        id: "Australia",
        name: "Brisbane",
      },
    ],

    Canada: [
      {
        id: "Canada",
        name: "Toronto",
      },
      {
        id: "Canada",
        name: "Halifax",
      },
      {
        id: "Canada",
        name: "Ontario",
      },
    ],
  };
  const states = {
    Dhaka: [
      {
        name: "Mohammadpur",
      },
      {
        name: "Mirpur",
      },
      {
        name: "Dhanmondi",
      },
    ],

    Khulna: [
      {
        name: "Melbourne",
      },
      {
        name: "Sydney",
      },
      {
        name: "Brisbane",
      },
    ],

    Barishal: [
      {
        id: "Canada",
        name: "Toronto",
      },
      {
        id: "Canada",
        name: "Halifax",
      },
      {
        id: "Canada",
        name: "Ontario",
      },
    ],
    Melbourne: [
      {
        name: "Mohammadpur",
      },
      {
        name: "Mirpur",
      },
      {
        name: "Dhanmondi",
      },
    ],

    Sydney: [
      {
        name: "Melbourne",
      },
      {
        name: "Sydney",
      },
      {
        name: "Brisbane",
      },
    ],

    Brisbane: [
      {
        id: "Canada",
        name: "Toronto",
      },
      {
        id: "Canada",
        name: "Halifax",
      },
      {
        id: "Canada",
        name: "Ontario",
      },
    ],
    Toronto: [
      {
        name: "Mohammadpur",
      },
      {
        name: "Mirpur",
      },
      {
        name: "Dhanmondi",
      },
    ],

    Halifax: [
      {
        name: "Melbourne",
      },
      {
        name: "Sydney",
      },
      {
        name: "Brisbane",
      },
    ],

    Ontario: [
      {
        id: "Canada",
        name: "Toronto",
      },
      {
        id: "Canada",
        name: "Halifax",
      },
      {
        id: "Canada",
        name: "Ontario",
      },
    ],
  };

  const [selectedCity, setSelectedCity] = useState(cities["Bangladesh"]);
  const [selectedState, setSelectedState] = useState(states["Dhaka"]);
  const [secondPage, setSecondPage] = useState(false);

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <article className="flex-1 lg:p-4">
      <Title design="text-white" title="Be a Blood Doner" />
      <form className="mt-10" onSubmit={handleSubmit(handleForm)}>
        <section className={`${secondPage ? "hidden" : ""}`}>
          <p className="font-bold text-lg my-5">Your Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            <input
              className="ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("fullName")}
              placeholder="Full name"
            />
            <input
              className=" ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("PhoneNumber")}
              placeholder="+880 15....."
            />
            <input
              className="ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("email")}
              placeholder="abc123@gmail.com"
            />
            <input
              className="ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("age")}
              placeholder="18 Years Old"
            />
            <input
              className="ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("weight")}
              placeholder="50 kg"
            />
            <input
              className="ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("occupation")}
              placeholder="Occupation"
            />
            <div className="">
              <p>Gender</p>
                <input type="radio" id="man" name="gender" value="man" /> 
              <label htmlFor="man">Man</label>
                <input
                type="radio"
                id="woman"
                name="gender"
                value="women"
              />  <label htmlFor="woman">Woman</label>
            </div>
            <div className="">
              <p>Have ever had a positive test for HIV (AIDS virus)</p>
                <input type="radio" id="yes" name="HIV" value="yes" /> 
              <label htmlFor="yes">Yes</label>
                <input type="radio" id="no" name="HIV" value="no" /> 
              <label htmlFor="no">No</label>
            </div>
            <div className="">
              <p>Have you donated before</p>
                <input type="radio" id="yes" name="HIV" value="yes" /> 
              <label htmlFor="yes">Yes</label>
                <input type="radio" id="no" name="HIV" value="no" /> 
              <label htmlFor="no">No</label>
            </div>

            <div>
              <p>What is your blood type: </p> 
              <div className="flex">
                <select
                  className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-1  rounded-lg w-full "
                  name="blood"
                  id="blood"
                  placeholder="Select"
                >
                  <option value="volvo">Select</option>
                  <option value="volvo">A+</option>
                  <option value="saab">A-</option>
                  <option value="mercedes">B+</option>
                  <option value="audi">B-</option>
                  <option value="volvo">AB+</option>
                  <option value="saab">AB-</option>
                  <option value="mercedes">O+</option>
                  <option value="audi">O-</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <SecondBloodForm
          secondPage={secondPage}
          setSelectedCity={setSelectedCity}
          countries={countries}
          cities={cities}
          setSelectedState={setSelectedState}
          selectedCity={selectedCity}
          states={states}
          selectedState={selectedState}
          data={data}
          setSecondPage={setSecondPage}
          // firstPage={firstPage}
        />

        <div className="flex gap-2 mt-5">
          <p
            className={`${
              !secondPage ? "text-white font-bold" : "text-light-gray "
            }`}
            onClick={() => setSecondPage(false)}
          >
            1
          </p>
          <p>/</p>
          <p
            onClick={() => setSecondPage(true)}
            className={`${secondPage?"text-white font-bold":"text-light-gray "}`}
          >
            2
          </p>
        </div>
      </form>
    </article>
  );
};

export default BloodDoner;
