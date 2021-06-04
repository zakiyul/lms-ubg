import React from "react";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { BiCaretDown, BiLogOut } from "react-icons/bi";
import { MdDashboard, MdGrade } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Dropdown = () => {
  return (
    <Fade top>
      <div className="bg-white border shadow right-5 md:right-14 mt-3 p-6 rounded h-60 w-35 z-30 absolute">
        <div className="flex flex-col">
          <a className="cursor-pointer flex items-center hover:text-gray-700">
            <MdDashboard className="mr-2" /> Dashboard
          </a>
          <hr className="my-3" />
          <a className="cursor-pointer flex items-center hover:text-gray-700">
            <CgProfile className="mr-2" /> Profile
          </a>
          <a className="cursor-pointer flex items-center hover:text-gray-700">
            <MdGrade className="mr-2" /> Grades
          </a>
          <a className="cursor-pointer flex items-center hover:text-gray-700">
            <TiMessage className="mr-2" /> Message
          </a>
          <a className="cursor-pointer flex items-center hover:text-gray-700">
            <BsGear className="mr-2" /> Preference
          </a>
          <hr className="my-3" />
          <a className="cursor-pointer flex items-center hover:text-gray-700">
            <BiLogOut className="mr-2" /> Log out
          </a>
        </div>
      </div>
    </Fade>
  );
};

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  return (
    <nav className="px-5 md:px-10 flex items-center py-2 bg-purple-200 justify-between shadow-sm">
      <Link href="/">LMS | Universitas Bumigora</Link>
      <ul className="flex items-center">
        <li>
          <button>
            <IoNotificationsOutline className="text-lg md:mr-5 mr-2" />
          </button>
        </li>
        <li>
          <button>
            <TiMessage className="text-lg md:mr-5" />
          </button>
        </li>
        <li>
          <Link href="/">
            <button
              onClick={() => setShow(!show)}
              className="text-gray-700 hover:text-black mouse-pointer flex items-center bg-purple-200 focus-group:bg-purple-100 md:px-5 rounded"
            >
              <span className="absolute invisible md:relative md:visible">
                Lalu Muhamad Zakiul Fikri
              </span>
              <img
                style={{ width: 35 }}
                src="https://e-learning.universitasbumigora.ac.id/pluginfile.php/20723/user/icon/clean/f1?rev=271175"
                alt="zakiul fikri"
                className="ml-2 rounded"
              />
              <BiCaretDown className="md:ml-2" />
            </button>
          </Link>
          {show && <Dropdown />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
