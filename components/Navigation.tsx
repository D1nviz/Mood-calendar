"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/configs/links";
import { ILink } from "@/types";

interface INavigation {
  links: ILink[];
}

const Navigation: FC <INavigation> = () => {
  const currentPath = usePathname();
  return (
    <nav>
      <ul className="flex flex-col text-sm uppercase ">
        {links.map(({ label, path }, i) => (
          <Link as={"a"} key={i} href={path}>
            <li
              className={currentPath === path ? "nav-item active" : "nav-item"}
            >
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
