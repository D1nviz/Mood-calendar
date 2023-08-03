import { FC } from "react";
import Image from "next/image";

import logo from "../../public/logo.svg";

const Logo: FC = () => {
  return (
      <Image className="w-12 h-12" src={logo} alt="Logo" />
  );
};

export default Logo;
