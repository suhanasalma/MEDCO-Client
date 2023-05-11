import React, { useState } from "react";
import "./homeCarousel.css";
import { CarouselInfo } from "./CarouselInfo";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const selectedSlider = CarouselInfo[index];

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

  return (
    <div className="w-full h-[40rem]">
        <div
          className='relative w-full h-full'
        >
          <div className="w-full h-full relative">
            <div dangerouslySetInnerHTML={{ __html: selectedSlider.details }} />
            <img
              src={selectedSlider.img}
              className="w-full h-full object-cover lg:object-top"
              alt=""
            />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePreviousSlide}
              className="bg-brown px-4 py-1 text-white font-bold text-2xl rounded-sm"
            >
              ❮
            </button>
            <button
              className="bg-brown px-4 rounded-sm py-1 text-white font-bold text-2xl"
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
