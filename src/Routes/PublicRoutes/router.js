import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/LoginRegister/Register/Register";
import FindDoctorsContainer from "../../Pages/FindDoctors/FindDoctorsContainer/FindDoctorsContainer";
import ClinicAndCenters from "../../Pages/ClinicAndCenters/ClinicAndCentersContainer/ClinicAndCenters";
import ConditionsAndTreatments from "../../Pages/ConditionsAndTreatments/ConditionsAndTreatments/ConditionsAndTreatments";
import BookinAppointmentsContainer from "../../Pages/BookAppointments/BookinAppointmentsContainer/BookinAppointmentsContainer";
import BookingSummery from "../../Pages/BookAppointments/BookingSummery/BookingSummery";
import AllDoctors from "../../Pages/AllDoctors/AllDoctorsContainer/AllDoctors";

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
    //   {
    //     path: "/BookinSummery",
    //     element: <BookingSummery/>,
    //   },
    {
        path: "/Doctors",
        element: <AllDoctors/>,
      },
    ],
  },
]);
