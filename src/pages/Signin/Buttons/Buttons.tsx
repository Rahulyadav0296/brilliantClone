import { FC } from "react";

interface ButtonsProps {
  children: string;
}

const Buttons: FC<ButtonsProps> = ({ children }) => {
  return (
    <button
      type="submit"
      className="px-4 md:px-16 mx-1 cursor-pointer text-center py-2 md:py-3 border-b-4 border rounded-3xl  bg-black text-white w-[90%] max-w-[320px] md:w-[90%]"
    >
      {children}
    </button>
  );
};

export default Buttons;
