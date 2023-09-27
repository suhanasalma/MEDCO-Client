import React, {useState} from 'react';
import DoctorSearchFields from '../DoctorSearchFields/DoctorSearchFields';
import AllDoctorCards from '../AllDoctorCards/AllDoctorCards';
import AppointmentSummery from '../../../Components/AppointmentSummery/AppointmentSummery';

const AllDoctors = () => {
    const [appointmentSummeryPage,setAppointmentSummeryPage] = useState(false)

    return (
        <div className='my-10'>
             {appointmentSummeryPage?<div className='w-11/12 sm:w-9/12 mx-auto '> <AppointmentSummery setAppointmentSummeryPage={setAppointmentSummeryPage}/></div>:<><p className='text-center text-3xl text-green'>Search Doctor, Make an Appointment</p>
            <p className='text-center text-sm text-gray my-5'>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            <section className='w-11/12 lg:w-10/12 mx-auto md:flex justify-between gap-5 lg:gap-10 border-t-2 border-green'>
                <DoctorSearchFields/>
                <AllDoctorCards setAppointmentSummeryPage={setAppointmentSummeryPage}/>
            </section></>}
        </div>
    );
};

export default AllDoctors;