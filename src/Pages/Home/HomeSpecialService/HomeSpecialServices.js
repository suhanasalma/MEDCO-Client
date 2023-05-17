import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import drugs from "../../../Assests/specialService/Drugs.png";
import adhd from "../../../Assests/HomeCarousel/ADHD.jpg";
import diabetics from "../../../Assests/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../Assests/HomeCarousel/pregnancy.jpg";
import blood from "../../../Assests/HomeCarousel/blood.jpeg";
import volunter from "../../../Assests/HomeCarousel/volunter.jpg";
import "./SpecialServices.css";

const HomeSpecialServices = () => {
    const services = [
        {
            name:'',
            img:drugs,
            class:'one'
        },
        {
            name:'',
            img:diabetics,
            class:'two'
        },
        {
            name:'',
            img:pregnancy,
            class:'three'
        },
        {
            name:'',
            img:blood,
            class:'four'
        },
        {
            name:'',
            img:volunter,
            class:'five'
        },
        {
            name:'',
            img:blood,
            class:'six'
        },
        {
            name:'',
            img:volunter,
            class:'seven'
        },
    ]
    const [service,setService] = useState()
  return (
    <section className="w-10/12 mx-auto ">
      <div className="space-y-5">
        <Title title="Our Special Services" />
        <Details
          design="text-sm w-4/6"
          details='Our patients are served by over 900 nurses and over 1,200 doctors and dentists, covering 55 sub-specialties. The Red Cross gives Bumrungrad its top classification of "A" – defined as "a tertiary care center which should be able to provide quality care in all medical specialties including invasive cardiology, cardiac and neurosurgery."'
        />
      </div>
      <article className="flex justify-between items-center gap-20">
      <section className="w-2/6">
      <img src={adhd} alt=""></img>
        </section>
      <section class="wrapper w-4/6">
        {
            services.map(service=> <div class={`${service.class}`}> 1
            <img src={adhd} alt=""></img>
          </div>)
        }
        {/* <div class="one">
          <img src={adhd} alt=""></img>
        </div>
        <div class="two">
          <img src={adhd} alt=""></img>
        </div>
        <div class="three">
          <img src={diabetics} alt=""></img>
        </div>
        <div class="four">
          <img src={diabetics} alt=""></img>
        </div>
        <div class="five">
          <img src={diabetics} alt=""></img>
        </div>
        <div class="six">
          <img src={diabetics} alt=""></img>
        </div>
        <div class="seven">
          <img src={diabetics} alt=""></img>
        </div> */}
      </section>
     
      </article>
    </section>
  );
};

export default HomeSpecialServices;
