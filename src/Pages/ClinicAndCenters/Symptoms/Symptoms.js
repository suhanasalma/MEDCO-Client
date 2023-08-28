import React from 'react';
import { symptomInformations } from './SymptomsInfo';
import Title from '../../../Components/Title/Title';

const Symptoms = () => {
    return (
        <div className='text-center'>
            <Title design="title text-center text-base" title="Search by Symtopms" />
            {
                symptomInformations.map((info,i)=><div key={i} className='flex items-center gap-5 py-8 px-2 my-10 shadow-md shadow-green bg-light-green'>
                    <img className='w-10 h-10' src={info.img} alt='symptoms' />
                    <p>{info.name}</p>
                </div>)
            }
            
        </div>
    );
};

export default Symptoms;