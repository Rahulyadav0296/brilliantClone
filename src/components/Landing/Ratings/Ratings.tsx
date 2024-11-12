import { FC } from "react";
import Images from "./Images/Images";
import StarContainer from "./StarContainer/StarContainer";
import Trustpilot from "./TrustPilot/TrustPilot";

const Ratings: FC = () => {
  return (
    <div className="flex flex-col mt-10 bg-white bg-gray-50 p-14">
      <h1 className="text-[35px] text-center font-bold font-custom">
        Join over 10 million people learning on brilliant
      </h1>
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <p className="font-customFontP mt-4 text-[35px]">
          The New York Times Atlantic
        </p>
        <StarContainer />
        <Trustpilot />
        <div className="flex flex-wrap">
          <Images image="./appOfTheDay.png" alt="app of the day" />
          <Images image="./images.png" alt="Editor Choice" />
        </div>
      </div>
    </div>
  );
};

export default Ratings;
