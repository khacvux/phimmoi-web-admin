import React from "react";

export default function Header() {
  return (
    <div className="py-5 flex flex-row items-center justify-end px-10 space-x-5 text-sm border-b border-slate-300">
      <div className=" font-semibold text-sky-600 cursor-pointer">
        <p>Update</p>
      </div>
      <div className=" font-semibold text-sky-600 cursor-pointer">
        <p>Delete</p>
      </div>
    </div>
  );
}
