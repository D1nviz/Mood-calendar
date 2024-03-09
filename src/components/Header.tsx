import { FC } from "react";
import Wrapper from "./layouts/Wrapper";
import Navigation from "./Navigation";

const Header: FC = () => {
  return (
    <header className="bg-dark-secondary rounded-lg mt-1 mx-4 overflow-hidden">
      <Wrapper className="flex justify-between items-center py-2 px-3">
        <h1 className=" font-bold text-2xl">Mood calendar</h1>
        <Navigation />
        <span className="font-bold text-lg bg-dark-tertiary p-3 rounded-md">
          Take care of your mood
        </span>
      </Wrapper>
    </header>
  );
};

export default Header;
