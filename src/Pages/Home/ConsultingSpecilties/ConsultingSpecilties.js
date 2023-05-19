import React from 'react';
import Title from '../../../Components/Title/Title';
import { searchInfos } from "../PopularSearches/PopularSearchesInfo";
import TreatmentCategoryCard from '../../../Components/Card/TreatmentCategoryCard/TreatmentCategoryCard';
import Details from '../../../Components/Details/Details';

const ConsultingSpecilties = () => {
    return (
        <div className='w-10/12 mx-auto mb-32 '>
            <Title design='text-center' title='Our Consulting Specialties'/>
            <Details design='text-center sm:w-9/12 mx-auto mt-5'  details='Ask a doctor online and get quick medical advice for your health queries or visit our hospitals. Our medical panel consists of over 3500+ doctors from 80+ specialities'/>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-14'>
                {
                    searchInfos.specialties.map((data,i)=><TreatmentCategoryCard key={i} design='w-52 h-32' imgDesign='w-20 h-20' data={data}/>)
                }
            </div>
            <div className='flex items-center justify-center my-5'>
                {
                    [1,2,3,4].map((x,i)=><button key={i} className='w-4 h-4 rounded-full bg-brown hover:bg-green mx-2'></button>)
                }
            </div>
        </div>
    );
};

export default ConsultingSpecilties;