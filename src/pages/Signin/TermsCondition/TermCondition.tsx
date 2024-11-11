import { FC } from "react";

const TermCondition: FC = () => {
  return (
    <p className="text-gray-700 mt-2 hidden md:block">
      By clicking above, I agree to Brilliant's{" "}
      <span className="border-b-2 border-gray-600">Terms</span> and
      <span className="border-b-2 border-gray-600"> Privacy Policy</span>
    </p>
  );
};

export default TermCondition;
