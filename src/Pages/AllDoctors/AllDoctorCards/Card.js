import React from 'react';
import { VscCallOutgoing, VscCalendar } from "react-icons/vsc";
import { FaRegComments } from "react-icons/fa";
import img from "../../../Assests/OurDoctors/6.jpg";
import { FaArrowRight } from "react-icons/fa";


const Card = ({item}) => {
    return (
        <div
            className="flex justify-around items-center h-full"
          >
            <div  className=''
            >
                <div className='mb-5 text-right'><button className='border-2 border-white text-white rounded-md text-xs text-right px-2 py-1'>View Profile</button></div>

                <div style={{outlineColor:"white"}} className={`w-16 h-16 relative outline-double outline-4 outline-offset-2 rounded-full doctorCardImg mx-auto`}>
                  <img
                    className="w-full h-full rounded-full object-cover object-top mx-auto  "
                    src={img}
                    alt="doctor"
                  />
                  <div
                    className="after-element"
                    style={{
                      position: "absolute",
                      content: "",
                      background: item,
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      top: "10%",
                      left: "85%",
                    }}
                  ></div>
                </div>
                <div className="text-center mt-5">
                  <p className="font-semibold ">Elisy Pery</p>
                  <p className="text-xs ">Senior at orthopedic</p>
                </div>

                <div className="cursor-pointer flex items-center justify-center gap-3 mt-4 text-white my-5">
                  <VscCalendar />
                  <VscCallOutgoing />
                  <FaRegComments />
                </div>

              <div className=" middleLine text-xs text-center">
              <div>
              <p className='text-light-gray'>Degree <span className='text-white  font-bold'>MBBS, FCPS</span></p>
              
              </div>
              <div>
              <p className='text-light-gray'>Speciality <span className='text-white  font-bold'>Senior at Orthopedic</span></p>
              
              </div>
              <div>
              <p className='text-light-gray'>Chamber  <span className='text-white  font-bold'>Dhaka, Bangladesh</span></p>
             
              </div>
              <div className='flex items-center mt-5 hover:underline'>
                <FaArrowRight/>Booking Available Online
              </div>
            </div>
            </div>
            
          </div>
    );
};

export default Card;