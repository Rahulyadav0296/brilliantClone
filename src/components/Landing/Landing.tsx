import { FC } from "react";
import BrilliantCategory from "./BrilliantCategory/BrilliantCategory";
import IpadVisual from "./IpadVisual/IpadVisual";
import LearnByDoing from "./LearnByDoing/LearnByDoing";
import Ratings from "./Ratings/Ratings";

const Landing: FC = () => {
  return (
    <>
      <div className="mx-auto px-2 pt-20 flex flex-col md:flex-row items-center justify-between mt-5 max-w-[calc(100%-20px)] md:max-w-[calc(100%-260px)]">
        {/* Left Content of the landing page which shows Learn by doing details  */}
        <LearnByDoing />
        {/* Show the visualization to the right side  */}
        <IpadVisual />
      </div>
      {/* Categories of the course list  */}
      <div className=" mx-auto px-2 mt-5 max-w-[calc(100%-20px)] md:max-w-[calc(100%-260px)]">
        <BrilliantCategory />
      </div>
      {/* All the rating details in the component  */}
      <Ratings />
    </>
  );
};

export default Landing;
