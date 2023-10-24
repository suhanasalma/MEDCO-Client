import React from "react";
import doctorGreetImage from "../../Assests/OurDoctors/doctorGreet.png";
import {FaUserMd ,FaUserFriends,FaRegHospital,FaRegCalendarAlt} from "react-icons/fa";


const Dashboard = () => {
    const cardsInfo = [
        {
            icon:FaUserFriends,
            title:"Patients",
            count:632.000,
            "bg-color":"light-green",
            "text-color":"green"
        },
        {
            icon:FaUserMd,
            title:"Doctors",
            count:632.000,
            "bg-color":"light-brown",
            "text-color":"brown"
        },
        {
            icon:FaRegHospital,
            title:"Hospitals",
            count:632.000,
            "bg-color":"light-green",
            "text-color":"green"
        },
        {
            icon:FaRegCalendarAlt,
            title:"Consultations",
            count:632.000,
            "bg-color":"light-brown",
            "text-color":"brown"
        },

    ]
  return (
    <div className="px-5">
      <div className="bg-green h-32 w-[50%] flex justify-around items-center mt-20 rounded-md">
        <p className="text-white text-xl">
          Welcome Back Dr. Alex <span>Good Night !</span>
        </p>
        <img
          src={doctorGreetImage}
          className="w-40 h-52  object-cover -mt-20"
        />
      </div>
      <article className="flex justify-between gap-5">
        <section>
            <div className="flex items-center justify-between gap-5 my-10">
                {
                    cardsInfo.map((card,i)=><div key={i} className="flex items-center justify-between gap-2 bg-white rounded-lg px-5 py-2">
                   <div  className={`bg-${card["bg-color"]} text-${card["text-color"]} p-2 rounded-md text-xl`}> <card.icon/></div>
                       <div>
                       <p className="text-gray text-sm">{card.title}</p>
                        <p className="font-bold text-soft_black">{card.count}</p>
                       </div>
                    </div>)
                }
            </div>
        </section>
        <section>this is 2nd section</section>
      </article>
      
    </div>
  );
};

export default Dashboard;
