"use client";

import { FC } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Button from "../ui/Button";

const RegistrationForm: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <form className="flex flex-col items-center w-96 py-12 bg-white px-10  rounded-lg shadow-lg border">
      <h1 className=" text-4xl text-center">Sign In</h1>
      <div className="flex flex-col w-64 mt-6">
        <label htmlFor="e-mail" className="text-lg">
          E-mail
        </label>
        <input
          className="reg-input"
          type="mail"
          name="e-mail"
          placeholder="Enter E-mail"
        />

        <label htmlFor="password" className="text-lg">
          Password
        </label>
        <input
          className="reg-input"
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </div>
      <Button> Sign in</Button>
      <div className="flex items-center">
        <hr className="horizontal-line" />
        <span>Or sign with</span>
        <hr className="horizontal-line" />
      </div>
      <div className="flex w-28 justify-around mt-2 items-center">
        <FcGoogle
          onClick={() => signIn("google", { callbackUrl })}
          className="cursor-pointer rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]"
          title="Google"
          size={38}
        />
        <FaFacebook
          className="cursor-pointer rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]"
          size={35}
          color="#1877f2"
          title="Facebook"
        />
      </div>
    </form>
  );
};

export default RegistrationForm;
