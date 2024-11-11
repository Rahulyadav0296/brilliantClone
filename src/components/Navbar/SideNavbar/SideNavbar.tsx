import ClearIcon from "@mui/icons-material/Clear";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../utils/authActions";
import { setIsOpen } from "../../../utils/authSlice";
import { AppDispatch } from "../../../utils/store";
import LeftNavItem from "../LeftNavItem/LeftNavItem";
import SearchNavItem from "../SearchNavbar/SearchNavItem";

const SideNavbar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );
  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );

  const handleLogin = () => {
    dispatch(setIsOpen(true));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-2/3 md:hidden`}
    >
      {/* Close button at the top of the sidebar */}
      <button
        onClick={() => {
          dispatch(setIsOpen(!isOpen));
        }}
        className="absolute top-4 right-4 text-black focus:outline-none"
      >
        <ClearIcon fontSize="large" />
      </button>

      {/* Sidebar content */}
      <div className="mt-16 flex flex-col items-center space-y-6">
        {/* Search item (if token exists) */}
        <LeftNavItem />
        {token?.length > 0 && <SearchNavItem />}

        {/* Login/Logout button */}
        <button
          onClick={token?.length > 0 ? handleLogout : handleLogin}
          type="button"
          className="border-2 text-[18px] border-gray-300 px-4 py-2 rounded-3xl text-black font-bold"
        >
          {token?.length > 0 ? "Logout" : "Log in"}
        </button>
        <Signin />
      </div>
    </div>
  );
};

export default SideNavbar;
