import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../utils/authSlice";
import { AppDispatch } from "../../utils/store";
import NavItems from "./NavItems/NavItems";
import SidebarNavbar from "./SidebarNavbar/SidebarNavbar";

const Navbar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );

  const toggleSidebar = () => {
    dispatch(setIsOpen(!isOpen));
  };

  return (
    <>
      <nav className="text-black bg-white flex flex-row justify-between border border-b-4 items-center fixed top-0 w-full z-10">
        <NavItems />
        {isOpen && <SidebarNavbar />}
        <button onClick={toggleSidebar} className="flex md:hidden">
          {!isOpen && <MenuIcon />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
