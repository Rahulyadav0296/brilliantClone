import { ChangeEvent, FC } from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="border-black my-2 ml-2 text-black border-2 w-full p-2 rounded-lg"
    />
  );
};

export default Input;
