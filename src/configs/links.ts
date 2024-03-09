import { HiOutlineHome } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";

import { LinkT } from "@/src/types";

export const links: LinkT[] = [
  { label: "Home", path: "/", Icon: HiOutlineHome },
  { label: "Contacts", path: "/contacts", Icon: BiMailSend },
];
