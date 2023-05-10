import React from 'react';
import Title from '../../../Components/Title/Title';
import Card from '../../../Components/Card/Card';
import doctor from '../../../Assests/MainService/doctor.png'
import hotel from '../../../Assests/MainService/hotel.png'
import hospital from '../../../Assests/MainService/hospital.png'
import pharmacy from '../../../Assests/MainService/pharmacy.png'


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
            class:'translate-y-6'

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
            class:'translate-y-6'

        },
    ]
    return (
        <div className='my-20 w-9/12 mx-auto '>
            <Title title="Our Main Services" design='text-green font-bold text-4xl text-center'/>
           <div className='flex gap-10 mt-10 '>
           {
                mainServices.map(card=> <Card details={card.details} title={card.name} imgDesign='w-20 mx-auto' CardDesign={`shadow-xl hover:bg-[#E5F6DF] space-y-5 p-4 h-96 flex flex-col justify-center rounded-lg hover:${card.class?card.class:'-translate-y-6'} transition ease-in delay-75`} image={card.image} titleDesign='font-bold text-lg' detailsDesign='text-sm text-gray'/>)
            }
           </div>
        </div>
    );
};

export default HomeMainService;