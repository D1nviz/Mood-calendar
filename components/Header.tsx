import { FC } from "react";
import Avatar from "./ui/Avatar";
import Logo from "./ui/Logo";
import Wrapper from "./layouts/Wrapper";

const Header: FC = () => {
  return (
    <header className="border-b border-gray-300">
      <Wrapper className="flex justify-between items-center py-4">
        <Logo />
        <span className="text-xl">Take care of your mood!</span>
        <Avatar />
      </Wrapper>
    </header>
  );
};

export default Header;
