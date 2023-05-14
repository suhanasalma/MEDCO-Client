import React from "react";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeMainService from "../HomeMainService/HomeMainService";
import OurDoctors from "../OurDoctors/OurDoctors";
import PopularSearches from "../PopularSearches/PopularSearches";
import StartOnlineConsultancy from "../StartOnlineConsultancy/StartOnlineConsultancy";

const Home = () => {
  return (
    <div className="">
      <HomeCarousel />
      <HomeMainService/>
      <OurDoctors/>
      <PopularSearches/>
      <StartOnlineConsultancy/>
    </div>
  );
};

export default Home;
