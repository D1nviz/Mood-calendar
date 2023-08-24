import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";

interface MoodModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  emoji: { Icon: IconType; description: string; id: string }[];
  setSelectedEmoji: React.Dispatch<React.SetStateAction<string>>;
}

const MoodModal: FC<MoodModalProps> = ({
  isModalOpen,
  emoji,
  setSelectedEmoji,
  setIsModalOpen,
}) => {
  const handleIsModalOpen = () => setIsModalOpen(false);
  const handleSelectedEmoji = (id: string) => {
    setSelectedEmoji(id);
    setIsModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0.25, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="justify-evenly shadow-2xl  py-5 bg-dark-primary rounded-md border border-dark-tertiary hidden absolute z-20 -inset-x-1/2 -top-16 group-hover:flex"
        >
          <IoCloseSharp
            className="absolute right-1 top-1 cursor-pointer"
            size={20}
            onClick={handleIsModalOpen}
          />
          {emoji.map(({ Icon, id }, i) => (
            <motion.div
              initial={{ opacity: 0.25,x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i*0.1 }}
              key={id}
            >
              <Icon
                onClick={() => handleSelectedEmoji(id)}
                size={32}
                cursor={"pointer"}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoodModal;
