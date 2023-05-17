import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import drugs from "../../../Assests/specialService/hotel.png";
import adhd from "../../../Assests/HomeCarousel/ADHD.jpg";
import diabetics from "../../../Assests/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../Assests/HomeCarousel/pregnancy.jpg";
import blood from "../../../Assests/HomeCarousel/blood.jpeg";
import volunter from "../../../Assests/HomeCarousel/volunter.jpg";
import ambulance from "../../../Assests/specialService/ambulance.jpg";
import hotel from "../../../Assests/specialService/hotel.png";
import doctors from "../../../Assests/specialService/doctors.jpg";
import gift from "../../../Assests/specialService/gitCard.jpg";
import consultaion from "../../../Assests/specialService/consultation.jpg";
import covid from "../../../Assests/specialService/covid.png";
import pharmacy from "../../../Assests/specialService/pharmacy.jpg";

import "./SpecialServices.css";


const HomeSpecialServices = () => {
    const services = [
      {
        name: "",
        img: drugs,
        class: "one",
        divDesign: "w-20 h-20 object-cover rounded-full",
      },
      {
        name: "",
        img: diabetics,
        class: "two",
        divDesign: "w-full h-full object-cover object-top",
      },
      {
        name: "",
        img: pregnancy,
        class: "three",
      },
      {
        name: "",
        img: hotel,
        class: "four",
      },
      {
        name: "",
        img: volunter,
        class: "five",
      },
      {
        name: "",
        img: blood,
        class: "six",
      },
      {
        name: "",
        img: volunter,
        class: "seven",
      },
    ];
    const [service,setService] = useState()
  return (
    <section className="w-10/12 mx-auto mb-32">
      <div className="space-y-5">
        <Title title="Our Special Services" />
        <Details
          design="text-sm w-4/6"
          details='Our patients are served by over 900 nurses and over 1,200 doctors and dentists, covering 55 sub-specialties. The Red Cross gives Bumrungrad its top classification of "A" – defined as "a tertiary care center which should be able to provide quality care in all medical specialties including invasive cardiology, cardiac and neurosurgery."'
        />
      </div>
      <article className="flex justify-between items-center gap-20">
        <section className="w-2/6">
          <img src={doctors} alt=""></img>
        </section>
        <section className="wrapper w-4/6 relative">
          <div classNam="one ">
            <img src={doctors} className="" alt=""></img>
          </div>
          <div className="two img">
            <img src={ambulance} alt=""></img>
          </div>
          <div className="three">
            <img src={gift} alt=""></img>
          </div>
          <div className="four img">
            <img src={hotel} alt=""></img>
          </div>
          <div className="five">
            <img src={pharmacy} alt=""></img>
          </div>
          <div className="six">
            <img src={covid} alt=""></img>
          </div>
          <div className="seven">
            <img src={consultaion} alt=""></img>
          </div>
        </section>
      </article>
    </section>
  );
};

export default HomeSpecialServices;
