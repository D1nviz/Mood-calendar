import { FC } from "react";
import { cn } from "../lib/utils";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({className, children }) => {
  return <div className={cn("max-w-[90%] mx-auto", className )}>{children}</div>;
};

export default Wrapper;
