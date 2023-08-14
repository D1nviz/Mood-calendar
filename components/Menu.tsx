import { FC } from "react";
import Navigation from "./Navigation";

const Menu: FC = () => {
  return (
    <div className="flex flex-col justify-between grow-0 shrinnk-0 p-2 m-2 bg-dark-secondary rounded-lg">
      <Navigation />
      <footer className="text-center text-xs">
        &copy; 2023 by Dinviz <br /> All rights reserved
      </footer>
    </div>
  );
};

export default Menu;
