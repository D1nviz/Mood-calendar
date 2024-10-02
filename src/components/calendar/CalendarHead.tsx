"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import ChangeMonthButton from "@/components/ui/ChangeMounthButton";
import { months } from "@/configs/months";
import { DateT, MonthValueT } from "@/types";
import { decreaseDate, increaseDate } from "@/lib/utils";

type CalendarHeadProps = {
  currentMonth: MonthValueT | keyof typeof months;
  setCurrentDate: React.Dispatch<React.SetStateAction<Omit<DateT, "id">>>;
};
const CalendarHead: FC<CalendarHeadProps> = ({
  currentMonth,
  setCurrentDate,
}) => {
  const handlePrevMonth = () => {
    setCurrentDate((prevMonth) => decreaseDate(prevMonth));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevMonth) => increaseDate(prevMonth));
  };
  return (
    <div className="rounded-xl pt-5 flex justify-center ">
      <div className="w-[250px] flex justify-between gap-3">
        <ChangeMonthButton onClick={handlePrevMonth}>{"<"}</ChangeMonthButton>
        <motion.h2
          className="text-center text-5xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentMonth}
        </motion.h2>

        <ChangeMonthButton onClick={handleNextMonth}>{">"}</ChangeMonthButton>
      </div>
    </div>
  );
};

export default CalendarHead;
