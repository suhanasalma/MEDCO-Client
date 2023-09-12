import React from 'react';
import { useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";


const BookDoctorList = ({openModal,setOpenModal,doctorList,setSelectDoctor}) => {
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

      const selectDoctor = (doctor)=>{
        setSelectDoctor(doctor)
        setOpenModal(false)
      }
    return (
        <div  
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
           className='w-full fixed top-0 left-0 right-0 z-30 flex justify-center items-center h-screen'>
            <div className='bg-white p-8 2xl:w-3/12  xl:w-4/12 lg:w-5/12 sm:w-7/12 w-11/12 min-h-fit max-h-[95%] overflow-auto'>
               <div className='flex items-center gap-5 mb-10'> 
                    <p className='hover:shadow-md rounded-full text-2xl font-bold text-gray cursor-pointer'  onClick={() => setOpenModal(false)}><VscChromeClose/></p>
                    <input type='search' className='shadow-md border-2 outline-none border-gray hover:border-brown rounded-lg w-full bg-light-gray p-1'/>
                </div>
                <div className='space-y-5'>
                    {
                         doctorList.map((doctor, i)=><div key={i} onClick={()=>selectDoctor(doctor)} className='cursor-pointer shadow-md rounded-md px-2 py-1 flex items-center gap-5 hover:bg-light-green' >
                            <img className='w-14 rounded-full shadow-md object-cover' src={doctor.img} alt='doctor_image'/>
                            <div className='text-sm space-y-2'>
                                <p>{doctor.name}</p>
                                <p className='text-xs text-gray font-normal'>{doctor.details}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookDoctorList;