"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { createCalendar } from "../lib/utils";
import CalendarSquare from "./CalendarSquare";
import { days } from "@/configs/days";
import CalendarHead from "./CalendarHead";

const Calendar: FC = () => {
  const calendar = createCalendar();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-[rgb(41,41,41)] rounded-lg max-w-5xl mx-auto mt-10 border border-dark-secondary"
    >
      <CalendarHead />
      <div className=" grid grid-cols-7 gap-3 p-8">
        {days.map((day, i) => (
          <motion.span
            initial={{ opacity: 0.25, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            key={i}
            className="col-span-1 mx-auto text-lg font-semibold"
          >
            {day}
          </motion.span>
        ))}

        {calendar.map((date, i) => (
          <motion.div
            key={date.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * i, ease: "easeOut" }}
          >
            <CalendarSquare date={date} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Calendar;
