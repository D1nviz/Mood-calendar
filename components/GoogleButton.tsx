"use client";
import { FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";


const GoogleButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return <button onClick={() => signIn("google", {callbackUrl})}>Sing in with Google</button>;
};

export default GoogleButton;
