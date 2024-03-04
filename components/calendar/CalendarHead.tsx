"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import ChangeMonthButton from "../ui/ChangeMounthButton";

type CalendarHeadProps = {
  currentMonth: string;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
};
const CalendarHead: FC<CalendarHeadProps> = ({
  currentMonth,
  setCurrentMonth,
}) => {
  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth((nextMonth) => nextMonth + 1);
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
