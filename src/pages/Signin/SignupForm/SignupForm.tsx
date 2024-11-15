import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../../utils/authActions";
import {
  setAge,
  setEmail,
  setError,
  setFirstName,
  setLastName,
  setPassword,
} from "../../../utils/authSlice";
import { AppDispatch } from "../../../utils/store";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import TermCondition from "../TermsCondition/TermCondition";

const SignupForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector(
    (state: { auth: { email: string } }) => state.auth.email || ""
  );
  const password = useSelector(
    (state: { auth: { password: string } }) => state.auth.password || ""
  );
  const loading = useSelector(
    (state: { auth: { loading: string } }) => state.auth.loading || ""
  );
  const firstName = useSelector(
    (state: { auth: { firstName: string } }) => state.auth.firstName || ""
  );
  const lastName = useSelector(
    (state: { auth: { lastName: string } }) => state.auth.lastName || ""
  );
  const age = useSelector(
    (state: { auth: { age: number } }) => state.auth.age ?? 0
  );
  const handleEmailPasswordLogin = (e: any) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName || !age) {
      dispatch(setError("Please Fill out all field."));
    }
    dispatch(userSignup(email, password, firstName, lastName, age));
  };
  return (
    <>
      <form className="text-center" onSubmit={handleEmailPasswordLogin}>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            dispatch(setEmail(e.target.value));
          }}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
          placeholder="Password"
        />
        <div className="flex flex-row ml-[70px] md:ml-[100px] mb-2 p-1 text-center w-[90%] max-w-[320px] md:w-[90%] justify-center items-center">
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              dispatch(setFirstName(e.target.value));
            }}
            placeholder="First Name"
            className="border-black my-2 mr-2 text-black border-2 w-[90%] max-w-[320px] md:w-full p-2 md:p-3 rounded-lg"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              dispatch(setLastName(e.target.value));
            }}
            placeholder="Last Name"
            className="border-black my-2 ml-2 text-black border-2 w-[90%] max-w-[320px] md:w-full p-2 md:p-3 rounded-lg"
          />
        </div>

        <input
          type="number"
          value={age}
          onChange={(e: any) => {
            dispatch(setAge(e.target.value));
          }}
          placeholder="Age"
          className="border-black my-2 ml-2 text-black border-2 w-[90%] max-w-[320px] md:w-[90%] p-2 md:p-3 rounded-lg"
        />
        <Buttons>{loading ? "Sign up...." : "Sign Up"}</Buttons>
        <TermCondition />
      </form>
    </>
  );
};

export default SignupForm;
