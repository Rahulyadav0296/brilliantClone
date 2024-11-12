import ClearIcon from "@mui/icons-material/Clear";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../../utils/authSlice";
import { AppDispatch } from "../../../../utils/store";
const SidebarClear: FC = () => {
  const isOpen = useSelector(
    (state: { auth: { isOpen: boolean } }) => state.auth.isOpen
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="p-4">
      <button
        className="text-black"
        onClick={() => {
          dispatch(setIsOpen(!isOpen));
        }}
      >
        <ClearIcon />
      </button>
    </div>
  );
};

export default SidebarClear;
