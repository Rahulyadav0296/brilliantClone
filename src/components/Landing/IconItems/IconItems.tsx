import { SxProps } from "@mui/material";
import React from "react";

interface IconItemsProps {
  Icon: React.ComponentType<{ sx?: SxProps }>;
  label: string;
  color: string;
}

const IconItems: React.FC<IconItemsProps> = ({ Icon, label, color }) => {
  return (
    <div className="flex items-center space-x-2 text-[20px]">
      <Icon sx={{ color: color, fontSize: "20px" }} />
      <span className="font-semibold text-gray-700">{label}</span>
    </div>
  );
};

export default IconItems;
