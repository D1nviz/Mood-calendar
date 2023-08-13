"use client";

import { FC, useState } from "react";
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
  "relative grid grid-cols-3 grid-rows-3 items-center rounded border border-dark-secondary h-16 text-right py-1 px-2 duration-200 group",
  {
    variants: {
      variant: {
        default: "bg-dark-secondary hover:border-dark-tertiary",
        ghost: "bg-[#272727] text-[#606060]",
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

  const currentMonth = moment().format("MM");
  const CurrentEmoji = emoji.find(e => e.id === selectedEmoji)?.Icon;
  
  const variant = date.month === currentMonth ? "default" : "ghost";

  const handleMoodButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={cn(calendarSquareVariants({ variant }))}>
      <div className="col-span-3 grid-rows-1">{date.date}</div>
      <div className="col-span-3 flex justify-center items-center">
        {selectedEmoji === "unselected" ? (
          <MoodButton
            className="hidden group-hover:flex"
            onClick={handleMoodButtonClick}
          />
        ) : (
          <CurrentEmoji
            size={36}
            onClick={handleMoodButtonClick}
            cursor={"pointer"}
          />
        )}
      </div>
      {isModalOpen && (
        <MoodModal
          emoji={emoji}
          setSelectedEmoji={setSelectedEmoji}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default CalendarSquare;
