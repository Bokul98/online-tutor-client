import {
  createBrowserRouter,
} from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import TutorDetailsPage from "../pages/TutorDetailsPage/TutorDetailsPage";
import PrivateRoute from "./PrivateRoute";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import FindTutors from "../pages/FindTutors/FindTutors";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import ErrorPage from "../pages/Error/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "register",
          Component: Register
        },
        {
          path: "login",
          Component: Login
        },
        {
          path: "tutor-details/:id",
          element: (
            <PrivateRoute>
              <TutorDetailsPage />
            </PrivateRoute>
          )
        },
        {
          path: "add-tutorials",
          element: (
            <PrivateRoute>
              <AddTutorials />
            </PrivateRoute>
          )
        },
        {
          path: "my-tutorials",
          element: (
            <PrivateRoute>
              <MyTutorials />
            </PrivateRoute>
          )
        },
        {
          path: "find-tutors",
          Component: FindTutors
        },
        {
          path: "my-booked-tutors",
          element: (
            <PrivateRoute>
              <MyBookedTutors />
            </PrivateRoute>
          )
        },
    ]
  },
]);

export default Router;