import { FC } from "react";
import { createCalendar } from "../lib/utils";
import CalendarSquare from "./CalendarSquare";
import { days } from "@/configs/days";



const Calendar: FC = () => {
  const calendar = createCalendar();

  return (
    <div className="grid grid-cols-7 gap-1 w-3/4 mx-auto mt-16">
    {calendar.map((date ) => (
      <CalendarSquare key={date.id} date={date} />
    ))}
  </div>
  );

};

export default Calendar;