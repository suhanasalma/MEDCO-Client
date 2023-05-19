import React from "react";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeMainService from "../HomeMainService/HomeMainService";
import OurDoctors from "../OurDoctors/OurDoctors";
import PopularSearches from "../PopularSearches/PopularSearches";
import StartOnlineConsultancy from "../StartOnlineConsultancy/StartOnlineConsultancy";
import ConsultingSpecilties from "../ConsultingSpecilties/ConsultingSpecilties";
import HomeSpecialServices from "../HomeSpecialService/HomeSpecialServices";
import PatientFeedBack from "../PatientFeedBacks/PatientFeedBack";
import OurPartners from "../OurPartners/OurPartners";

const Home = () => {
  return (
    <div className="">
      <HomeCarousel />
      <HomeMainService/>
      <OurDoctors/>
      <PopularSearches/>
      <StartOnlineConsultancy/>
      <ConsultingSpecilties/>
      <HomeSpecialServices/>
      <PatientFeedBack/>
      <OurPartners/>
    </div>
  );
};

export default Home;
