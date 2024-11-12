import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../../utils/authSlice";
import { AppDispatch } from "../../../../utils/store";

const SidebarOverlay: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => {
            dispatch(setIsOpen(!isOpen));
          }}
        ></div>
      )}
    </>
  );
};

export default SidebarOverlay;
