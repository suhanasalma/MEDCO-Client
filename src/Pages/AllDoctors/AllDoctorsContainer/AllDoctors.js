import React, { useEffect, useState } from "react";
import DoctorSearchFields from "../DoctorSearchFields/DoctorSearchFields";
import AllDoctorCards from "../AllDoctorCards/AllDoctorCards";
import AppointmentSummery from "../../../Components/AppointmentSummery/AppointmentSummery";
import BreadCrumbs from "../../../Components/BreadCrumbs/BreadCrumbs";
import DoctorDetails from "../../../Components/DoctorDetails/DoctorDetails";
import { MdOutlineExpandMore } from "react-icons/md";

const AllDoctors = () => {
  const [appointmentSummeryPage, setAppointmentSummeryPage] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState(false);
  const [filterOptions, setFilterOptions] = useState(false);
  useEffect(() => {
    if (doctorDetails) {
      // Prevent scrolling of the page when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling of the page when the modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [doctorDetails]);
  return (
    <div className={`my-5 w-11/12 2xl:w-10/12 mx-auto`}>
      <BreadCrumbs
        breadcrumbs={[
          { title: "Home", link: "/home" },
          {
            title: "Doctors",
            active: true,
            link: "/Doctors",
          },
        ]}
      />
      {appointmentSummeryPage ? (
        <div className="w-11/12 sm:w-9/12 mx-auto ">
          <AppointmentSummery
            setAppointmentSummeryPage={setAppointmentSummeryPage}
          />
        </div>
      ) : (
        <>
          <p className="text-center text-3xl text-green">
            Search Doctor, Make an Appointment
          </p>
          <p className="text-center text-sm text-gray my-5">
            Discover the best doctors, clinic & hospital the city nearest to
            you.
          </p>
          <section className="w-full mx-auto md:flex justify-between gap-5 lg:gap-10 border-t-2 border-green relative">
            <p
              onClick={() => setFilterOptions(!filterOptions)}
              className="md:hidden border-[1px] border-brown mt-5 px-4 py-2 w-11/12 mx-auto flex justify-between items-center text-green"
            >
              Search Doctor <MdOutlineExpandMore className={`text-2xl duration-300 transition-all ease-in-out ${filterOptions?" rotate-0":"rotate-180 "} `}/>
            </p>
            <DoctorSearchFields doctorDetails={doctorDetails} filterOptions={filterOptions} />
            <AllDoctorCards
              setDoctorDetails={setDoctorDetails}
              doctorDetails={doctorDetails}
              setAppointmentSummeryPage={setAppointmentSummeryPage}
            />
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
              className={`fixed top-0 transition-all w-full duration-700 ease-in-out ${
                doctorDetails ? "right-0" : "right-[-5000px]"
              }`}
            >
              <DoctorDetails setDoctorDetails={setDoctorDetails} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AllDoctors;
