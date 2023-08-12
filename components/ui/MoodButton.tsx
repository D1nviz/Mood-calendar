import { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { cn } from "../lib/utils";

interface IMoodButton extends React.HTMLAttributes<HTMLButtonElement> {}

const MoodButton: FC<IMoodButton> = ({ className, ...props}) => {
 
  return (
    <button {...props} className={cn("justify-center items-center rounded-full bg-dark-primary w-9 h-9 hover:scale-110 duration-200 hidden", className)}>
      <FaPlus />
    </button>
  );
};

export default MoodButton;
