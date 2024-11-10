import { FC } from "react";

interface GoogleButtonsProps {
  url: string;
  alt: string;
  onClick: () => void;
}

const GoogleButtons: FC<GoogleButtonsProps> = ({ url, alt, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-16 mx-1 cursor-pointer text-center py-2 border-b-4 border rounded-3xl border-gray-300 bg-white"
    >
      <img className="w-[30px] rounded-full" src={url} alt={alt} />
    </button>
  );
};

export default GoogleButtons;
