import { FC } from "react";

interface ShowSignupDetailsProps {
  onClick: () => void;
  children: string;
}

const ShowSignupDetails: FC<ShowSignupDetailsProps> = ({
  onClick,
  children,
}) => {
  return (
    <>
      <p className="text-center mt-6 ">
        Existing user?{" "}
        <span
          onClick={onClick}
          className="border-b-2 border-gray-600 pb-1 cursor-pointer"
        >
          {children}
        </span>
      </p>
    </>
  );
};

export default ShowSignupDetails;
