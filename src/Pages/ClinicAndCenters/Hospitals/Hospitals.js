import React from 'react';
import Title from '../../../Components/Title/Title';
import { symptomInformations } from '../Symptoms/SymptomsInfo';

const Hospitals = () => {
    return (
        <div>
            <Title design="title text-center text-base" title="Search by Hospitals" />
            <div className='h-screen overflow-auto'>
            {
                symptomInformations.map((info,i)=><div key={i} className='w-10/12 mx-auto md:w-72 lg:w-96 xl:w-full flex items-center gap-5 py-6 px-2 my-10 border-2 border-light-gray'>
                    <img className='w-14' src={info.img} alt='symptoms' />
                    <p className='text-brown  font-bold'>{info.name}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Hospitals;