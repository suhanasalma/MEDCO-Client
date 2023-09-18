import React from "react";
import img from "../../../Assests/OurDoctors/6.jpg";
import { VscCallOutgoing, VscCalendar } from "react-icons/vsc";
import { FaRegComments } from "react-icons/fa";
const AllDoctorCards = () => {
  return (
    <div className="w-7/12 min-h-fit max-h-screen overflow-auto shadow-lg ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {["#af976d", "#2c4c3b", "blue",  "#2c4c3b", "blue","#af976d" ,"blue","#2c4c3b","#af976d", "#af976d", "#2c4c3b", "blue", ].map((item, i) => (
          <div
            className="group border-x-2 border-b-2 border-green  h-72 flex justify-around items-center"
            key={i}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 ">
              <div>
                <div style={{outlineColor:`${item}`}} className={`w-32 h-32 relative outline outline-2  outline-offset-2 rounded-full doctorCardImg`}>
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
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      top: "10%",
                      left: "85%",
                    }}
                  ></div>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-green">Elisy Pery</p>
                  <p className="text-xs text-gray">Senior at orthopedic</p>
                </div>

                <div className=" pointer-events-none group-hover:cursor-pointer group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 mt-4 text-green">
                  <VscCalendar />
                  <VscCallOutgoing />
                  <FaRegComments />
                </div>
              </div>
            </div>
            {/* <div className="group-hover:opacity-100 opacity-0">
              <p>this is second div</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctorCards;
