import React, { useState } from "react";
import "./Carousel.css";
import video from "../../../Assests/HomeCarousel/autism.jpg";
import doctors from "../../../Assests/HomeCarousel/ADHD.jpg";
import ambulance from "../../../Assests/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../Assests/HomeCarousel/pregnancy.jpg";
import blood from "../../../Assests/HomeCarousel/blood.jpeg";
import volunter from "../../../Assests/HomeCarousel/volunter.jpg";
import { Link } from 'react-router-dom';
import { CarouselInfo } from "../HomeCarousel/CarouselInfo";



const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === CarouselInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? CarouselInfo.length - 1 : prevIndex - 1
    );
  };

  const lowerSliderButton = (id) => {
    setCurrentImageIndex(id);
  };
 
  return (
    <div className="carousel w-full h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[40rem] relative rounded-md overflow-hidden">
      <div className="carousel-image-container w-full h-full ">
        {CarouselInfo?.map((info, index) => (
          <Link className={`carousel-container ${
            index === currentImageIndex ? "active" : ""
          }`}>
             <div dangerouslySetInnerHTML={{ __html: info.details }} />
          <img
            key={index}
            className={`carousel-image h-full w-full object-cover object-center `}
            src={info.img}
            alt=''
          />
          </Link>
        ))}
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <button
            onClick={handlePreviousSlide}
            className="bg-brown w-7 h-7 sm:w-10 sm:h-10 rounded-full text-white font-bold sm:text-2xl "
          >
            ❮
          </button>
          <button
            className="bg-brown w-7 h-7 sm:w-10 sm:h-10 rounded-full text-white font-bold sm:text-2xl"
            onClick={handleNextSlide}
          >
            ❯
          </button>
        </div>
        <div className="flex w-full gap-2 absolute z-30 bottom-5 left-1/2	">
          {CarouselInfo?.map((carousel, i) => (
            <button
              key={i}
              onClick={() => lowerSliderButton(i)}
              className={` w-3 h-3 rounded-full ${
                currentImageIndex === i ? "bg-white" : "bg-green "
              }`}
            ></button>
          ))}
        </div>
    </div>
  );
};

export default Carousel;
