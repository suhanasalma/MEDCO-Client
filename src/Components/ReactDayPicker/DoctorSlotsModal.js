import React, { useEffect } from 'react';
import DoctorSlots from './DoctorSlots';
import './modal.css'
import { VscChromeClose } from "react-icons/vsc";
import SelectOptions from '../SelectOptions/SelectOptions';


const DoctorSlotsModal = ({openModal,setOpenModal,availableSlots,setSelectAppointmentDate,bookingSummery,buttonName }) => {
    useEffect(() => {
        if (openModal) {
          // Prevent scrolling of the page when the modal is open
          document.body.style.overflow = "hidden";
        } else {
          // Restore scrolling of the page when the modal is closed
          document.body.style.overflow = "auto";
        }
    
        // Cleanup the effect
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [openModal]);


    return (
        <div  
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
           className='w-full fixed top-0 left-0 right-0 z-30 flex justify-center items-center h-screen'>
            <div className='bg-white p-10 xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 min-h-fit max-h-[95%] overflow-auto'>
                <p className='text-xl font-bold text-brown mb-10 cursor-pointer'  onClick={() => setOpenModal(false)}><VscChromeClose/></p>
                <p className='text-xl text-gray'>Select a Date and Time</p>
                {/* <div className='flex justify-between items-center'>
                  <p className='text-xl text-gray'>Select a Date and Time</p>
                  <div className='z-50 w-48 border-2'>
                  <SelectOptions options={options}/>
                  </div>
                </div> */}
                <DoctorSlots buttonName={buttonName} bookingSummery={bookingSummery}  setSelectAppointmentDate={setSelectAppointmentDate} setOpenModal={setOpenModal} availableSlots={availableSlots}/>
            </div>
        </div>
    );
};

export default DoctorSlotsModal;