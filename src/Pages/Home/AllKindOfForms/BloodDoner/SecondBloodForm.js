import React from 'react';
import DateTime from './DateTime';
import { useState } from 'react';

const SecondBloodForm = ({
  setSelectedCity,
  countries,
  cities,
  setSelectedState,
  selectedCity,
  states,
  selectedState,
  data,
  secondPage,
  setFirstPage,
  setSecondPage,
}) => {
  return (
    <div className={`${secondPage ? "" : "hidden"}`}>
      <section className="flex flex-wrap justify-between my-10 gap-5">
        <div>
          <p>BirthDay</p>
          <DateTime title="Select Birthday" />
        </div>
        <div>
          <p>Last Donation Day</p>
          <DateTime title="Select Day" />
        </div>
      </section>

      <section className="my-10">
        <p className="font-bold text-lg my-5">Your Address</p>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="">
            <p>Country </p> 
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-1  rounded-lg w-full"
              name="blood"
              id="blood"
              placeholder="Select"
              onChange={(e) => setSelectedCity(cities[e.target.value])}
            >
              {countries.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <p>City </p> 
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-1  rounded-lg w-full"
              name="blood"
              id="blood"
              placeholder="Select"
              onChange={(e) => setSelectedState(states[e.target.value])}
            >
              {selectedCity.map((city, i) => (
                <option key={i} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <p>State </p> 
            <select
              className="text-white bg-green  ring-offset-2 ring-4 outline-none  px-4 py-1  rounded-lg w-full"
              name="blood"
              id="blood"
              placeholder="Select"
            >
              {selectedState.map((state, i) => (
                <option key={i} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </article>
      </section>
      <div className='text-center'>
        <input
          type="submit"
          className="ring-offset-2 ring-4 mt-10 w-52 rounded-full px-4 py-2 "
        />
      </div>
      <p>{data}</p>
    </div>
  );
};

export default SecondBloodForm;