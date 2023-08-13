import { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-rose-500 w-28 py-2 px-5 my-5 text-base text-white rounded-2xl transition-all duration-300 hover:bg-rose-600 hover:-translate-y-[2.5px]"
    >
      {children}
    </button>
  );
};

export default Button;
