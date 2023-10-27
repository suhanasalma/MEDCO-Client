import React, { useState } from "react";
import logo from "../../Assests/Logo/MEDCO2.png";
import {
  BiMap,
  BiCategoryAlt,
  BiHomeHeart,
  BiDetail,
  BiBell,
  BiCalendarStar,
  BiLogOut,
  BiMenu
} from "react-icons/bi";
import {
  TbLayoutDashboard,
  TbCalendarTime,
  TbFileLike,
  TbMessageDots,
  TbBrandBlogger,
  TbReportSearch,
  TbSettings,
} from "react-icons/tb";
import { MdOutlineReportProblem, MdGroups } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DashboardMenus = () => {
  const [openAccount, setOpenAccount] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openHomeCare, setOpenHomeCare] = useState(false);
  const [openOnlineConsultency, setOpenOnlineConsultency] = useState(false);
  const [openAppointment, setOpenAppointment] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const dashboardMenus = [
    { id: 1, name: "Dashboard", icon: TbLayoutDashboard, to: "/dashboard" },
    {
      id: 2,
      name: "Accounts",
      icon: MdGroups,
      open_icon: IoIosArrowUp,
      openIt: setOpenAccount,
      openAndClose: openAccount,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/home",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    {
      id: 3,
      name: "Region",
      icon: BiMap,
      open_icon: IoIosArrowUp,
      openIt: setOpenRegion,
      openAndClose: openRegion,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/home",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    {
      id: 4,
      name: "Categories",
      icon: BiCategoryAlt,
      open_icon: IoIosArrowUp,
      openIt: setOpenCategories,
      openAndClose: openCategories,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/dashboard",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    {
      id: 5,
      name: "Home care",
      icon: BiHomeHeart,
      open_icon: IoIosArrowUp,
      openIt: setOpenHomeCare,
      openAndClose: openHomeCare,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/dashboard",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    {
      id: 6,
      name: "Online Consultaions",
      icon: TbCalendarTime,
      open_icon: IoIosArrowUp,
      openIt: setOpenOnlineConsultency,
      openAndClose: openOnlineConsultency,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/dashboard",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    {
      id: 7,
      name: "Appointments",
      icon: TbCalendarTime,
      open_icon: IoIosArrowUp,
      openIt: setOpenAppointment,
      openAndClose: openAppointment,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/home",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    { id: 8, name: "Marketing Kit", icon: TbFileLike, to: "/" },
    {
      id: 9,
      name: "Legal Pages",
      icon: BiDetail,
      open_icon: IoIosArrowUp,
      openIt: setOpenPages,
      openAndClose: openPages,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/dashboard",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    {
      id: 10,
      name: "Blogs",
      icon: TbBrandBlogger,
      open_icon: IoIosArrowUp,
      openIt: setOpenBlog,
      openAndClose: openBlog,
      menus: [
        {
          id: 1,
          name: "Admin",
          to: "/home",
        },
        {
          id: 2,
          name: "Doctors",
          to: "/dashboard",
        },
        {
          id: 3,
          name: "Patients",
          to: "/home",
        },
        {
          id: 4,
          name: "Service Providers",
          to: "/dashboard",
        },
        {
          id: 5,
          name: "Roles",
          to: "/home",
        },
      ],
    },
    { id: 11, name: "Chats", icon: TbMessageDots, to: "/" },
    { id: 12, name: "Notifications", icon: BiBell, to: "/" },
    { id: 13, name: "Reports", icon: MdOutlineReportProblem, to: "/" },
    { id: 14, name: "Holidays", icon: BiCalendarStar, to: "/" },
    { id: 15, name: "Settings", icon: TbSettings, to: "/" },
  ];
  return (
   
      <div className="h-screen p-2 overflow-scroll">
      <Link to="/home" className="flex items-center justify-center my-5">
        <img className="w-10 lg:w-16 rounded-lg" src={logo} alt="" />
        <p className="text-green font-bold text-2xl">Medco</p>
      </Link>
      <div className="space-y-6">
        {dashboardMenus.map((menu, i) => (
          <div key={i}>
            {menu.menus ? (
              <>
                <div
                  onClick={() => menu.openIt(!menu.openAndClose)}
                  className={`${
                    menu.openAndClose
                      ? "bg-green text-white rounded-md shadow-md"
                      : "text-green"
                  } px-4 py-1 flex items-center justify-between gap-2 cursor-pointer`}
                >
                  <p className="flex items-center gap-2  font-semibold">
                    {menu.icon && <menu.icon className="text-xl" />}
                    {menu.name}
                  </p>

                  <menu.open_icon
                    className={`${
                      menu.openAndClose ? "rotate-0" : "rotate-180"
                    } duration-200 ease-in-out`}
                  />
                </div>
                <AnimatePresence>
                  {menu?.openAndClose && (
                    <motion.div
                      key="sub_menus"
                      initial={{ height: 0, opacity: 0, overflow: "hidden" }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className=" ml-7 mt-5"
                    >
                      {menu?.menus?.map((item, i) => (
                        <p key={i} className="mt-2 hover:text-green hover:bg-light-green hover:rounded-md">
                          <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                              `block w-full  px-2 py-1 ${
                                isActive
                                  ? "text-green bg-light-green rounded-md font-semibold shadow-md"
                                  : "text-gray"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  `block w-full  ${
                    isActive
                      ? "text-green bg-light-green rounded-md font-semibold shadow-md"
                      : "text-gray"
                  }`
                }
              >
                <p className="text-green px-4 py-1 flex items-center gap-2 cursor-pointer  font-semibold">
                  {menu.icon && <menu.icon className="text-xl" />}
                  {menu.name}
                </p>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <hr className="text-gray my-10" />
      <div className="flex items-center">
        <img
          className="w-20 h-20 object-cover rounded-full "
          src="https://img.freepik.com/free-vector/girl-shy-character_1450-155.jpg?w=2000"
          alt="gir"
        />
        <div className="">
          <p className="text-green font-medium text-md">suhana</p>
          <p className="text-gray text-sm">suhana800@gmail.com</p>
        </div>
      </div>
      <div className="p-2 bg-[#fbdddd] text-red text-center rounded-md my-5 flex items-center justify-center gap-2  ">
        <BiLogOut />
        <button className="text-sm ">Log out</button>
      </div>
    </div>
  );
};

export default DashboardMenus;
