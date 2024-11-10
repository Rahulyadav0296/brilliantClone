// Signin component
import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../utils/authActions";
import { setOpen, setShowSignup } from "../../utils/authSlice";
import { AppDispatch } from "../../utils/store";
import OR from "./OR/OR";
import ShowSignupDetails from "./ShowSignupDetails/ShowSignupDetails";
import SigninForm from "./SignInForm/SigninForm";
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
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    dispatch(googleLogin(navigate));
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(setOpen(false));
      }}
    >
      <Box className="absolute rounded-xl top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row text-white border border-black shadow-lg p-4">
        <div className="mt-28">
          <img
            src="./login.jpg"
            alt="Logo in the login page"
            className="w-[300px] h-[300px] p-4 items-center justify-center"
          />
        </div>
        <div className="p-2 text-black">
          <h1 className="font-bold text-[20px] text-black mb-10 text-center mx-4">
            Create a free account to <br /> discover your personalized <br />{" "}
            learning path
          </h1>
          <div className="text-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full border mx-1 cursor-pointer flex items-center justify-center py-2 border-b-4 rounded-3xl border-gray-300 bg-white"
            >
              <img
                className="w-[30px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuCylfCG2dZericOE0yON4zGwunm7XMowFm0Pr5kZNgSon3HI6IrymtxE90aJfO68pkM&usqp=CAU"
                alt="Google Logo"
              />
            </button>
          </div>

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
        <p className="text-center text-red-600 text-[15px]">{error}</p>
      </Box>
    </Modal>
  );
};

export default Signin;
