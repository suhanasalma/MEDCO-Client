import React from 'react';

const FeedBackCard = ({
  handlePreviousSlide,
  handleNextSlide,
  selectedReview,
  reviews,
  handleLowerSliderButton,
}) => {
  return (
    <section className="bg-light-gray sm:w-1/2 relative p-10">
      <div className="flex gap-10 absolute right-0  p-5">
        <button
          onClick={handlePreviousSlide}
          className="ring-offset-2 ring-4 w-10 h-10 rounded-full text-green font-bold"
        >
          ❮
        </button>
        <button
          onClick={handleNextSlide}
          className="ring-offset-2 ring-4 w-10 h-10 rounded-full text-green font-bold"
        >
          ❯
        </button>
      </div>
      <article className="my-20 space-y-3">
        <p className="font-bold text-green text-lg">{selectedReview.title}</p>
        <p className="">{selectedReview.details}</p>
        <div className="flex items-center gap-5">
          <img
            className="w-12 h-12 object-cover rounded-full ring-offset-2 ring-4 "
            src={selectedReview.img}
            alt=""
          />
          <div>
            <p className="font-bold">{selectedReview.name}</p>
            <p className="text-sm text-gray">{selectedReview.age} year's old</p>
          </div>
        </div>
      </article>
      <div className="flex gap-3 absolute right-0 bottom-0 p-5">
        {reviews.map((review, i) => (
          <img
            onClick={() => handleLowerSliderButton(i)}
            key={i}
            className={`${
              selectedReview.id === review.id
                ? "w-9 h-9 object-cover rounded-full cursor-pointer ring-offset-2 ring-4"
                : "w-7 h-7 object-cover rounded-full cursor-pointer"
            } `}
            src={review.img}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default FeedBackCard;