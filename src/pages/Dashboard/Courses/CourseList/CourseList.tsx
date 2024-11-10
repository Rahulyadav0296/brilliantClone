import { FC } from "react";
import { Element } from "react-scroll";
import Course from "../Course/Course";

const CourseList: FC = () => {
  return (
    <div className="pt-10 mt-10">
      <Element id="newcourses" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">New Courses</h1>
        <Course showContent="New Courses" />
      </Element>

      <Element id="math" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Math</h1>
        <Course showContent="Math" />
      </Element>

      <Element id="data" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Date</h1>
        <Course showContent="Data" />
      </Element>

      <Element id="computerscience" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Computer Science</h1>
        <Course showContent="Computer Science" />
      </Element>

      <Element id="science" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Science</h1>
        <Course showContent="Science" />
      </Element>
    </div>
  );
};

export default CourseList;
