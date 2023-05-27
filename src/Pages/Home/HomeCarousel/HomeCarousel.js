import React, { useEffect, useRef, useState } from "react";
import "./homeCarousel.css";
import { CarouselInfo } from "./CarouselInfo";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const selectedSlider = CarouselInfo[index];
  const timerRef = useRef(null)

  const handleNextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === CarouselInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? CarouselInfo.length - 1 : prevIndex - 1
    );
  };

  // useEffect(()=>{
  //   if(timerRef.current){
  //     clearTimeout(timerRef.current)
  //   }
  //   timerRef.current = setTimeout(() => {
  //     handleNextSlide()
  //   }, 2000); 

  //   return () =>clearTimeout(timerRef.current)
  // })

  return (
    <div className="w-full h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[40rem] ">
      <div className="relative w-full h-full">
        <div className="w-full h-full relative">
          <div dangerouslySetInnerHTML={{ __html: selectedSlider.details }} />
          <img
            src={selectedSlider.img}
            className={`${selectedSlider.imgClass} w-full h-full object-cover object-center `}
            alt=""
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <button
            onClick={handlePreviousSlide}
            className="bg-brown w-10 h-10 rounded-full text-white font-bold text-2xl "
          >
            ❮
          </button>
          <button
            className="bg-brown w-10 h-10 rounded-full text-white font-bold text-2xl"
            onClick={handleNextSlide}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
