import { FC } from "react";
import { Element } from "react-scroll";
import Course from "../Course/Course";

const CourseList: FC = () => {
  return (
    <div className="pt-20 mt-10">
      <Element name="New Courses" id="newcourses" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">New Courses</h1>
        <Course showContent="New Courses" />
      </Element>

      <Element id="math " name="math" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Math</h1>
        <Course showContent="Math" />
      </Element>

      <Element id="data" name="Data" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Date</h1>
        <Course showContent="Data" />
      </Element>

      <Element id="computerscience" name="Computer Science" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Computer Science</h1>
        <Course showContent="Computer Science" />
      </Element>

      <Element id="science" name="Science" className="pt-20">
        <h1 className="text-[20px] font-bold my-3">Science</h1>
        <Course showContent="Science" />
      </Element>
    </div>
  );
};

export default CourseList;
