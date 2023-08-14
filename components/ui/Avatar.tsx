import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

const Avatar: FC = async () => {
  const session = await getServerSession(authConfig);
  return (
    <div className="flex items-center justify-evenly w-44 py-3 rounded-xl duration-200  hover:bg-dark-tertiary ">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        {session?.user?.image && (
          <img src={session?.user?.image} alt="Profile avatar" />
        )}
      </div>
      <p>{session?.user?.name} </p>
    </div>
  );
};
export default Avatar;
