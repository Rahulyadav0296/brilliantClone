import StarIcon from "@mui/icons-material/Star";
import { FC } from "react";

const StarRatings: FC = () => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} />);
  }
  return <div className="border-none">{stars}</div>;
};

export default StarRatings;
