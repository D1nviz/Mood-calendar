import { FC } from "react";
import Avatar from "./ui/Avatar";
import Wrapper from "./layouts/Wrapper";

const Header: FC = () => {
  return (
    <header className="bg-dark-secondary rounded-lg mt-2 mx-2 overflow-hidden">
      <Wrapper className="flex justify-between items-center">
        <span className=" font-bold text-2xl pl-3">Mood calendar</span>
        <Avatar />
      </Wrapper>
    </header>
  );
};

export default Header;
