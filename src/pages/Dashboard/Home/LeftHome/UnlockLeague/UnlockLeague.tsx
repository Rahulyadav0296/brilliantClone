import LockOpenIcon from "@mui/icons-material/LockOpen";
import { FC } from "react";
const UnlockLeague: FC = () => {
  return (
    <div className="flex flex-row border border-gray-500 p-3 rounded-xl ">
      <LockOpenIcon sx={{ fontSize: "100px" }} className="text-[#b46c13]" />
      <div className="flex flex-col items-center justify-center">
        <p className="text-color font-bold">UNLOCK LEAGUES</p>
        <p className="text-gray-600">70 of 175 XP</p>
      </div>
    </div>
  );
};

export default UnlockLeague;
