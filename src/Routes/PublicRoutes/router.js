import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/LoginRegister/Register/Register";
import FindDoctorsContainer from "../../Pages/FindDoctors/FindDoctorsContainer/FindDoctorsContainer";
import ClinicAndCenters from "../../Pages/ClinicAndCenters/ClinicAndCentersContainer/ClinicAndCenters";
import ConditionsAndTreatments from "../../Pages/ConditionsAndTreatments/ConditionsAndTreatments/ConditionsAndTreatments";
import BookinAppointmentsContainer from "../../Pages/BookAppointments/BookinAppointmentsContainer/BookinAppointmentsContainer";
import AppointmentSummery from "../../Components/AppointmentSummery/AppointmentSummery";
import AllDoctors from "../../Pages/AllDoctors/AllDoctorsContainer/AllDoctors";
import ContactUsContainer from "../../Pages/ContactUs/ContactUsContainer/ContactUsContainer";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../LayOut/DashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/findDoctors",
                element: <FindDoctorsContainer />,
            },
            {
                path: "/ClincAndCenter",
                element: <ClinicAndCenters />,
            },
            {
                path: "/ConditionsAndTreatment",
                element: <ConditionsAndTreatments />,
            },
            {
                path: "/BookinAppointments",
                element: <BookinAppointmentsContainer />,
            },
            {
                path: "/AppointmentSummery",
                element: <AppointmentSummery />,
            },
            {
                path: "/Doctors",
                element: <AllDoctors />,
            },
            {
                path: "/ContactUs",
                element: <ContactUsContainer />,
            },
           
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);
