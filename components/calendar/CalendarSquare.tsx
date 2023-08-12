"use client";

import { FC, useState } from "react";
import { cva } from "class-variance-authority";
import moment from "moment";

import { IDate } from "@/types";
import { cn } from "../lib/utils";

import MoodButton from "../ui/MoodButton";
import MoodModal from "../ui/MoodModal";

interface ICalendarSquare {
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

const CalendarSquare: FC<ICalendarSquare> = ({ date }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentMonth = moment().format("MM");
  const currentDate = moment().format("DD");

  const variant = date.month === currentMonth ? "default" : "ghost";

  return (
    <>
      <div className={cn(calendarSquareVariants({ variant: variant }))}>
        <div className="col-span-3 grid-rows-1">{date.date}</div>

        <div className="col-span-3 flex justify-center items-center">
          <MoodButton
            className="hidden group-hover:flex"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          />
        </div>

        {isModalOpen && <MoodModal />}
      </div>
    </>
  );
};

export default CalendarSquare;
