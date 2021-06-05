import React from "react";
import { BiCaretRight, BiStop } from "react-icons/bi";
import Link from "next/link";

const Dropdown = () => {
  return (
    <ul className="ml-5">
      <li className="flex items-center">
        <BiStop />
        Site blogs
      </li>
      <li className="flex items-center">
        <BiStop />
        Site badges
      </li>
      <li className="flex items-center">
        <BiStop />
        Tags
      </li>
      <li className="flex items-center">
        <BiStop />
        Calender
      </li>
    </ul>
  );
};

const Navigation = () => {
  const [showPages, setShowPages] = React.useState(false);
  const [showCourse, setShowCourse] = React.useState(false);
  return (
    <div className="">
      <div className="p-3 bg-gray-200 rounded">
        <h3 className="text-gray-500 text-base font-semibold mb-3">
          NAVIGATION
        </h3>
        <h5 className="text-sm font-semibold">Dashboard</h5>
        <ul>
          <li className="text-sm hover:text-gray-800 flex items-center mb-1">
            <BiStop />{" "}
            <Link href="/">
              <a className="hover:underline cursor-pointer">Site Home</a>
            </Link>
          </li>
          <li className="text-sm hover:text-gray-800 mb-1">
            <button
              onClick={() => setShowPages(!showPages)}
              className=" flex items-center"
            >
              <BiCaretRight /> Site Pages
            </button>
            {showPages && <Dropdown />}
          </li>
          <li className="text-sm hover:text-gray-800">
            <button
              onClick={() => setShowCourse(!showCourse)}
              className=" flex items-center"
            >
              <BiCaretRight /> My Course
            </button>
            {showCourse && <Dropdown />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
