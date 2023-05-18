import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import consultation from "../../../Assests/specialService/consultation.png";
import hotel from "../../../Assests/specialService/hotel.png";
import doctors from "../../../Assests/specialService/doctors.png";
import gift from "../../../Assests/specialService/gitCard.jpg";
import period from "../../../Assests/specialService/period.jpg";
import pharmacy from "../../../Assests/specialService/pharmacy.png";
import "./SpecialServices.css";

const HomeSpecialServices = () => {
  const specialServices = [
    {
      name: "Free Weekly Consultation",
      image: consultation,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Online Pharmacy",
      image: pharmacy,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Doctors Community",
      image: doctors,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Book a Hotel",
      image: hotel,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Gift Card",
      image: gift,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
    {
      name: "Menstrual Calender",
      image: period,
      details:
        "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
    },
  ];

  return (
    <div className="my-20 w-10/12 mx-auto ">
      <Title title="Our Main Services" design="text-4xl text-center" />
      <div className="grid grid-cols-3 gap-10 justify-items-center content-center	">
        {specialServices.map((card, i) => (
          <div className="w-72 h-52 transition-all delay-150 hover:w-96 border-2" key={i}>
                <img className="w-20 h-20 object-cover" src={card.image} alt="" />
                <Title title={card.name} design="font-bold text-lg" />
                {/* <Details details={card.details} design='text-sm'/> */}
          </div>
        ))}
      </div>
      <div class="grid hover:grid-flow-row-dense grid-cols-3 grid-rows-3  gap-10">
  <div class="hover:col-span-2 w-52 bg-green ">01</div>
  <div class="hover:col-span-2  w-52 bg-green ">02</div>
  <div class=" bg-green  w-52">03</div>
  <div class=" bg-green  w-52">04</div>
  <div class=" bg-green  w-52">05</div>
</div>
    </div>
  );
};

export default HomeSpecialServices;
