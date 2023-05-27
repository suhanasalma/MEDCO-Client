import React from 'react';
import Title from '../../../Components/Title/Title';
import Details from '../../../Components/Details/Details';
import { Link } from 'react-router-dom';

const SpecialServiceCard = ({
  handleMouseEnter,
  handleMouseLeave,
  i,
  hoveredCardIndex,
  card,
}) => {
  return (
    <div
      onMouseEnter={() => handleMouseEnter(i)}
      onMouseLeave={() => handleMouseLeave(i)}
      style={{
        backgroundImage:
          hoveredCardIndex === i &&
          `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

        // transition: "all ease-in-out .5s",
      }}
      className="w-80 sm:w-64  md:w-[200px] lg:w-[240px] 2xl:w-72 h-[225px] border-4 rounded-s-3xl rounded-br-3xl p-4 transition-all ease-in-out delay-300"
      key={i}
    >
      <img
        className={`${
          hoveredCardIndex === i
            ? "hidden"
            : " w-20 h-20 object-cover rounded-md"
        }`}
        src={card.image}
        alt=""
      />
      <p
        className={`text-green font-bold ${
          hoveredCardIndex === i
            ? "text-white font-bold text-base lg:text-xl my-4 text-center"
            : "font-bold text-base text-green lg:text-lg my-4"
        }`}
      >
        {card.name}
      </p>
      {hoveredCardIndex === i && (
        <Details
          details="details to tell "
          design="text-lg text-white text-center mb-5"
        />
      )}
      {hoveredCardIndex === i ? (
        <div className="text-center">
          <Link className="border-4 border-green bg-white px-6  rounded-s-3xl rounded-br-3xl text-green font-bold py-1 ">
            See More
          </Link>
        </div>
      ) : (
        <Link className="border-2  bg-green px-6  rounded-s-3xl rounded-br-3xl text-white  py-1">
          See More
        </Link>
      )}
    </div>
  );
};

export default SpecialServiceCard;