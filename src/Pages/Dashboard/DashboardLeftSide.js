import React from 'react';
import {
  FaUserMd,
  FaUserFriends,
  FaRegHospital,
  FaRegCalendarAlt,
  FaEllipsisH,
  FaCheck,
  FaTimes,
  FaTrashAlt,
  FaVenus,
  FaMars,
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
import DataTable from "react-data-table-component";
import doctorImage1 from "../../Assests/OurDoctors/1.jpg";
import doctorImage2 from "../../Assests/OurDoctors/2.jpg";
import doctorImage3 from "../../Assests/OurDoctors/3.jpg";
import doctorImage4 from "../../Assests/OurDoctors/4.jpg";
import doctorImage5 from "../../Assests/OurDoctors/5.jpg";
const DashboardLeftSide = () => {
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
          name: "Name",
          selector: (row) => (
            <div className="flex items-center gap-5">
              <img src={row.img} className="w-8 h-8 object-cover rounded-md" />
              <div>
                <p className="text-gray font-medium">{row.name}</p>
                <p className="text-brown font-medium">{row.dept}</p>
              </div>
            </div>
          ),
        },
        {
          name: "Mobile",
          selector: (row) => row.mobile,
        },
        {
          name: "Gender",
          hide: 'sm',
          selector: (row) => <row.gender className="text-xl text-brown" />,
        },
        {
          name: "Active",
          hide: 'sm',
          selector: (row) => (
            <div>
              {row.active ? (
                <div className="flex items-center gap-2 text-green">
                  <p className="w-2 h-2 rounded-full bg-green "></p>
                  <p>Active</p>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red">
                  <p className="w-2 h-2 rounded-full bg-red "></p>
                  <p>Not active</p>
                </div>
              )}
            </div>
          ),
        },
        {
          name: "Actions",
          hide: 'md',
          selector: (row) => (
            <div className="flex items-center gap-5 ">
              <div className="bg-green w-8 h-8 rounded-full flex items-center justify-center text-white">
                <FaCheck />
              </div>
              <div className="bg-red w-8 h-8 rounded-full flex items-center justify-center text-white">
                <FaTimes />
              </div>
            </div>
          ),
        },
      ];
    
      const data = [
        {
          id: 1,
          name: "Beetlejuice",
          gender: FaVenus,
          mobile: "017158963141",
          dept: "Dermatologist",
          img: doctorImage1,
          active: true,
        },
        {
          id: 2,
          name: "Ghostbusters",
          gender: FaMars,
          mobile: "017158963141",
          dept: "Dermatologist",
          img: doctorImage2,
          active: true,
        },
        {
          id: 3,
          name: "Ghostbusters",
          gender: FaVenus,
          mobile: "017158963141",
          dept: "Dermatologist",
          img: doctorImage3,
          active: true,
        },
        {
          id: 4,
          name: "Ghostbusters",
          gender: FaMars,
          mobile: "017158963141",
          dept: "Dermatologist",
          img: doctorImage4,
          active: false,
        },
        {
          id: 5,
          name: "Ghostbusters",
          gender: FaVenus,
          mobile: "017158963141",
          dept: "Dermatologist",
          img: doctorImage5,
          active: false,
        },
      ];
    return (
        <section className="2xl:w-7/12 w-11/12 mx-auto">
          <div className="w-full flex flex-wrap items-center justify-center sm:justify-between gap-5">
            {cardsInfo.map((card, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 bg-white rounded-lg px-10 py-5"
              >
                <div
                  className={`bg-${card["bg-color"]} text-${card["text-color"]} p-2 rounded-md text-xl`}
                >
                  <card.icon />
                </div>
                <div>
                  <p className="text-gray text-sm">{card.title}</p>
                  <p className="font-bold text-soft_black">{card.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white sm:p-5 my-10 rounded-lg">
            <div className="flex flex-col sm:flex-row  items-center justify-between">
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
                  width={5000}
                  height={3000}
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
          <div className="my-10 rounded-lg bg-white">
            <DataTable
              fixedHeader
              fixedHeaderScrollHeight="400px"
              pointerOnHover
              highlightOnHover
              pagination
              responsive
              // selectableRows
              // selectableRowsHighlight
              expandableRows
              columns={columns}
              data={data}
              title="Doctors"
            />
          </div>
        </section>
    );
};

export default DashboardLeftSide;