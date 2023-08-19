"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import moment from "moment";

const CalendarHead: FC = () => {
  const monthName = moment().format("MMMM");
  return (
    <div className="text-center text-5xl rounded-xl pt-5">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
      >
        {monthName}
      </motion.h2>
    </div>
  );
};

export default CalendarHead;
