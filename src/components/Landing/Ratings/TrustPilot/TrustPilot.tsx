import StarIcon from "@mui/icons-material/Star";
import { FC } from "react";
import StarRatings from "../StarRatings/StarRatings";

const Trustpilot: FC = () => {
  return (
    <div className="my-4 flex flex-">
      <div className="flex flex-wrap">
        <StarIcon className="text-green-500" />
        <span>Trustpilot</span>
      </div>
      <div className="text-green-500 mt-2">
        <StarRatings />
      </div>
    </div>
  );
};

export default Trustpilot;
