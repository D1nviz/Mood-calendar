import { FC } from "react";
import Image from "next/image";

import logo from "../../public/logo.svg";

const Logo: FC = () => {
  return (
      <Image className="w-10 h-10" src={logo} alt="Logo" />
  );
};

export default Logo;
