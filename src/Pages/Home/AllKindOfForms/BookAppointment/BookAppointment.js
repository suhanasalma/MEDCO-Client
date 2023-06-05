import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../../../../Components/Title/Title";

const BookAppointment = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleForm = (data) => {
    console.log("data");
  };
  return (
    <article className="flex-1">
      <Title design="text-white" title="Make an appointment with a doctor" />
      <form className="mt-10" onSubmit={handleSubmit(handleForm)}>
        <section>
          <p className="font-bold text-lg my-5">About Yourself</p>
          <div className="grid lg:grid-cols-2 gap-10">
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
            <input className="outline-none w-0 hidden lg:inline" />
            <input
              className="ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-full text-[black]"
              {...register("email")}
              placeholder="abc123@gmail.com"
            />
          </div>
        </section>
        <section>
          <p className="font-bold text-lg my-5">Booking Date</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-lg overflow-hidden"
              {...register("Specialization", { required: true })}
            >
              <option className=" border-4 border-red" value="">Specialization</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2  rounded-lg"
              {...register("Expert", { required: true })}
            >
              <option value="">Expert</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2 rounded-lg"
              {...register("Date", { required: true })}
            >
              <option value="">Date</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-2  rounded-lg"
              {...register("Time", { required: true })}
            >
              <option value="">Time</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
          </div>
        </section>
        <input
          className="ring-offset-2 ring-4 mt-10 w-52 rounded-full px-4 py-2"
          type="submit"
        />
      </form>
    </article>
  );
};

export default BookAppointment;
