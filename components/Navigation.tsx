"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { links } from "@/configs/links";

const Navigation: FC = () => {
  const currentPath = usePathname();
  return (
    <nav>
      <ul className="flex flex-col text-sm ">
        {links.map(({ label, path, Icon }, i) => (
          <Link key={i} href={path}>
            <li
              className={currentPath === path ? "nav-item active" : "nav-item"}
            >
              <Icon size={20} />
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
