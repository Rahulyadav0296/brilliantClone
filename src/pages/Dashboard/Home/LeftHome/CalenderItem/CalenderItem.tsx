import FlashOnIcon from "@mui/icons-material/FlashOn";
import StopIcon from "@mui/icons-material/Stop";
import { FC } from "react";
const calender = [
  { id: 1, text: "T", color: "yellow-green" },
  { id: 2, text: "W", color: "gray" },
  { id: 3, text: "Th", color: "gray" },
  { id: 4, text: "F", color: "gray" },
  { id: 5, text: "S", color: "gray" },
];

const CalenderItem: FC = () => {
  return (
    <>
      <p>
        Solve <strong>3 problems </strong>to continue your streak
      </p>
      <div className="flex flex-wrap md:flex-row mt-3 mb-6">
        {calender.map((week) => (
          <div key={week.id}>
            <div
              className={`rounded-full border border-gray-500 cursor-pointer ${
                week.id === 1 ? "bg-green-500" : "bg-white"
              } mr-3 my-1 p-3`}
            >
              <FlashOnIcon
                className={`${week.id === 1 ? "text-black" : "text-gray-300"} `}
              />
            </div>
            <p className={`ml-4 ${week.id === 2 ? "font-bold" : ""}`}>
              {week.text}
            </p>
          </div>
        ))}
        <div className="flex flex-col">
          <StopIcon sx={{ fontSize: "35px" }} className="text-green-500" />
          <StopIcon sx={{ fontSize: "35px" }} className="text-gray-300" />
        </div>
      </div>
    </>
  );
};

export default CalenderItem;
