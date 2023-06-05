import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import Details from "../../../Components/Details/Details";
import text from "../../../Assests/onlineconsultancy/text.jpg";
import call from "../../../Assests/onlineconsultancy/call.jpg";
import video from "../../../Assests/onlineconsultancy/videoCall.jpg";
import query from "../../../Assests/onlineconsultancy/query.jpg";
import doctor from "../../../Assests/onlineconsultancy/doctor.jpg";
import { FcSurvey, FcVideoCall, FcCallback, FcComments } from "react-icons/fc";
import LinkButton from "../../../Components/LinkButton/LinkButton";
import './StartOnlineConsultancy.css'

const StartOnlineConsultancy = () => {
  const [selectOption, setSelectOption] = useState(null);
  const consultancyOptions = [
    {
      id: 1,
      name: "Query",
      icon: FcSurvey,
      button: "Ask Any Query",
      img: query,
    },
    {
      id: 2,
      name: "Chat",
      icon: FcComments,
      button: "Start Chat Consultaion",
      img: text,
    },
    {
      id: 3,
      name: "Phone",
      icon: FcCallback,
      button: "Start a Coversation",
      img: call,
    },
    {
      id: 4,
      name: "Video",
      icon: FcVideoCall,
      button: "Start Video Consultaion",
      img: video,
    },
  ];

  const handleToggled = (option) => {
    
     if (selectOption?.id === option.id) {
       setSelectOption(null);
     } else {
       setSelectOption(option);
     }
  };

  return (
    <div className="w-10/12 sm:w-11/12 lg:w-10/12 mx-auto flex justify-between gap-10 my-32">
      <div className="w-5/12 xl:w-4/12 sm:border-[16px] sm:rounded-full overflow-hidden border-green sm:block hidden">
        <img
          className="w-full h-full object-cover "
          src={
            selectOption ? consultancyOptions[selectOption?.id - 1].img : doctor
          }
          alt=""
        />
      </div>
      <div className="w-full sm:w-1/2 space-y-10 ">
        <Title
          design="lg:text-4xl xl:text-5xl lg:leading-normal xl:leading-relaxed onlineConsultancyTitle"
          title="Start an online chat, consultation with a doctor"
        />
        <Details
          design="text-sm"
          details="Post unlimited follow-ups to the doctor for the next 50 or 100 hours by picking one of out #iclinic100hrs chat services."
        />
        <div className="grid grid-cols-2 gap-10 Onlineconsultency">
          {consultancyOptions.map((option, i) => (
            <section key={i} className="flex items-center">
              <div
                className={`rounded-full bg-white border-4 border-green w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 `}
              >
                <input
                  onChange={() => handleToggled(option)}
                  checked={selectOption?.id === option.id}
                  type="checkbox"
                  className="opacity-0 absolute rounded-full"
                />

                {selectOption?.id === option.id && (
                  <div className="w-3 h-3 bg-green rounded-full"></div>
                )}
              </div>
              <div className="flex items-center bg-light-green px-4 py-2 w-52 gap-5 rounded-full text-lg font-bold border-green border-2 onlineConBnt">
                <option.icon className="text-2xl" />
                <p>{option.name}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="onlineBtn ">
          <LinkButton
            design="w-72  border-2 border-green"
            title={
              selectOption?.button ? selectOption?.button : "Choose a Option"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StartOnlineConsultancy;
