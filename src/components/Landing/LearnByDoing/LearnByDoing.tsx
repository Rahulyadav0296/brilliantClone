import { useDispatch, useSelector } from "react-redux";
import Signin from "../../../pages/Signin/Signin";
import { setOpen } from "../../../utils/authSlice";
import { AppDispatch } from "../../../utils/store";

function LearnByDoing() {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(
    (state: { auth: { token: string } }) => state.auth.token
  );

  const handleOpen = () => {
    if (token.length === 0) {
      dispatch(setOpen(true));
    }
  };

  return (
    <div className="w-full sm:w-[50%] h-auto">
      <h1 className="text-[40px] sm:text-[70px] font-bold font-customFontH">
        Learn by <span className="text-blue-500">doing</span>
      </h1>
      <p className="font-custom my-3 text-[18px] sm:text-[24px]">
        Guided Interactive problem solving that's effective <br />
        and fun, Master concepts in 15 minutes a day.
      </p>
      {/* when user click the logic button the modal will open where user can use their credential and login  */}
      <button
        onClick={handleOpen}
        className="bg-green-500 text-[20px] mt-4 shadow-black-shadow px-8 sm:px-[120px] py-[10px] text-white rounded-3xl"
      >
        Get Started
      </button>
      <Signin />
    </div>
  );
}

export default LearnByDoing;
