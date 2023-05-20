import React, { useState } from "react";
import girl1 from "../../../Assests/Reviews/girl1.jpg";
import girl2 from "../../../Assests/Reviews/girl2.jpg";
import boy1 from "../../../Assests/Reviews/boy1.jpg";
import boy2 from "../../../Assests/Reviews/boy2.jpg";
import { Link } from "react-router-dom";
import './PatientFeedBack.css'
import FeedBackCard from "./FeedBackCard";

const PatientFeedBack = () => {
  const reviews = [
    {
      id: 0,
      name: "allison",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias! This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: girl1,
    },
    {
      id: 1,
      name: "allison1",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: girl2,
    },
    {
      id: 2,
      name: "allison2",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: boy1,
    },
    {
      id: 3,
      name: "allison3",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: boy2,
    },
  ];
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);
  const selectedReview = reviews[selectedReviewIndex];

  const handleNextSlide = () => {
    setSelectedReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSlide = () => {
    setSelectedReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleLowerSliderButton = (id) => {
    setSelectedReviewIndex(id);
  };
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto sm:flex justify-between  my-32">
      <div className="bg-light-green sm:w-1/2  p-10 space-y-20 reviewCard">
        <div className="flex justify-between space-y-20">
          <img
            src={girl1}
            alt=""
            className="w-16 h-16 object-cover rounded-full ring-offset-2 ring-4"
          />
          <img
            src={girl2}
            alt=""
            className="w-8 h-8 object-cover rounded-full ring-offset-2 ring-4"
          />
        </div>
        <p className="text-2xl font-bold text-center text-green">
          What People are Saying About Us{" "}
          <Link className="hidden  px-4  border-b-2 border-gray text-gray">
            View All
          </Link>
        </p>
        <div className="flex justify-between -space-y-10">
          <img
            src={boy1}
            alt=""
            className="w-14 h-14 object-cover rounded-full ring-offset-2 ring-4"
          />
          <img
            src={boy2}
            alt=""
            className="w-12 h-12 object-cover rounded-full ring-offset-2 ring-4"
          />
        </div>
      </div>
      <FeedBackCard
        handlePreviousSlide={handlePreviousSlide}
        handleNextSlide={handleNextSlide}
        selectedReview={selectedReview}
        reviews={reviews}
        handleLowerSliderButton={handleLowerSliderButton}
      />
    </div>
  );
};

export default PatientFeedBack;
