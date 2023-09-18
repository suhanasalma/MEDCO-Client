import React, { useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import meetLogo from '../../../Assests/Logo/google_meet.png'
import { Link } from 'react-router-dom';

const CompletedBookingLinkModal = ({openModal,setOpenModal,setBookingSummery}) => {

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

      const goToTelemedicinePage = () =>{
        setOpenModal(false)
        setBookingSummery(false)
        window.scrollTo(0, 0)
      }
    return (
        <div  
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
           className='w-full fixed top-0 left-0 right-0 z-30 flex justify-center items-center h-screen'>
            <div className='bg-white p-10 w-10/12 md:w-8/12 lg:w-6/12 min-h-fit max-h-[95%] overflow-auto'>
            <p className='text-xl font-bold text-brown mb-5 cursor-pointer' onClick={goToTelemedicinePage}><VscChromeClose/></p>
            <p className='text-center text-brown font-bold text-lg'>Your appointment is confirm kindly join with meet link. </p>
            <p className='flex items-center flex-wrap gap-2 mt-5 text-gray'>  
           
                <img className='h-8' src={meetLogo} alt='meet_link'/> Meet Link: <span className='underline text-[#1a73e8]'>meet.google.com/aoc-hwas-opb</span> </p>
                <ul className='text-xs text-gray font-normal list-decimal px-3 mt-5 space-y-2'>
                    <li>Your appointment is confirm kindly save this meet link or you can find this link in your <Link className='text-[#1a73e8]'>appointment list</Link></li>
                    <li>Join in right time else link will be expired. If for any reason you can't perticipate then  <Link className='text-[#1a73e8]'>contact with us</Link> within 1hour prior your appointment time</li>
                    <li>If you want to change your appointment time or date kindly <Link className='text-[#1a73e8]'>contact with us</Link> prior 24hours before your appointment date</li>
                </ul>
               <div className='text-right mt-5 '>
                    <button onClick={goToTelemedicinePage} className=' outline-double outline-brown hover:text-brown rounded-md px-4 py-1'>Ok</button>
               </div>
            </div>
        </div>
    );
};

export default CompletedBookingLinkModal;