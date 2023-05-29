import React from 'react';
import { FaCartArrowDown, FaPlusCircle } from "react-icons/fa";
import './RecommendedPackage.css'


const RecommendedPackage = ({ pack }) => {
  return (
    <div className="rounded-lg overflow-hidden w-72 h-96 lg:w-64 2xl:w-72  shadow-lg shadow-gray hover:shadow-green hover:shadow-xl cursor-pointer ">
      <img className="w-full  object-cover" src={pack.img} alt="" />
      <div className="p-6 space-y-4">
        <p className="text-green font-bold text-lg">{pack.title}</p>
        <p className="text-sm text-gray font-medium">
          Cost:{" "}
          <span className="text-xl font-bold text-green">{pack.price}</span>
        </p>
        <div>
          <label className="text-sm text-gray font-medium" htmlFor="">
            Qty:{" "}
          </label>
        </div>
        <div className="flex justify-between  flex-wrap gap-5 relative">
          <input
            className="border-2 border-light-gray w-10 text-center"
            type="text"
            defaultValue="1"
          />
          <div className="buy">
            <button className="shadow-lg shadow-green w-8 h-8 rounded-full text-center flex justify-center items-center bg-green text-white buy">
              <FaCartArrowDown />
            </button>
            <p className="absolute bottom-10 bg-brown text-white px-2 py-1 rounded-xl hidden text-xs font-semibold">
              Buy Now
            </p>
          </div>
          <div className="cart">
            <button className="shadow-lg shadow-brown w-8 h-8 rounded-full text-center flex justify-center items-center bg-brown text-white">
              <FaPlusCircle />
            </button>
            <p className="absolute right-0 bottom-10 bg-green text-white px-2 py-1 rounded-xl hidden text-xs font-semibold">
              Add to cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPackage;