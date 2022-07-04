import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/auth/actions";

export default function Navbar() {
  const { admin } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  if (!admin.token) {
    return <></>;
  }
  return (
    <div className="h-screen items-stretch flex flex-col justify-between w-64 bg-bg2 py-3">
      <div className="w-full">
        <div className="flex flex-row items-center mx-2 bg-bg3 rounded-md space-x-3 p-2 mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="h-14 w-14 object-cover rounded-md"
          />
          <p className="text-font w-full ml-4">{admin.name}</p>
        </div>
        <Link
          to="/"
          className=" py-2 rounded-md mx-2 flex justify-center cursor-pointer text-font bg-bg3 my-1"
        >
          <p>Add Movie</p>
        </Link>
        <Link
          to="/list-movies"
          className=" py-2 rounded-md mx-2 flex justify-center cursor-pointer text-font bg-bg3 my-1"
        >
          <p>Movies</p>
        </Link>
        <Link
          to="/category"
          className=" py-2 rounded-md mx-2 flex justify-center cursor-pointer text-font bg-bg3 my-1"
        >
          <p>Category</p>
        </Link>
      </div>
      <div
        className="py-2 rounded-md mx-2 flex justify-center cursor-pointer text-font bg-bg3 my-1"
        onClick={handleLogout}
      >
        <p className=" text-highlight">Log out</p>
      </div>
    </div>
  );
}
