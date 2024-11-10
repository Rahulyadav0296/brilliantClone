import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../Courses/Course/Course";
import LeftHome from "./LeftHome/LeftHome";
import ScientificThink from "./ScientificThink/ScientificThink";

const Home: FC = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/courses");
  };

  return (
    <div className="mx-auto w-full md:w-[70%] px-2 pt-20 my-40 md:my-10 flex flex-col md:flex-row  md:justify-between max-w-[calc(100%-20px)] md:max-w-[calc(100%-260px)]">
      {/* show the left content details including calender current user and unlock league blog  */}
      <LeftHome />
      <div className="mt-6 p-3 w-full md:w-[50%]  h-auto mr-0 md:mr-8">
        <h1 className="font-bold text-[20px] mb-4">Jump back in</h1>
        {/* Scientific Thinking blog details  */}
        <ScientificThink handleContinue={handleContinue} />
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
