import React from 'react';
import DoctorSearchFields from '../DoctorSearchFields/DoctorSearchFields';
import AllDoctorCards from '../AllDoctorCards/AllDoctorCards';

const AllDoctors = () => {
    return (
        <div>
            <p>Search Doctor, Make an Appointment</p>
            <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            <section className='flex justify-between border-t-2 border-light-gray'>
                <DoctorSearchFields/>
                <AllDoctorCards/>
            </section>
        </div>
    );
};

export default AllDoctors;