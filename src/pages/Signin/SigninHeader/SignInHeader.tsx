import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../../utils/authActions";
import { AppDispatch } from "../../../utils/store";

const SignInHeader: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold  text-[20px] text-black mb-4 text-center mx-4">
        <span className="block md:hidden">Login</span>
        <span className="hidden md:block">
          Create a free account to <br /> discover your personalized <br />{" "}
          learning path
        </span>
      </h1>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            dispatch(googleLogin(navigate));
          }}
          className="flex items-center justify-center px-4 md:px-16 mx-1 cursor-pointer py-2 md:py-3 border-b-4 border rounded-3xl border-gray-300 bg-white w-[90%] max-w-[320px] md:w-[90%]"
        >
          <img
            className="w-[30px] h-[30px] rounded-full mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuCylfCG2dZericOE0yON4zGwunm7XMowFm0Pr5kZNgSon3HI6IrymtxE90aJfO68pkM&usqp=CAU"
            alt="Google Logo"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </>
  );
};

export default SignInHeader;
