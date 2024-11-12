import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../../../pages/Signin/Signin";
import { logoutUser } from "../../../utils/authActions";
import { setIsOpen, setOpen } from "../../../utils/authSlice";
import { AppDispatch } from "../../../utils/store";
import LeftNavItem from "../LeftNavItem/LeftNavItem";
import NavButton from "../NavButton/NavButton";
import SearchNavItem from "../SearchNavbar/SearchNavItem";

const NavItems: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );
  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );

  const toggleSidebar = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const handleLogin = () => {
    dispatch(setOpen(true));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="flex flex-wrap items-center w-full justify-between mx-4 sm:mx-8 lg:mx-24">
      {/* show the details of the left content of the navbar including  logo, home and Courses  */}
      <LeftNavItem />
      <div className="hidden md:flex space-x-4">
        {token?.length > 0 && <SearchNavItem />}
        <div className="mt-4">
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
  );
};

export default NavItems;
