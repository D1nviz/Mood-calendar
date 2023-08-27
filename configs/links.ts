import { HiOutlineHome } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";

import { ILink } from "@/types";

export const links: ILink[] = [
  { label: "Home", path: "/", Icon: HiOutlineHome },
  { label: "Contacts", path: "/contacts", Icon: BiMailSend },
];
