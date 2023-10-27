import React from "react";
import doctorGreetImage from "../../Assests/OurDoctors/doctorGreet.png";
import DashboardRightSide from "./DashboardRightSide";
import DashboardLeftSide from "./DashboardLeftSide";

const Dashboard = () => {

  return (
    <div className="px-5 h-screen overflow-auto">
      <div className="bg-green h-32  flex justify-around items-center mt-20 rounded-md">
        <p className="text-white text-xl">
          Welcome Back Dr. Alex <span>Good Night !</span>
        </p>
        <img
          src={doctorGreetImage}
          className="w-40 h-52  object-cover -mt-20"
          alt="doctorGreetImage"
        />
      </div>
      <article className="flex flex-col 2xl:flex-row justify-between gap-5 my-10">
        <DashboardLeftSide/>
        <DashboardRightSide/>
      </article>
    </div>
  );
};

export default Dashboard;
