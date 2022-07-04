import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { admin } = useSelector((state: any) => state.auth);

  if (!admin.token) {
    return <></>;
  }
  return (
    <div className=" border border-r-slate-300 h-screen items-stretch pt-16 flex flex-col justify-between w-64">
      <div className="w-full">
        <Link
          to="/"
          className=" py-3   rounded-r-xl mr-3 flex justify-center cursor-pointer hover:bg-blue-200 mb-1"
        >
          <p>Add</p>
        </Link>
        <Link
          to="/list-movies"
          className=" py-3  rounded-r-xl mr-3 flex justify-center cursor-pointer hover:bg-blue-200 my-1"
        >
          <p>Movies</p>
        </Link>
      </div>
    </div>
  );
}
