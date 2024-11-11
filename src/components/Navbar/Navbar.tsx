import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../../pages/Signin/Signin";
import { logoutUser } from "../../utils/authActions";
import { setOpen } from "../../utils/authSlice";
import { AppDispatch } from "../../utils/store";
import LeftNavItem from "./LeftNavItem/LeftNavItem";
import NavButton from "./NavButton/NavButton";
import SearchNavItem from "./SearchNavbar/SearchNavItem";

const Navbar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );

  const handleLogin = () => {
    dispatch(setOpen(true));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="text-black bg-white fixed top-0 w-full z-10">
      <div className="flex flex-wrap items-center justify-between mx-4 sm:mx-8 lg:mx-24">
        {/* show the details of the left content of the navbar including  logo, home and Courses  */}

        <LeftNavItem />

        <div className="hidden md:flex items-center space-x-4">
          {token?.length > 0 && <SearchNavItem />}
          <div className="mt-2">
            {/* when user click the logic button the modal will open where user can use their credential and login  */}
            <NavButton
              token={token}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
            <Signin />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
