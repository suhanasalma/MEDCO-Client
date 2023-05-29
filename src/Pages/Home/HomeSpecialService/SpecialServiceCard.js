import React from 'react';
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
    <Link
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
      className="w-96 sm:w-72  md:w-[240px] lg:w-[280px] xl:w-[260px] 2xl:w-72 h-[225px] border-4 rounded-s-3xl rounded-br-3xl p-4 ease-in-out delay-300  hover:overflow-y-scroll"
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
          details= {card.details}
          design="text-sm w-full text-white text-center mb-5"
        />
      )}
      {hoveredCardIndex === i ? (
        <div className="text-center">
          <Link className="border-4 border-green bg-white px-6  rounded-s-3xl rounded-br-3xl text-green font-bold py-1 ">
            See More
          </Link>
        </div>
      ) : (
        <Link className=" bg-green px-6  rounded-s-3xl rounded-br-3xl text-white  py-1">
          See More
        </Link>
      )}
    </Link>
  );
};

export default SpecialServiceCard;