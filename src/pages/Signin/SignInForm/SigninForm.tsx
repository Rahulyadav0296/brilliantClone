import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../utils/authActions";
import { setEmail, setPassword } from "../../../utils/authSlice";
import { AppDispatch } from "../../../utils/store";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import TermCondition from "../TermsCondition/TermCondition";

const SigninForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector(
    (state: { auth: { email: string } }) => state.auth.email
  );
  const password = useSelector(
    (state: { auth: { password: string } }) => state.auth.password
  );
  const loading = useSelector(
    (state: { auth: { loading: string } }) => state.auth.loading
  );
  const navigate = useNavigate();

  const handleEmailPasswordLogin = (e: any) => {
    e.preventDefault();
    dispatch(userLogin(email, password, navigate));
  };
  return (
    <>
      <form className="text-center " onSubmit={handleEmailPasswordLogin}>
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

        <Buttons>{loading ? "Sign in..." : "Sign in"}</Buttons>
        <TermCondition />
      </form>
    </>
  );
};

export default SigninForm;
