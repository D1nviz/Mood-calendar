import { FC } from "react";
import moment from "moment";

const CalendarHead: FC = () => {
  const monthName = moment().format("MMMM");
  return (
    <div className="text-center text-5xl rounded-xl pt-5">{monthName}</div>
  );
};

export default CalendarHead;
