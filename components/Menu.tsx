import { FC } from "react";
import Navigation from "./Navigation";
import { links } from "@/configs/links";

const Menu: FC = () => {
  return (
    <div className="flex flex-col justify-between grow-0 shrinnk-0 basis-[5%] text-white py-3 mx-2">
      <Navigation links={links} />
      <footer className="text-center text-xs">
        &copy; 2023 by Dinviz <br /> All rights reserved{" "}
      </footer>
    </div>
  );
};

export default Menu;
