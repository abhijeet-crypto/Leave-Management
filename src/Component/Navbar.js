import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-32 py-2 border-b border-solid border-green-950 ">
      <div className="text-xl md:text-3xl">
        <Link to="/"> Leave Management </Link>
      </div>
      <div className=" shadow-slate-600 shadow-sm text-black text-xl border border-solid border-purple-900 rounded py-1 px-6 cursor-pointer hover:bg-purple-600 font-mono">
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
