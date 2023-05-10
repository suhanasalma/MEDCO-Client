import React, { useState } from "react";
import "./homeCarousel.css";
import { CarouselInfo } from "./CarouselInfo";

const HomeCarousel = () => {
  const [index, setIndex] = useState(1);

  console.log(CarouselInfo);
  return (
    <div className="w-full h-[40rem]">
      {CarouselInfo.map((item,i) => (
        <div key={i}
          id={`slide${item.id}`}
          className={`${
            index === item.id ? "relative w-full h-full" : "hidden"
          } `}
        >
          <div className="w-full h-full relative">
            <div dangerouslySetInnerHTML={{ __html: item.details }} />
            <img
              src={item.img}
              className="w-full h-full object-cover lg:object-top"
              alt=""
            />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              onClick={() => setIndex(item.prev)}
              href={`#slide${item.prev}`}
              className="bg-brown px-4 py-1 text-white font-bold text-2xl rounded-sm"
            >
              ❮
            </a>
            <a
              className="bg-brown px-4 rounded-sm py-1 text-white font-bold text-2xl"
              onClick={() => setIndex(item.next)}
              href={`#slide${item.next}`}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCarousel;
