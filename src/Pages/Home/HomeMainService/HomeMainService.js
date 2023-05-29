import React from 'react';
import Title from '../../../Components/Title/Title';
import doctor from '../../../Assests/MainService/doctor.png'
import hotel from '../../../Assests/MainService/hotel.png'
import hospital from '../../../Assests/MainService/hospital.png'
import pharmacy from '../../../Assests/MainService/pharmacy.png'
import ambulance from '../../../Assests/MainService/ambulance.png'
import { Link } from 'react-router-dom';
import Details from '../../../Components/Details/Details';
import './HomeMainService.css'


const HomeMainService = () => {
    const mainServices = [
      {
        name: "Chat with doctor",
        image: doctor,
        details:
          "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
      },
      {
        name: "24/7 Ambulance ",
        image: ambulance,
        details:
          "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
      },
      {
        name: "Visit Hospital",
        image: hospital,
        details:
          "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
      },
      {
        name: "Book a Hotel",
        image: hotel,
        details:
          "Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered",
      },
    ];
    return (
      <div className="my-20 w-10/12 mx-auto">
        <Title title="Our Main Services" design="title text-4xl text-center" />
        <Details
          details="In times like today your health is very important, Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered"
          design="text-sm text-gray text-center mb-5 sm:w-7/12 mx-auto my-5"
        />
        <div className="container mt-10 mb-32 xl:justify-between justify-center xl:flex-nowrap md:flex-wrap md:flex grid sm:grid-cols-2 grid-cols-1 justify-items-center">
          {mainServices.map((card, i) => (
            <div key={i} className="card">
              <div className="box">
                <Link className="content">
                  <img className="w-20 mx-auto" src={card.image} alt="" />
                  <p className="font-bold text-lg my-5 text-green">
                    {card.name}
                  </p>
                  <Details details={card.details} design="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default HomeMainService;