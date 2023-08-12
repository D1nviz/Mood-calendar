import React, { FC } from "react";
import { createCalendar } from "../lib/utils";
import CalendarSquare from "./CalendarSquare";
import { days } from "@/configs/days";
import CalendarHead from "./CalendarHead";

const Calendar: FC = () => {
  const calendar = createCalendar();

  return (
    <div className="bg-[rgb(41,41,41)] rounded-xl max-w-4xl mx-auto mt-10">
      <CalendarHead />
      <div className=" grid grid-cols-7 gap-3 p-8">
        {days.map((day, i) => (
          <span key={i} className="col-span-1 mx-auto text-lg font-semibold">
            {day}
          </span>
        ))}

        {calendar.map((date) => (
          <CalendarSquare key={date.id} date={date} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
