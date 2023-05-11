import React from 'react';
import Title from '../../../Components/Title/Title';
import Details from '../../../Components/Details/Details';
import call from '../../../Assests/onlineconsultancy/call.jpg'

const StartOnlineConsultancy = () => {
    return (
        <div className='w-9/12 mx-auto flex justify-between mb-32'>
            <img className='w-96' src={call} alt=''/>
            <div className=''>
                <Title title='Start an online chat consultation with a doctor'/>
                <Details design='text-sm' details='Post unlimited follow-ups to the doctor for the next 50 or 100 hours by picking one of out #iclinic100hrs chat services.'/>
            </div>
        </div>
    );
};

export default StartOnlineConsultancy;