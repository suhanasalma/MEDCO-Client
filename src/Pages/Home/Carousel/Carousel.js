import React, { useState } from "react";
import "./Carousel.css";
import video from "../../../Assests/HomeCarousel/autism.jpg";
import doctors from "../../../Assests/HomeCarousel/ADHD.jpg";
import ambulance from "../../../Assests/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../Assests/HomeCarousel/pregnancy.jpg";
import blood from "../../../Assests/HomeCarousel/blood.jpeg";
import volunter from "../../../Assests/HomeCarousel/volunter.jpg";

const Carousel = () => {
   const images = [video, doctors, ambulance];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel border-2">
      <button className="carousel-btn prev-btn" onClick={prevImage}>
        Previous
      </button>
      <div className="carousel-image-container">
        {images?.map((image, index) => (
          <img
            key={index}
            className={`carousel-image ${
              index === currentImageIndex ? "active" : ""
            }`}
            src={image}
            alt=''
          />
        ))}
      </div>
      <button className="carousel-btn next-btn" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
