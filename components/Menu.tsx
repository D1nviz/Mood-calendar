import { FC } from "react";
import Navigation from "./Navigation";
import { links } from "@/configs/links";

const Menu: FC = () => {
  return (
    <div className="flex flex-col justify-between grow-0 shrinnk-0 basis-[8%] text-white p-3 border-r border-dark-tertiary">
      <Navigation links={links} />
      <footer className="text-center text-xs">
        &copy; 2023 by Dinviz <br /> All rights reserved{" "}
      </footer>
    </div>
  );
};

export default Menu;
