import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import { Link } from "react-router-dom";
import docImg1 from '../../../Assests/OurDoctors/1.jpg'
import docImg2 from '../../../Assests/OurDoctors/2.jpg'
import docImg3 from '../../../Assests/OurDoctors/3.jpg'
import docImg4 from '../../../Assests/OurDoctors/4.jpg'
import docImg5 from '../../../Assests/OurDoctors/5.jpg'
import docImg6 from '../../../Assests/OurDoctors/6.jpg'
import docImg7 from '../../../Assests/OurDoctors/7.jpg'

const OurDoctors = () => {
  
    const outDoctors = [
        {
            name:"DR. James Wellington",
            department:"Orthpedy",
            img:docImg1
        },
        // {
        //     name:"DR. James Wellington",
        //     department:"Orthpedy",
        //     img:docImg1
        // },
        // {
        //     name:"DR. James Wellington",
        //     department:"Orthpedy",
        //     img:docImg1
        // },
        // {
        //     name:"DR. James Wellington",
        //     department:"Orthpedy",
        //     img:docImg1
        // },
        // {
        //     name:"DR. James Wellington",
        //     department:"Orthpedy",
        //     img:docImg1
        // },
        // {
        //     name:"DR. James Wellington",
        //     department:"Orthpedy",
        //     img:docImg1
        // },
        // {
        //     name:"DR. James Wellington",
        //     department:"Orthpedy",
        //     img:docImg1
        // },
    ]
    const [selectedDoctor,setSelectedDoctor] = useState([outDoctors[0]])
  return (
    <div className="flex w-9/12 mx-auto justify-between mt-10 mb-20">
      <div>
        <p>Our Doctors</p>
        <Title title="Qualified Doctors" />
        <Details details="Handle directly by general doctors and professional and experienced specialist doctors" />
        <div>
          <p></p>
          <Title title="" />
          <Link>Read More </Link>
        </div>
      </div>
      <div>
        {
            selectedDoctor.map(doctor=>
            <section>
                <div className="border-[16px] border-brown w-96 h-96  rounded-s-full  overflow-hidden">
                <img className="w-full " src={doctor.img} alt=""/>
            </div>
                 
            <button className="bg-brown rounded-full w-10 h-10 text-white font-bold text-2xl">  ❯
            </button>
            </section>
            
            )
        }
      </div>
    </div>
  );
};

export default OurDoctors;
