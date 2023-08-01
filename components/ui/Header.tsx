import { FC } from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
import Wrapper from "../layouts/Wrapper";

const Header: FC = () => {
  return (
    <header className="border-b border-gray-400">
      <Wrapper className="flex justify-between items-center py-1">
        <Logo />
        <span className="text-xl">Take care of your mood!</span>
        <Avatar />
      </Wrapper>
    </header>
  );
};

export default Header;
