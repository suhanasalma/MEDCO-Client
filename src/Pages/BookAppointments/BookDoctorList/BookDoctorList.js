import React from 'react';
import { useEffect } from 'react';

const BookDoctorList = ({openModal,setOpenModal,}) => {
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
            <div className='bg-white p-10 2xl:w-3/12  xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 h-[95%] overflow-auto'>
                <p className='text-xl font-bold text-brown mb-10 cursor-pointer'  onClick={() => setOpenModal(false)}>X</p>
                <p className='text-xl text-gray'>Select a Date and Time</p>
            </div>
        </div>
    );
};

export default BookDoctorList;