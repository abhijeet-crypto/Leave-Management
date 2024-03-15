import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Employee from "./Employee";
import Manager from "./Manager";
import { useSelector } from "react-redux";
import Error from "./Error";

const Body = () => {
  const role = useSelector((store) => store?.user?.role);
  //   console.log(role);
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/employee",
      element: role === "Employee" ? <Employee></Employee> : <Error></Error>,
    },
    {
      path: "/manager",
      element: role === "Manager" ? <Manager></Manager> : <Error></Error>,
    },
  ]);

  return (
    <div className="bg-gradient-to-l from-purple-500 w-screen h-screen">
      <RouterProvider router={approuter}></RouterProvider>
    </div>
    // <div className="font-mono bg-gradient-to-bl from-purple-800">
    //   <Navbar></Navbar>
    //   <Home></Home>
    // </div>
  );
};

export default Body;
