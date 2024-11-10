import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="w-full bg-black p-2 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center md:ml-4 mb-2 md:mb-0">
        <img
          src="./download.png"
          alt="Brilliant"
          className="w-10 md:w-[50px]"
        />
        <h1 className="text-white text-lg md:text-[25px] md:ml-2">Brilliant</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <h1 className="text-white text-lg md:text-[25px]">created by</h1>
        <img
          src="./mobbin.png"
          alt="The Mobbin"
          className="w-10 md:w-14 md:mx-2"
        />
        <h1 className="text-white text-lg md:text-[25px]">Mobbin</h1>
      </div>
    </div>
  );
};

export default Footer;
