import { FC } from "react";

interface NavButtonProps {
  token: string;
  handleLogout: () => void;
  handleLogin: () => void;
}

const NavButton: FC<NavButtonProps> = ({
  token,
  handleLogin,
  handleLogout,
}) => {
  return (
    <button
      onClick={token?.length > 0 ? handleLogout : handleLogin}
      type="button"
      className="border-2 text-[18px] border-gray-300 px-4 py-2 rounded-3xl text-black font-bold"
    >
      {`${token?.length > 0 ? "Logout" : "Log in"} `}
    </button>
  );
};

export default NavButton;
