import React, { FC } from "react";
import { IconType } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";

interface MoodModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  emoji: { Icon: IconType; description: string; id: string }[];
  setSelectedEmoji: React.Dispatch<React.SetStateAction<string>>;
}

const MoodModal: FC<MoodModalProps> = ({
  emoji,
  setSelectedEmoji,
  setIsModalOpen,
}) => {
  const handleIsModalOpen = () => setIsModalOpen(false);
  const handleSelectedEmoji = (id: string) => setSelectedEmoji(id);

  return (
    <div className="justify-around  py-5 bg-dark-primary rounded-md hidden absolute z-20 -inset-x-1/2 -top-14 group-hover:flex">
      <IoCloseSharp
        className="absolute right-1 top-1 cursor-pointer"
        size={20}
        onClick={handleIsModalOpen}
      />
      {emoji.map(({ Icon, id }) => (
        <Icon
          key={id}
          onClick={() => handleSelectedEmoji(id)}
          size={32}
          cursor={"pointer"}
        />
      ))}
    </div>
  );
};

export default MoodModal;
