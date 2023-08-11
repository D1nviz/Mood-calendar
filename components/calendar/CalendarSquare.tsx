import { FC } from "react";
import { IDate } from "@/types";

interface ICalendarSquare{
  date: IDate
}

const CalendarSquare: FC<ICalendarSquare> = ({date}) => {
  return (
    <div className="col-span-1 rounded border border-dark-tertiary h-16 text-right py-1 px-2">
      {date.date}
    </div>
  );

};

export default CalendarSquare;