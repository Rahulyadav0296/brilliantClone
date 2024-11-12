import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store";
import Course from "../Courses/Course/Course";
import LeftHome from "./LeftHome/LeftHome";
import ScientificThink from "./ScientificThink/ScientificThink";

const Home: FC = () => {
  const progress = useSelector((state: RootState) => state.course.progress);

  console.log("Progress is: ", progress);

  return (
    <div className="mx-auto w-full md:w-[70%]  px-2  mt-[130px] md:my-10 flex flex-col md:flex-row  md:justify-between max-w-[calc(100%-20px)] md:max-w-[calc(100%-260px)]">
      {/* show the left content details including calender current user and unlock league blog  */}
      <LeftHome />
      <div className="mt-6 p-3 w-full md:w-[50%]  h-auto mr-0 md:mr-8">
        <h1 className="font-bold text-[20px] mb-4">Jump back in</h1>
        {/* Scientific Thinking blog details  */}
        <ScientificThink />
        <div>
          <h1 className="text-[25px] font-bold">Recommended for you</h1>
          {/*we can map the database which containing math or any other category */}
          <Course showContent="Math" />
        </div>
      </div>
    </div>
  );
};

export default Home;
