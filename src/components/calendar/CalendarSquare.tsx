"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import moment from "moment";
import { DateT } from "@/types";
import { cn } from "../../lib/utils";
import { emoji } from "@/configs/emoji";
import MoodButton from "../ui/MoodButton";
import MoodModal from "../ui/MoodModal";

interface CalendarSquareProps {
  date: DateT;
}

enum Variants {
  Default = "default",
  Ghost = "ghost",
  Active = "active",
}

const calendarSquareVariants = cva(
  "relative grid grid-cols-3 grid-rows-3 items-center rounded h-[70px] text-right py-1 px-2 duration-200 group",
  {
    variants: {
      variant: {
        [Variants.Default]:
          "bg-dark-secondary border border-transparent hover:border-dark-tertiary",
        [Variants.Ghost]: "bg-dark-primary text-dark-tertiary",
        [Variants.Active]: "bg-dark-tertiary border border-text-color-primary",
      },
    },
    defaultVariants: {
      variant: Variants.Default,
    },
  }
);

const CalendarSquare: FC<CalendarSquareProps> = ({ date }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("unselected");

  const emojiKey = `emoji_${date.date}${date.month},${date.year}`;

  useEffect(() => {
    const storedEmoji = localStorage.getItem(emojiKey);
    if (storedEmoji) {
      setSelectedEmoji(storedEmoji);
    }
  }, []);

  const handleEmojiSelection = (newEmoji: string) => {
    if (newEmoji === selectedEmoji) {
      setSelectedEmoji("unselected");
      localStorage.removeItem(emojiKey);
    } else {
      setSelectedEmoji(newEmoji);
      localStorage.setItem(emojiKey, newEmoji);
    }
  };

  const currentDate = new Date();
  const isCurrentDate =
    date.year === currentDate.getFullYear().toString() &&
    date.month === currentDate.getMonth().toString();
  const CurrentEmoji = emoji.find((e) => e.id === selectedEmoji)?.Icon;

  const variant = isCurrentDate
    ? moment().format("DD") === date.date
      ? Variants.Active
      : Variants.Default
    : Variants.Ghost;

  const moreThenCurrentDay = moment().format("DD") >= date.date;

  const handleMoodButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={cn(calendarSquareVariants({ variant }))}>
      <div className="col-span-3 grid-rows-1">{date.date}</div>
      <div className="col-span-3 flex justify-center items-center">
        {selectedEmoji === "unselected" ? (
          isCurrentDate && moreThenCurrentDay ? (
            <MoodButton onClick={handleMoodButtonClick} />
          ) : null
        ) : (
          <motion.div
            initial={{ scale: 0.3 }}
            animate={{ scale: [0.3, 1.2, 1] }}
            transition={{ duration: 0.5, times: [0, 0.3, 1] }}
          >
            <CurrentEmoji
              size={36}
              onClick={handleMoodButtonClick}
              cursor={"pointer"}
              className="hover:scale-110 duration-200"
            />
          </motion.div>
        )}
      </div>

      <MoodModal
        emoji={emoji}
        setSelectedEmoji={handleEmojiSelection}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default CalendarSquare;
