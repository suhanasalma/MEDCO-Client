import React from 'react';
import Title from '../../../Components/Title/Title';
import Card from '../../../Components/Card/Card';
import doctor from '../../../Assests/MainService/doctor.png'
import hotel from '../../../Assests/MainService/hotel.png'
import hospital from '../../../Assests/MainService/hospital.png'
import pharmacy from '../../../Assests/MainService/pharmacy.png'
import { Link } from 'react-router-dom';
import Details from '../../../Components/Details/Details';
import './HomeMainService.css'


const HomeMainService = () => {
    const mainServices = [
        {
            name:"Chat with doctor",
            image:doctor,
            details:'Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered'

        },
        {
            name:"Health Store",
            image:pharmacy,
            details:'Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered',
        },
        {
            name:"Visit Hospital",
            image:hospital,
            details:'Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered'

        },
        {
            name:"Book a Hotel",
            image:hotel,
            details:'Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered',

        },
        {
            name:"Visit Hospital",
            image:hospital,
            details:'Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered'

        },
        {
            name:"Book a Hotel",
            image:hotel,
            details:'Now you can connect with the doctor from anywhere. There is no need to doubt the quality of consultation and treatment offered',

        },
    ]
    return (
        <div className='my-20 w-10/12 mx-auto '>
            <Title title="Our Main Services" design='text-4xl text-center'/>
           {/* <div className='flex gap-10 mt-10 '>
           {
                mainServices.map((card,i) => <Card key={i} details={card.details} title={card.name} imgDesign='w-20 mx-auto' CardDesign={`shadow-xl hover:bg-light-green space-y-5 p-4 h-96 flex flex-col justify-center rounded-lg hover:-translate-y-6 transition ease-in delay-75`} image={card.image} titleDesign='font-bold text-lg' detailsDesign='text-sm'/>)
            }
           </div> */}
           <div className='container mt-10 mb-32'>
            {
                mainServices.map((card,i)=><div key={i} className='card'>
                    <div className='box'>
                        <Link  className='content'>
                        <img className="w-20 mx-auto" src={card.image} alt=''/>
                        <Title title={card.name} design='font-bold text-lg'/>
                        <Details details={card.details} design='text-sm'/>

                        </Link>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default HomeMainService;