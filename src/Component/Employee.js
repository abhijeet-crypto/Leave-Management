import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Employee = () => {
  const data = useSelector((store) => store.user.name);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col">
        <div className="flex pt-5 justify-center text-xl text-blue-700">
          Hey <p className="font-bold px-2 text-red-500 ">{data}</p>Welcome to
          Employee Dashboard:
        </div>
        <div className="flex flex-row text-xl font-semibold pt-20">
          <div className="flex flex-1 justify-center">
            Want A Leave Fill The Form
            <form>
              <input type="text"></input>
            </form>
          </div>
          <div className="flex flex-1 justify-center">
            Status of Leave Applications
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
