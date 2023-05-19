import React, { useState } from "react";
import girl1 from "../../../Assests/Reviews/girl1.jpg";
import girl2 from "../../../Assests/Reviews/girl2.jpg";
import boy1 from "../../../Assests/Reviews/boy1.jpg";
import boy2 from "../../../Assests/Reviews/boy2.jpg";

const PatientFeedBack = () => {
  const reviews = [
    {
      name: "allison",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: girl1,
    },
    {
      name: "allison",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: girl2,
    },
    {
      name: "allison",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: boy1,
    },
    {
      name: "allison",
      age: "22",
      title: "Great Service",
      details:
        "This was such a great experiance Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aspernatur excepturi placeat! Ab hic maiores iure incidunt iste blanditiis molestias!",
      img: boy2,
    },
  ];
  const [review, setReview] = useState(reviews[0]);
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto sm:flex justify-between  my-32">
      <section className="bg-light-green sm:w-1/2  p-10 space-y-20">
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
          What People are Saying About Us
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
      </section>
      <section className="bg-light-gray sm:w-1/2 relative p-10">
        <div className="flex gap-10 absolute right-0  p-5">
          <button className="ring-offset-2 ring-4 w-10 h-10 rounded-full">
            ❮
          </button>
          <button className="ring-offset-2 ring-4 w-10 h-10 rounded-full">
            ❯
          </button>
        </div>
        <article className="mt-20 space-y-3">
          <p className="font-bold text-green text-lg">{review.title}</p>
          <p className="">{review.details}</p>
          <div className="flex items-center gap-5">
            <img
              className="w-12 h-12 object-cover rounded-full ring-offset-2 ring-4 "
              src={review.img}
              alt=""
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-sm text-gray">{review.age} year's old</p>
            </div>
          </div>
        </article>
        <div className="flex gap-3 absolute right-0 bottom-0 p-5 ">
          {reviews.map((review) => (
            <img
              className={`w-7 h-7 object-cover rounded-full cursor-pointer`}
              src={review.img}
              alt=""
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatientFeedBack;
