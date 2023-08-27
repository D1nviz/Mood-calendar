import { FC } from "react";
import Navigation from "./Navigation";

const Menu: FC = () => {
  return (
    <div className="flex flex-col justify-between grow-0 shrinnk-0 p-2 m-4 bg-dark-secondary rounded-lg max-h-[40rem]">
      <Navigation />
    </div>
  );
};

export default Menu;
