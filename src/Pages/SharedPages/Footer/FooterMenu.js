import React, { useState } from "react";
import { TbCaretDown } from "react-icons/tb";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWeixin,
} from "react-icons/fa";

const FooterMenu = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const services = [
    { name: "Teleconsultation with our Doctors" },
    { name: "Book Appointment" },
    { name: "Send Inquiry" },
    { name: "Find a Doctor" },
    { name: "See Conditions and Treatments" },
    { name: "View Our Clinics and Centers" },
    { name: "Subscribe to Free E-Newsletter" },
    { name: "Teleconsultation with our Doctors" },
    { name: "Book Appointment" },
    { name: "Send Inquiry" },
    { name: "Find a Doctor" },
    { name: "See Conditions and Treatments" },
    { name: "View Our Clinics and Centers" },
    { name: "Subscribe to Free E-Newsletter" },
  ];
  return (
    <section className="my-10">
      <div className="flex justify-center items-center gap-5">
        <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
          <FaFacebookF />
        </div>
        <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
          <FaTwitter />
        </div>
        <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
          <FaInstagram />
        </div>
        <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
          <FaYoutube />
        </div>
        <div className="border-2 border-light-gray rounded-full p-2 text-green hover:scale-125 duration-1000 ease-in-out hover:border-green hover:text-brown">
          <FaWeixin />
        </div>
      </div>
      <div className="mt-10 md:flex lg:justify-center gap-20 flex-wrap lg:flex-nowrap p-10 hidden">
        <div>
          <p className="border-b-2 border-brown">Service</p>
          <ul className="text-sm text-gray list-disc ml-7 mt-5">
            {services?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-b-2 border-brown">Service</p>
          <ul className="text-sm text-gray list-disc ml-7 mt-5">
            {services?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-b-2 border-brown">Service</p>
          <ul className="text-sm text-gray list-disc ml-7 mt-5">
            {services.slice(0, 5)?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-b-2 border-brown">Service</p>
          <ul className="text-sm text-gray list-disc ml-7 mt-5">
            {services?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 p-10 md:hidden space-y-5">
        <div>
          <div
            onClick={() => setOpen1((prevOpen) => !prevOpen)}
            className="flex justify-between items-center text-green"
          >
            <p className="">Service</p>
            <TbCaretDown />
          </div>
          <ul
            className={`${
              open1 ? "text-sm text-gray list-disc ml-7 mt-5" : "hidden"
            }`}
          >
            {services?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            onClick={() => setOpen2((prevOpen) => !prevOpen)}
            className="flex justify-between items-center text-green"
          >
            <p className="">Service1</p>
            <TbCaretDown />
          </div>
          <ul
            className={`${
              open2 ? "text-sm text-gray list-disc ml-7 mt-5" : "hidden"
            }`}
          >
            {services?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            onClick={() => setOpen3((prevOpen) => !prevOpen)}
            className="flex justify-between items-center text-green"
          >
            <p className="">Service2</p>
            <TbCaretDown />
          </div>
          <ul
            className={`${
              open3 ? "text-sm text-gray list-disc ml-7 mt-5" : "hidden"
            }`}
          >
            {services.slice(0, 5)?.map((service, i) => (
              <li key={i} className="cursor-pointer">
                {service.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            onClick={() => setOpen4((prevOpen) => !prevOpen)}
            className="flex justify-between items-center text-green"
          >
            <p className="">Service3</p>
            <TbCaretDown className="" />
          </div>
          <ul
            className={`ease-in-out delay-500 ${
              open4 ? "text-sm text-gray list-disc ml-7 mt-5" : "hidden"
            }`}
          >
            {services?.map((service, i) => (
              <li className="cursor-pointer" key={i}>
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterMenu;
