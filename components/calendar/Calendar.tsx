import React, { FC } from "react";
import { createCalendar } from "../lib/utils";
import CalendarSquare from "./CalendarSquare";
import { days } from "@/configs/days";

const Calendar: FC = () => {
  const calendar = createCalendar();

  return (
    <div className="bg-[rgb(41,41,41)] rounded-xl grid grid-cols-7 gap-3 max-w-4xl mx-auto p-8">
      {days.map((day) => (
         <div className="col-span-1 mx-auto text-lg font-semibold">{day}</div>
      ))}
      
      {calendar.map((date) => (
        <CalendarSquare key={date.id} date={date} />
      ))}
    </div>
  );
};

export default Calendar;
