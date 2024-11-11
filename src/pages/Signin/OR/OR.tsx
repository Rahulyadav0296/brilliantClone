import { FC } from "react";

const OR: FC = () => {
  return (
    <div className="flex items-center w-[320px] mx-20 md:mx-24 my-4 text-center justify-center">
      <div className="border-t border-gray-800 flex-grow mr-2"></div>{" "}
      {/* Reduced right margin */}
      <div className="mx-2 text-black">OR</div>{" "}
      {/* Reduced margin around the OR */}
      <div className="border-t border-gray-800 flex-grow ml-2"></div>{" "}
      {/* Reduced left margin */}
    </div>
  );
};

export default OR;
