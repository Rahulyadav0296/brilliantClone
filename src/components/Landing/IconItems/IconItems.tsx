import React from "react";

interface IconItemsProps {
  Icon: React.ComponentType;
  label: String;
  color: String;
}

const IconItems: React.FC<IconItemsProps> = ({ Icon, label, color }) => {
  return (
    <div className="flex items-center space-x-2 text-[20px]">
      <Icon sx={{ color: color }} className="text-[20px]" />
      <span className="font-semibold text-gray-700">{label}</span>
    </div>
  );
};

export default IconItems;
