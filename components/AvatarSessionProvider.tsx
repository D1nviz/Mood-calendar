"use client";

import { SessionProvider } from "next-auth/react";

export const AvatarSessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
