import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setIsOpen } from "../../../../utils/authSlice";
import { AppDispatch } from "../../../../utils/store";

const SidebarLogo: FC = () => {
  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ul
      onClick={() => {
        dispatch(setIsOpen(!isOpen));
      }}
      className="flex flex-col sm:flex-row justify-between items-center text-center sm:ml-8 text-[20px] mt-4 w-full sm:w-[450px] px-1"
    >
      <li className="text-[28px] sm:text-[35px] mb-2 sm:mb-0">
        <Link
          to="/"
          className="flex items-center text-[40px] text-gray-800 font-bold no-underline"
        >
          Brilliant
        </Link>
      </li>
      {token.length > 0 && (
        <>
          <li className="w-full sm:w-auto">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `inline-flex items-center justify-center sm:justify-start mx-2 sm:mx-4 py-2 mt-1 border-b-2 ${
                  isActive
                    ? "border-black font-semibold"
                    : "text-gray-800 border-transparent"
                }`
              }
            >
              <HomeIcon className="mr-2" />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="w-full sm:w-auto">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `inline-flex items-center justify-center sm:justify-start mx-2 sm:mx-4 py-2 mt-1 border-b-2 ${
                  isActive
                    ? "border-black font-semibold"
                    : "text-gray-800 border-transparent"
                }`
              }
            >
              <LibraryBooksIcon className="mr-2" />
              <span>Courses</span>
            </NavLink>
          </li>
          {/* for reducing the code line define the component ListItem which show the information of the list  */}
        </>
      )}
    </ul>
  );
};

export default SidebarLogo;
