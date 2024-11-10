import { FC } from "react";

interface ButtonsProps {
  children: string;
}

const Buttons: FC<ButtonsProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-black font-bold text-white mt-4 w-full p-3 rounded-3xl"
    >
      {children}
    </button>
  );
};

export default Buttons;
