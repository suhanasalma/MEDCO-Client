import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";

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
           <div className="grid grid-cols-3 gap-10">
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
               {...register("address")}
               placeholder="address"
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
           </div>
         </section>
         <section>
           <p className="font-bold text-lg my-5">Booking Date</p>
           <div className="grid grid-cols-2 gap-10">
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-lg"
               {...register("category", { required: true })}
             >
               <option value="">Specialization</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2  rounded-lg"
               {...register("category", { required: true })}
             >
               <option value="">Expert</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-lg"
               {...register("category", { required: true })}
             >
               <option value="">Date</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
             <select
               className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2  rounded-lg"
               {...register("category", { required: true })}
             >
               <option value="">Time</option>
               <option value="A">Option A</option>
               <option value="B">Option B</option>
             </select>
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