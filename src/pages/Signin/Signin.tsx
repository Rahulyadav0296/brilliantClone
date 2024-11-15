// Signin component
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen, setShowSignup } from "../../utils/authSlice";
import { AppDispatch } from "../../utils/store";
import OR from "./OR/OR";
import ShowSignupDetails from "./ShowSignupDetails/ShowSignupDetails";
import SigninForm from "./SignInForm/SigninForm";
import SignInHeader from "./SigninHeader/SignInHeader";
import SignupForm from "./SignupForm/SignupForm";

const Signin: FC = () => {
  const open = useSelector(
    (state: { auth: { open: boolean } }) => state.auth.open
  );
  const error = useSelector(
    (state: { auth: { error: string } }) => state.auth.error
  );
  const showSignup = useSelector(
    (state: { auth: { showSignup: boolean } }) => state.auth.showSignup
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(setOpen(false));
      }}
    >
      <Box className="absolute rounded-xl top-1/2 md:mt-0 left-1/2 w-[90%] md:w-[720px]  bg-white transform -translate-x-1/2 -translate-y-1/2 text-black shadow-lg">
        <button
          onClick={() => {
            dispatch(setOpen(false));
          }}
          className="p-1 mr-2 font-bold mt-1 flex justify-end text-right ml-auto bg-gray-100 rounded-full"
        >
          <ClearIcon sx={{ fontSize: "25px" }} />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center text-center h-full mt-6 md:mt-40">
            <img
              src="./login.jpg"
              alt="Logo in the login page"
              className="w-[150px] md:w-[250px] h-[150px] md:h-[250px]"
            />
          </div>

          <div className=" text-black">
            <SignInHeader />

            <OR />

            {showSignup ? (
              <>
                <SignupForm />

                <ShowSignupDetails
                  onClick={() => {
                    dispatch(setShowSignup(false));
                  }}
                >
                  Log In
                </ShowSignupDetails>
              </>
            ) : (
              <>
                <SigninForm />
                <ShowSignupDetails
                  onClick={() => {
                    dispatch(setShowSignup(true));
                  }}
                >
                  Sign up
                </ShowSignupDetails>
              </>
            )}
          </div>
        </div>
        <p className="text-center text-red-600 text-[15px]">{error}</p>
      </Box>
    </Modal>
  );
};

export default Signin;
