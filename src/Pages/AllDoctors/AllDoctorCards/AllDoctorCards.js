import React from "react";
import img from "../../../Assests/OurDoctors/6.jpg";

const AllDoctorCards = () => {
  return (
    <div className="w-7/12 min-h-fit max-h-screen overflow-auto shadow-lg ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16].map((item, i) => (
          <div
            key={i}
            className="border-x-2 border-b-2 border-green  h-72 flex flex-col items-center justify-center gap-2"
          >
            <div>
              <div className="w-32 h-32 doctorCardImg">
                <img
                  className="w-full h-full rounded-full object-cover object-top mx-auto  "
                  src={img}
                  alt="doctor"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-green">Elisy Pery</p>
                <p className="text-xs text-gray">Senior at orthopedic</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctorCards;
