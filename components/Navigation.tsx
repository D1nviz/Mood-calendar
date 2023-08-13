"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

import { links } from "@/configs/links";
import { ILink } from "@/types";

interface NavigationProps {
  links: ILink[];
}

const Navigation: FC<NavigationProps> = () => {
  const currentPath = usePathname();
  return (
    <nav>
      <ul className="flex flex-col text-sm ">
        {links.map(({ label, path }, i) => (
          <Link key={i} href={path}>
            <li
              className={currentPath === path ? "nav-item active" : "nav-item"}
            >
              <HiOutlineHome  size={20}/>
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
