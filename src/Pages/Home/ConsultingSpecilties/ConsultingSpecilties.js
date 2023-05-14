import React from 'react';
import Title from '../../../Components/Title/Title';
import { searchInfos } from "../PopularSearches/PopularSearchesInfo";
import TreatmentCategoryCard from '../../../Components/Card/TreatmentCategoryCard/TreatmentCategoryCard';
import Details from '../../../Components/Details/Details';

const ConsultingSpecilties = () => {
    return (
        <div className='w-10/12 mx-auto mb-32 '>
            <Title design='text-center' title='Our Consulting Specialties'/>
            <Details design='text-center w-9/12 mx-auto mt-5'  details='Ask a doctor online and get quick medical advice for your health queries or visit our hospitals. Our medical panel consists of over 3500+ doctors from 80+ specialities'/>
            <div className='flex flex-wrap justify-between gap-4 mt-14'>
                {
                    searchInfos.specialties.map(data=><TreatmentCategoryCard design='w-52 h-32' imgDesign='w-20 h-20' data={data}/>)
                }
            </div>
        </div>
    );
};

export default ConsultingSpecilties;