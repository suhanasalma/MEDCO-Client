import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";
import Select from "react-select";

const BloodDoner = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const diseases = [
    {
      name: "Heart Disease",
    },
    {
      name: "Cancer",
    },
    {
      name: "Diabetes",
    },
    {
      name: "Hepatitis B/C",
    },
    {
      name: "Sexually Transmitted Diseases",
    },
    {
      name: "Typhoid (last on year)",
    },
    {
      name: "Lung Disease",
    },
    {
      name: "Tuberculosis",
    },
    {
      name: "Allergic Disease",
    },
    {
      name: "Kidney Diseases",
    },
    {
      name: "Epilepsy",
    },
    {
      name: "Abnormal Bleeding Tendency",
    },
    {
      name: "Jaundice (last one year)",
    },
    {
      name: "Malaria",
    },
    {
      name: "Fainting spells",
    },
  ];
  //  const addressRef = useRef(null)
  //  const [height,setHeight] = useState()
  // const resizeTextArea = () => {
  // 	addressRef.current.style.height = "auto";
  // 	addressRef.current.style.height = addressRef.current.scrollHeight + "px";
  // };
  // useEffect(resizeTextArea, [height]);
  // console.log(addressRef.current);
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
            {/* <textarea name="address" id="address" ref={addressRef} rows={1}
											  onChange={(e)=>setHeight(e.target.value)}
											  style={{resize: "none", overflowY: "hidden",}}
											  placeholder="Write a message"/> */}
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
                <input type="radio" id="man" name="gender" value="man" /> {" "}
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
                <input type="radio" id="yes" name="HIV" value="yes" /> {" "}
              <label for="yes">Yes</label>
                <input type="radio" id="no" name="HIV" value="no" /> {" "}
              <label for="no">No</label>
            </div>
            <div className="">
              <p>Have you donated before</p>
                <input type="radio" id="yes" name="HIV" value="yes" /> {" "}
              <label for="yes">Yes</label>
                <input type="radio" id="no" name="HIV" value="no" /> {" "}
              <label for="no">No</label>
            </div>
            <div className="">
              <p>What is your blood type: </p> {" "}
              <section className="grid grid-cols-2">
                <div>
                  <input type="radio" id="yes" name="HIV" value="yes" /> {" "}
                  <label for="yes">O +</label>
                </div>
                <div>
                  <input type="radio" id="no" name="HIV" value="no" /> {" "}
                  <label for="no">O -</label>
                </div>

                <div>
                  <input type="radio" id="yes" name="HIV" value="yes" /> {" "}
                  <label for="yes">A +</label>
                </div>

                <div>
                  <input type="radio" id="no" name="HIV" value="no" /> {" "}
                  <label for="no">A -</label>
                </div>

                <div>
                  <input type="radio" id="yes" name="HIV" value="yes" /> {" "}
                  <label for="yes">B +</label>
                </div>

                <div>
                  <input type="radio" id="no" name="HIV" value="no" /> {" "}
                  <label for="no">B -</label>
                </div>

                <div>
                  <input type="radio" id="yes" name="HIV" value="yes" /> {" "}
                  <label for="yes">AB +</label>
                </div>

                <div>
                  <input type="radio" id="no" name="HIV" value="no" /> {" "}
                  <label for="no">AB -</label>
                </div>
              </section>
            </div>
          </div>
          <div className="mt-10">
            <p>
              Do you suffer from or have suffered from any of the following
              diseases?
            </p>
            <div className="grid grid-cols-2">
              {diseases?.map((disease, i) => (
                <div>
                  <input
                    key={i}
                    type="checkbox"
                    id={disease.name}
                    name="disease"
                    value={disease.name}
                  />
                    <label for={disease.name}>{disease.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <p>
              Is there any history of surgery or blood transfusion in the past
              six months?
            </p>

            {diseases.slice(0, 3)?.map((disease, i) => (
              <div>
                <input
                  key={i}
                  type="radio"
                  id={disease.name}
                  name="disease"
                  value={disease.name}
                />
                  <label for={disease.name}>Minor</label>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p>Do You Smoke</p>

            {diseases.slice(0, 3)?.map((disease, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={disease.name}
                  name="disease"
                  value={disease.name}
                />
                  <label for={disease.name}>Minor</label>
              </div>
            ))}
          </div>
        </section>
        {/* <section>
           <p className="font-bold text-lg my-5">Booking Date</p>
           <div className="grid grid-cols-2 gap-10">
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-lg"
               {...register("department", { required: true })}
             >
               <option value="">Specialization</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2  rounded-lg"
               {...register("doctor", { required: true })}
             >
               <option value="">Expert</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-lg"
               {...register("birthday", { required: true })}
             >
               <option value="">Date</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2  rounded-lg"
               {...register("time", { required: true })}
             >
               <option value="">Time</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
           </div>
         </section> */}
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
