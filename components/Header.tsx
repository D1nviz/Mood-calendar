import { FC } from "react";
import Avatar from "./ui/Avatar";
import Wrapper from "./layouts/Wrapper";

const Header: FC = () => {
  return (
    <header className="border-b border-dark-secondary">
      <Wrapper className="flex justify-between items-center py-3">
        <span className=" font-bold text-2xl">mood.calendar</span>
        <Avatar />
      </Wrapper>
    </header>
  );
};

export default Header;
