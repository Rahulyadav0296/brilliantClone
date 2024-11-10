import { useDispatch, useSelector } from "react-redux";
import Signin from "../../pages/Signin/Signin";
import { logoutUser } from "../../utils/authActions";
import { setOpen } from "../../utils/authSlice";
import { AppDispatch } from "../../utils/store";
import LeftNavItem from "./LeftNavItem/LeftNavItem";
import SearchNavItem from "./SearchNavbar/SearchNavItem";
function Navbar() {
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

        {token?.length > 0 && <SearchNavItem />}
        <div className="mt-2">
          {/* when user click the logic button the modal will open where user can use their credential and login  */}
          <button
            onClick={token?.length > 0 ? handleLogout : handleLogin}
            type="button"
            className="border-2 text-[18px] border-gray-300 px-4 py-2 rounded-3xl text-black font-bold"
          >
            {`${token?.length > 0 ? "Logout" : "Log in"} `}
          </button>
          <Signin />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
