import React from 'react';
import DoctorSearchFields from '../DoctorSearchFields/DoctorSearchFields';
import AllDoctorCards from '../AllDoctorCards/AllDoctorCards';

const AllDoctors = () => {
    return (
        <div className='my-10'>
            <p className='text-center text-3xl text-green'>Search Doctor, Make an Appointment</p>
            <p className='text-center text-sm text-gray my-5'>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            <section className='w-11/12 md:w-10/12 mx-auto sm:flex justify-between lg:justify-around gap-5 lg:gap-10 border-t-2 border-green mx-auto'>
                <DoctorSearchFields/>
                <AllDoctorCards/>
            </section>
        </div>
    );
};

export default AllDoctors;