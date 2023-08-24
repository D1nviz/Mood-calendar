"use client";

import { FC, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Button from "../ui/Button";
import Input from "../ui/Input";

type AuthorizeFormProps = {
  title?: string;
  onSubmit?: () => void;
  footer?: React.ReactElement;
};

const AuthorizeForm: FC = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-black">
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <button></button>
    </form>
  );
};

export default AuthorizeForm;
