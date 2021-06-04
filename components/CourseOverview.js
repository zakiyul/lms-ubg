import React from "react";
import Axios from "axios";
import Link from "next/link";
import { MdAssignment } from "react-icons/md";

const Assignment = () => {
  return (
    <Link href="/">
      <a className="flex items-center text-sm mt-2">
        <MdAssignment className="mr-2" /> You have assignment that need
        attention
      </a>
    </Link>
  );
};

const Card = ({ course }) => {
  return (
    <div className="border border-gray-300 rounded px-2 py-3 mb-2">
      <Link href="/">
        <a className="hover:underline text-blue-700 hover:text-blue-900 font-semibold">
          {course.title}
        </a>
      </Link>
      {course.assignment ? <Assignment /> : null}
    </div>
  );
};

const CourseOverview = () => {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    const getCourses = async () => {
      const res = await Axios.get(`http://localhost:3000/api/courses`);
      const data = res.data;
      setCourses(data);
    };
    getCourses();
  }, []);
  return (
    <div className="px-5 md:px-10 py-2">
      <div className="bg-gray-200 p-3 rounded">
        <h3 className="uppercase text-gray-500 text-base font-semibold mb-3">
          Course Overview
        </h3>
        <div>
          {courses &&
            courses.map((course) => {
              return <Card course={course} key={course.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
