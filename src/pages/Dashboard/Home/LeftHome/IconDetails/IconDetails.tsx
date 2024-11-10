import FlashOnIcon from "@mui/icons-material/FlashOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FC } from "react";

interface IconDetailsProps {
  onClick: () => void;
  showCalender: boolean;
}

const IconDetails: FC<IconDetailsProps> = ({ onClick, showCalender }) => {
  return (
    <div className="flex flex-row justify-between mb-4">
      <p className="font-bold text-[60px]">
        <span>1</span>
        <FlashOnIcon
          className="text-gray-400"
          sx={{
            fontSize: "50px",
          }}
        />
      </p>
      <div
        onClick={onClick}
        className=" bg-gray-200 mt-4 h-8 mr-2 rounded-full cursor-pointer"
      >
        {!showCalender ? (
          <KeyboardArrowDownIcon className="text-[25px]" />
        ) : (
          <KeyboardArrowUpIcon className="text-[25px]" />
        )}
      </div>
    </div>
  );
};

export default IconDetails;
