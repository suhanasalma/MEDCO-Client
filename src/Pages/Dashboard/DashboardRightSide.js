import React from "react";
import {
  FaEllipsisH,
  FaAngleLeft,
  FaAngleRight,
  FaRegClock,
} from "react-icons/fa";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const DashboardRightSide = () => {
  const accountChartdata = [
    { name: "Varified", value: 400 },
    { name: "Not varified", value: 300 },
    { name: "Deleted", value: 300 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section className="2xl:w-4/12 w-11/12 mx-auto">
      <div className="bg-white p-5 rounded-lg">
        <div className="border-2 border-light-gray flex justify-between items-center px-4 py-2 rounded-md">
          <p
            className={`px-4 py-1 bg-light-brown text-green rounded-md font-semibold`}
          >
            Upcoming Appointments
          </p>
          <p className={`px-4 py-1 text-gray`}>Past Appointments</p>
        </div>
        <div className="my-5 ">
          <p className="text-center font-semibold text-brown text-lg">
            Octorber
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between text-xl font-thin text-brown">
              <FaAngleLeft />
              <FaAngleRight />
            </div>
            <div>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-gray text-sm">Mo</p>
            </div>
            <div>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-gray text-sm">Mo</p>
            </div>
            <div>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-gray text-sm">Mo</p>
            </div>
            <div>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-gray text-sm">Mo</p>
            </div>
            <div>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-gray text-sm">Mo</p>
            </div>
            <div>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-gray text-sm">Mo</p>
            </div>
            <div className={`bg-light-brown px-2 py-1 rounded-xl`}>
              <p className=" font-bold text-soft_black text-lg">21</p>
              <p className="text-green font-semibold text-sm">Mo</p>
              <p className="bg-red mx-auto w-1 h-1"></p>
            </div>
          </div>
          {[0, 1, 2, 3, 4, 5].map((user, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-5 my-5"
            >
              <div className="flex items-center gap-5">
                <img
                  src="https://files.123freevectors.com/wp-content/original/503818-beautiful-indian-girl-image.jpg"
                  className="w-14 h-14 object-cover rounded-md"
                />
                <div className="text-sm">
                  <p className="text-gray">Eman</p>
                  <p className="text-soft-black font-medium">
                    Medical Consultaion
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <FaRegClock className=" rounded-md" />
                <div>
                  <p className="text-gray">Booking Time</p>
                  <p className="text-soft-black font-medium">02:00 pm</p>
                </div>
              </div>
              <FaEllipsisH />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-5 my-10 rounded-lg">
        <div className="flex items-center justify-between">
          <p className="text-soft-black font-semibold">Accounts</p>
          <FaEllipsisH />
        </div>
        <div className="mt-10">
          <ResponsiveContainer width="100%" aspect={3}>
            <PieChart width={400} height={800}>
              <Tooltip />
              <Pie
                data={accountChartdata}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {accountChartdata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-5 font-semibold text-soft_black mt-5 ">
            <div className="flex items-center gap-2">
              <p className="w-2 h-2 rounded-full bg-[#0088FE] "></p>
              <p>Varified</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="w-2 h-2 rounded-full bg-[#00C49F]"></p>
              <p>Not varified</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="w-2 h-2 rounded-full bg-[#FFBB28]"></p>
              <p>Deleted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardRightSide;
