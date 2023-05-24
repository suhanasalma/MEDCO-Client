import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";
import DateTime from "./DateTime";



const BloodDoner = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
 


  return (
    <article className="w-9/12">
      <Title design="text-white" title="Be a Blood Doner" />
      <form
        className="mt-10"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <section>
          <p className="font-bold text-lg my-5">Your Information</p>
          <div className="grid grid-cols-2 gap-10">
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
              <label for="man">Man</label>
                <input
                type="radio"
                id="woman"
                name="gender"
                value="women"
              />  <label for="woman">Woman</label>
            </div>
            <div className="">
              <p>Have ever had a positive test for HIV (AIDS virus)</p>
                <input type="radio" id="yes" name="HIV" value="yes" /> 
              <label for="yes">Yes</label>
                <input type="radio" id="no" name="HIV" value="no" /> 
              <label for="no">No</label>
            </div>
            <div className="">
              <p>Have you donated before</p>
                <input type="radio" id="yes" name="HIV" value="yes" /> 
              <label for="yes">Yes</label>
                <input type="radio" id="no" name="HIV" value="no" /> 
              <label for="no">No</label>
            </div>
            <div className="">
              <p>What is your blood type: </p> 
              <select
                className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-1  rounded-lg w-full"
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
            <div>
              <p>When is Your BirthDay</p>
              <DateTime title="Select Birthday" />
            </div>
            <div>
              <p>Last Donation Day</p>
              <DateTime title="Select Day" />
            </div>
          </div>
        </section>
        <p>{data}</p>
        <input
          className="ring-offset-2 ring-4 mt-10 w-52 rounded-full px-4 py-2"
          type="submit"
        />
      </form>
    </article>
  );
};

export default BloodDoner;
