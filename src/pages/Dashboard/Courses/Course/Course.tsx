import { FC } from "react";
import { courseDetails } from "../../../../utils/CourseDetails";

interface CourseProps {
  showContent: string;
}

const Course: FC<CourseProps> = ({ showContent }) => {
  const newArray = courseDetails.filter(
    (course) => course.category === showContent
  );
  return (
    <div className="text-center md:text-left my-4">
      <div className="flex flex-wrap items-center justify-center text-left md:items-start md:justify-start md:text-left mx-auto mb-6">
        {newArray &&
          newArray.map((course: any) => (
            <div key={course.id} className="my-1 mr-4">
              <div className="relative cursor-pointer flex flex-col rounded-2xl border border-b-4 border-gray-400 p-8 w-full md:w-[180px] my-2">
                {course.category === "New Courses" && (
                  <p className="absolute top-[5px] right-[5px] bg-green-500 text-white text-sm px-2 py-1 rounded-md shadow-lg">
                    New
                  </p>
                )}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[100px] my-2 shadow-md"
                />
              </div>
              <h3 className="text-center w-[190px] mt-4 mb-8 text-md font-semibold">
                {course.title}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Course;
