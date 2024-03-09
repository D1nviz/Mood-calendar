import { FC } from "react";
import { cn } from "../../lib/utils";

interface ChangeMonthButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ChangeMonthButton: FC<ChangeMonthButtonProps> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={cn(" text-3xl", className)}>
      {children}
    </button>
  );
};

export default ChangeMonthButton;