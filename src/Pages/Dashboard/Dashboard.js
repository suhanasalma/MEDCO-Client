import React from "react";
import doctorGreetImage from "../../Assests/OurDoctors/doctorGreet.png";
import {
  FaUserMd,
  FaUserFriends,
  FaRegHospital,
  FaRegCalendarAlt,
  FaEllipsisH,
} from "react-icons/fa";
import SelectOptions from "../../Components/SelectOptions/SelectOptions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataTable from 'react-data-table-component';


const Dashboard = () => {
  const cardsInfo = [
    {
      icon: FaUserFriends,
      title: "Patients",
      count: "632.000",
      "bg-color": "light-green",
      "text-color": "green",
    },
    {
      icon: FaUserMd,
      title: "Doctors",
      count: "632.000",
      "bg-color": "light-brown",
      "text-color": "brown",
    },
    {
      icon: FaRegHospital,
      title: "Hospitals",
      count: "632.000",
      "bg-color": "light-green",
      "text-color": "green",
    },
    {
      icon: FaRegCalendarAlt,
      title: "Consultations",
      count: "632.000",
      "bg-color": "light-brown",
      "text-color": "brown",
    },
  ];
  let overviewMonths = [
    { value: "monthly", label: "Monthly" },
    { value: "daily", label: "Daily" },
  ];

  const chartData = [
    {
      name: "Jan",
      Male: 4000,
      Female: 2400,
    },
    {
      name: "Feb",
      Male: 3000,
      Female: 1398,
    },
    {
      name: "Mar",
      Male: 2000,
      Female: 9800,
    },
    {
      name: "Apr",
      Male: 2780,
      Female: 3908,
    },
    {
      name: "May",
      Male: 1890,
      Female: 4800,
    },
    {
      name: "Jun",
      Male: 2390,
      Female: 3800,
    },
    {
      name: "Jul",
      Male: 3490,
      Female: 4300,
    },
    {
      name: "Aug",
      Male: 3490,
      Female: 4300,
    },
    {
      name: "Sep",
      Male: 3490,
      Female: 4300,
    },
    {
      name: "Oct",
      Male: 3490,
      Female: 4300,
    },
    {
      name: "Nov",
      Male: 3490,
      Female: 4300,
    },
    {
      name: "Dec",
      Male: 3490,
      Female: 4300,
    },
  ];
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
  return (
    <div className="px-5">
      <div className="bg-green h-32 w-[50%] flex justify-around items-center mt-20 rounded-md">
        <p className="text-white text-xl">
          Welcome Back Dr. Alex <span>Good Night !</span>
        </p>
        <img
          src={doctorGreetImage}
          className="w-40 h-52  object-cover -mt-20"
          alt="doctorGreetImage"
        />
      </div>
      <article className="flex justify-between gap-5">
        <section>
          <div className="flex items-center justify-between gap-5 my-10">
            {cardsInfo.map((card, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 bg-white rounded-lg px-10 py-5"
              >
                <div
                  className={`bg-${card["bg-color"]} text-${card["text-color"]} p-2 rounded-md text-xl`}
                >
                  {" "}
                  <card.icon />
                </div>
                <div>
                  <p className="text-gray text-sm">{card.title}</p>
                  <p className="font-bold text-soft_black">{card.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-soft-black font-semibold">Patient Overview</p>
              <div className="flex items-center justify-between gap-5">
                <div className="w-40">
                  <SelectOptions options={overviewMonths} />
                </div>
                <FaEllipsisH />
              </div>
            </div>
            <div className="mt-10">
              <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                  width={500}
                  height={300}
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ stroke: "#D3D3D3", strokeWidth: 0.1 }}
                  />
                  <YAxis tick={{ stroke: "#D3D3D3", strokeWidth: 0.1 }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Female"
                    stroke="#2c4c3b"
                    strokeWidth="2"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="Male" stroke="#af976d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
          <DataTable
            columns={columns}
            data={data}
        />
          </div>
        </section>
        <section>this is 2nd section og</section>
      </article>
    </div>
  );
};

export default Dashboard;
