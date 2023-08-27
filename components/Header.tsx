import { FC } from "react";
import Avatar from "./ui/Avatar";
import Wrapper from "./layouts/Wrapper";
import { AvatarSessionProvider } from "./AvatarSessionProvider";

const Header: FC = () => {
  return (
    <header className="bg-dark-secondary rounded-lg mt-4 mx-4 overflow-hidden">
      <Wrapper className="flex justify-between items-center py-4">
        <h1 className=" font-bold text-2xl pl-3">Mood calendar</h1>
        {/* <AvatarSessionProvider>
          <Avatar />
        </AvatarSessionProvider> */}
      </Wrapper>
    </header>
  );
};

export default Header;
