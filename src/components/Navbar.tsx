import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/auth/actions";

export default function Navbar() {
  const { admin } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const navLinkStyle = ({ isActive }: any) => (
    isActive ? "nav-link nav-link-activated" : "nav-link"
  )
  if (!admin.token) {
    return <></>;
  }
  return (
    <div className="h-screen items-stretch flex flex-col justify-between w-64 bg-bg2 pb-3">
      <div className="w-full">
        <div className="flex flex-row items-center bg-bg3 space-x-3 px-3 py-5 mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="h-14 w-14 object-cover rounded-md"
          />
          <p className="text-font w-full ml-4">{admin.name}</p>
        </div>
        <NavLink
          to="/"
          className={navLinkStyle}
        >
          <p>Add Movie</p>
        </NavLink>
        <NavLink
          to="/list-movies"
          className={navLinkStyle}
        >
          <p>Movies</p>
        </NavLink>
        <NavLink
          to="/category"
          className={navLinkStyle}
        >
          <p>Category</p>
        </NavLink>
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
