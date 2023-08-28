import React from 'react';
import { symptomInformations } from './SymptomsInfo';
import Title from '../../../Components/Title/Title';

const Symptoms = () => {
    return (
        <div className='text-center'>
            <Title design="title text-center text-base text-brown" title="Search by Symtopms" />
            <div className='h-screen overflow-auto'>
            {
                symptomInformations.map((info,i)=><div key={i} className='flex items-center gap-5 py-6 px-2 my-10 border-2 border-light-gray'>
                    <img className='w-14' src={info.img} alt='symptoms' />
                    <p className="text-brown font-bold">{info.name}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Symptoms;