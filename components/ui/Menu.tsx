import { FC } from "react";
import Navigation from "../Navigation";
import { links } from "@/configs/links";

const Menu: FC = () => {
  return (
    <aside className="flex flex-col justify-between grow-0 shrinnk-0 basis-[13%] bg-dark-gray text-white py-3">
      <Navigation links={links} />
      <footer className="text-center text-xs">
        &copy; 2023 by Dinviz <br /> All rights reserved{" "}
      </footer>
    </aside>
  );
};

export default Menu;
