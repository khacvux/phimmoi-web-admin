import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-gray-100 h-screen items-stretch pt-16 flex flex-col justify-between">
     
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
      
      <div className="w-full flex items-center justify-center pt-2 flex-col mb-20">
        
        <Link className=" bg-white  mt-1 rounded-2xl p-2" to="/signin">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="h-28 w-28 object-cover mb-1 rounded-xl"
        />
          <p className="text-center">Sign in</p>
        </Link>
      </div>
    </div>
  );
}
