import React from 'react';
import doctorImage from '../../Assests/OurDoctors/1.jpg'
const DoctorDetails = () => {
    return (
       <div>
         <section>
            <img src={doctorImage} alt='doctorimage'/>
            <div>
                <p className=' uppercase'>Dr. PR ALLA PHILIPPE</p>
                <p className='font-medium'>Neurologie</p>
                <div>
                    <p>Availabel for</p>
                    <ul>
                        <li>Video Appointment</li>
                        <li>Audio Appointment</li>
                        <li>Chat Appointment</li>
                        <li>Physical Appointment</li>
                    </ul>
                </div>
                <button>Make an appointment</button>
            </div>
            <div>
                <p className='uppercase'>make an appointment with pr alla philippe</p>
                <div>
                    <p>By Phone</p>
                    <p>01515332</p>
                </div>
                <div>
                    <p>By Email</p>
                    <p>dr@gmail.com</p>
                </div>
                <div>
                    <p>Telemedicine Appointment</p>
                    <p>01515332</p>
                </div>
                <div>
                    <p>Physical Appointment</p>
                    <p>dr@gmail.com</p>
                </div>
                <button>Already a patient?</button>
            </div>
        </section>
        <section>
            <div>
                <p>Contacts</p>
            </div>
        </section>
       </div>
    );
};

export default DoctorDetails;