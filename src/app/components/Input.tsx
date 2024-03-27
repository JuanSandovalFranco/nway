import { InputHTMLAttributes } from "react";

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const { type, className } = { ...props };
  return (
    <input
      {...props}
      type={type ? type : "text"}
      className={`rounded-md py-3 px-5 outline-none focus:ring-2 border-none ${
        className ? className : ""
      }`}
    />
  );
};

export default Input;
