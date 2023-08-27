"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import moment from "moment";
import { IDate } from "@/types";
import { cn } from "../lib/utils";
import { emoji } from "@/configs/emoji";
import MoodButton from "../ui/MoodButton";
import MoodModal from "../ui/MoodModal";

interface CalendarSquareProps {
  date: IDate;
}

const calendarSquareVariants = cva(
  "relative grid grid-cols-3 grid-rows-3 items-center rounded h-[70px] text-right py-1 px-2 duration-200 group",
  {
    variants: {
      variant: {
        default:
          "bg-dark-secondary border border-transparent hover:border-dark-tertiary",
        ghost: "bg-dark-primary text-dark-tertiary",
        active: "bg-dark-tertiary border border-text-color-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const CalendarSquare: FC<CalendarSquareProps> = ({ date }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("unselected");

  useEffect(() => {
    const storedEmoji = localStorage.getItem(
      `emoji_${date.date}${date.month},${date.year}`
    );
    if (storedEmoji) {
      setSelectedEmoji(storedEmoji);
    }
  }, []);

  const isCurrentMonth = date.month === moment().format("MM");
  const CurrentEmoji = emoji.find((e) => e.id === selectedEmoji)?.Icon;

  const variant = isCurrentMonth
    ? moment().format("DD") === date.date
      ? "active"
      : "default"
    : "ghost";

  const moreThenCurrentDay = moment().format("DD") >= date.date;

  const handleMoodButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={cn(calendarSquareVariants({ variant }))}>
      <div className="col-span-3 grid-rows-1">{date.date}</div>
      <div className="col-span-3 flex justify-center items-center">
        {selectedEmoji === "unselected" ? (
          isCurrentMonth && moreThenCurrentDay ? (
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
        setSelectedEmoji={setSelectedEmoji}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        date={date}
      />
    </div>
  );
};

export default CalendarSquare;
