"use client";

import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { links } from "@/configs/links";
import { BiBook } from "react-icons/bi";
import GuidanceModal from "./ui/GuidanceModal";

const Navigation: FC = () => {
  const currentPath = usePathname();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleModal = () => setIsModalOpened(true);

  return (
    <>
      <nav>
        <ul className="flex flex-col text-sm">
          {links.map(({ label, path, Icon }, i) => (
            <Link key={i} href={path}>
              <li
                className={
                  currentPath === path ? "nav-item active" : "nav-item"
                }
              >
                <Icon size={20} />
                {label}
              </li>
            </Link>
          ))}
          <li className="nav-item cursor-pointer" onClick={handleModal}>
            <BiBook size={22} />
            Guidance
          </li>
        </ul>
      </nav>
      <GuidanceModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>
    </>
  );
};

export default Navigation;
