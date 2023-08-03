import { FC } from "react";
import { IDate } from "@/types";

interface ICalendarSquare{
  date: IDate
}

const CalendarSquare: FC<ICalendarSquare> = ({date}) => {
  return (
    <div className="col-span-1 bg-gray-200 h-16">
      {date.date}
    </div>
  );

};

export default CalendarSquare;