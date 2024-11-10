import StarIcon from "@mui/icons-material/Star";
import { FC } from "react";
import StarRatings from "../StarRatings/StarRatings";

const Trustpilot: FC = () => {
  return (
    <div className="my-4">
      <StarIcon className="text-green-500" />
      <span>Trustpilot</span>
      <div className="text-green-500 border">
        <StarRatings />
      </div>
    </div>
  );
};

export default Trustpilot;
