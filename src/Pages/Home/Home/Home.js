import React from "react";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeMainService from "../HomeMainService/HomeMainService";
import OurDoctors from "../OurDoctors/OurDoctors";

const Home = () => {
  return (
    <div className="">
      <HomeCarousel />
      <HomeMainService/>
      <OurDoctors/>
    </div>
  );
};

export default Home;
