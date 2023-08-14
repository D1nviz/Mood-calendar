"use client";

import { FC } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const AvatarVariants = cva(
  "flex items-center justify-evenly w-44 py-2 rounded-xl duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-inherit hover:bg-dark-tertiary",
        active: "bg-dark-tertiary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Avatar: FC = () => {
  const session = useSession();
  const pathname = usePathname();
  const variant = pathname === "/profile" ? "active" : "default";
  return (
    <Link href={"/profile"}>
      <div className={cn(AvatarVariants({ variant }))}>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {session?.data?.user?.image && (
            <img src={session?.data?.user?.image} alt="Profile avatar" />
          )}
        </div>
        <p>{session?.data?.user?.name} </p>
      </div>
    </Link>
  );
};
export default Avatar;
