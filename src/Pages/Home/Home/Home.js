import React from "react";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeMainService from "../HomeMainService/HomeMainService";
import OurDoctors from "../OurDoctors/OurDoctors";
import PopularSearches from "../PopularSearches/PopularSearches";

const Home = () => {
  return (
    <div className="">
      <HomeCarousel />
      <HomeMainService/>
      <OurDoctors/>
      <PopularSearches/>
    </div>
  );
};

export default Home;
