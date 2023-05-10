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
import ortho from '../../../Assests/OurDoctors/department/orthopedics.jpg'
import './ourDoctors.css'

const OurDoctors = () => {
  
    const ourDoctors = [
      {
        id: 0,
        name: "DR. James Wellington",
        department: "Orthpedy",
        img: docImg1,
        bg: ortho,
      },
      { id: 1, name: "DR. James", department: "Orthpedy", img: docImg2 },
      {
        id: 2,
        name: "DR. James Wellington",
        department: "Orthpedy",
        img: docImg3,
      },
      {
        id: 3,
        name: "DR. James Wellington",
        department: "Orthpedy",
        img: docImg4,
      },
      {
        id: 4,
        name: "DR. James Wellington",
        department: "Orthpedy",
        img: docImg5,
      },
      // {
      //   id: 5,
      //   name: "DR. James Wellington",
      //   department: "Orthpedy",
      //   img: docImg6,
      // },
      // {
      //   id: 6,
      //   name: "DR. James Wellington",
      //   department: "Orthpedy",
      //   img: docImg7,
      // },
    ];
    const [selectedDoctor, setSelectedDoctor] = useState([ourDoctors[0]]);
    const [selected,setSelected] = useState(false)

    const handle = (value)=>{
      setSelected(false);
      if (value[0].id == ourDoctors.length-1 ) {
        value[0].id = -1;
        console.log(value);
      }
      // else if(value[0].id == 0){
      //   value[0].id = ourDoctors.length - 1;
      // }
     
      setSelectedDoctor(value);
      setSelected(true);
    }
  return (
    <div className="flex w-9/12 mx-auto justify-between mt-10 mb-20">
      <div className="space-y-8">
        <p className="font-bold text-lg">Our Doctors</p>
        <Title
          design="text-4xl font-bold text-green"
          title="Qualified Doctors"
        />
        <Details
          design="text-gray w-96"
          details="Handle directly by general doctors and professional and experienced specialist doctors"
        />
        <div className="text-white bg border-2 w-96 h-72 rounded-s-3xl rounded-br-3xl p-10 space-y-5">
          <p className="text-2xl">{selectedDoctor[0].department}</p>
          <p className="text-3xl font-bold leading-relaxed">
            {selectedDoctor[0].name}
          </p>
          <p>
            <Link>Read More </Link>
          </p>
        </div>
      </div>
      <div className="">
        {selectedDoctor.map((doctor, i) => (
          <section key={i} className="relative">
            <div className="border-[16px] border-brown w-[30rem] h-[30rem]  rounded-s-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={doctor?.img}
                alt=""
              />
            </div>

            <button
              onClick={() => handle([ourDoctors[doctor.id + 1]])}
              className="bg-brown rounded-full w-10 h-10 text-white font-bold text-2xl absolute top-52 left-10"
            >
              ❯
            </button>
            {/* <button
              onClick={() => handle([ourDoctors[doctor.id - 1]])}
              className="bg-brown rounded-full w-10 h-10 text-white font-bold text-2xl absolute top-40 left-80"
            >
              ❮
            </button> */}
            <div className="flex gap-10 justify-end items-center mt-5">
              {ourDoctors.map((doctor) => (
                <button
                  onClick={() => handle([ourDoctors[doctor.id]])}
                  className={`${selected && "bg-green"} w-5 h-5 border-4 border-green rounded-full`}
                ></button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
