import { FC } from "react";
import moment from "moment";


interface ICalendarHead{

}

const CalendarHead: FC<ICalendarHead> = () => {

  return (
    <div className="mx-auto mt-10 -mb-5 bg-[rgb(41,41,41)]  max-w-4xl text-center text-5xl rounded-xl py-10">
    August
    </div>
  );

};

export default CalendarHead;