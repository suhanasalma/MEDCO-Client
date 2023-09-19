import React from 'react';
import { VscCallOutgoing, VscCalendar } from "react-icons/vsc";
import { FaRegComments } from "react-icons/fa";
import img from "../../../Assests/OurDoctors/6.jpg";

const Card = ({item}) => {
    return (
        <div
            className="flex justify-around items-center h-full"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 ">
              <div>
                <div style={{outlineColor:`${item}`}} className={`w-24 h-24 relative outline-double outline-4 outline-offset-2 rounded-full doctorCardImg`}>
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

                <div className="cursor-pointer flex items-center justify-center gap-3 mt-4 text-green">
                  <VscCalendar />
                  <VscCallOutgoing />
                  <FaRegComments />
                </div>
              </div>
            </div>
            <div className=" middleLine">
              <div>
              <p>Degree</p>
              <p>MBBS, FCPS</p>
              </div>
              <div>
              <p>Speciality</p>
              <p>Senior at Orthopedic</p>
              </div>
              <div>
              <p>Chamber</p>
              <p>Dhaka, Bangladesh</p>
              </div>
              <div>
                Booking Available Online
              </div>
            </div>
          </div>
    );
};

export default Card;