import { FC } from "react";
import { useSelector } from "react-redux";
import SidebarClear from "./SidebarClear/SidebarClear";
import SidebarLogin from "./SidebarLogin/SidebarLogin";
import SidebarOverlay from "./SidebarOverlay/SidebarOverlay";

const SidebarNavbar: FC = () => {
  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );

  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 bg-white text-black w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-out z-20`}
      >
        {/* Close button component inside the sidebar */}
        <SidebarClear />

        {/* Login or additional sidebar content */}
        <SidebarLogin />
      </div>

      {/* Overlay that appears over the main content when the sidebar is open */}
      <SidebarOverlay />
    </>
  );
};

export default SidebarNavbar;
