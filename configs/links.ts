import { HiOutlineHome } from "react-icons/hi";
import {BiMailSend} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";

import { ILink } from "@/types";

export const links: ILink[] = [
  { label: "Home", path: "/", Icon: HiOutlineHome},
  { label: "Contacts", path: "/contacts", Icon: BiMailSend },
  { label: "Settings", path: "/settings", Icon: FiSettings},
];
