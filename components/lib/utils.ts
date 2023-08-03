import moment from "moment";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { nanoid } from 'nanoid'

import { IDate } from "@/types";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};


export function createCalendar() {
  moment.updateLocale("en", { week: { dow: 1 } });

  const startDate = moment().startOf("month").startOf("week");
  const endDate = moment().endOf("month").endOf("week");

  const calendar:IDate[] = [];
  const date = startDate.clone();

  while (!date.isAfter(endDate)) {
    calendar.push({
      id: nanoid(),
      year: date.format("YYYY"),
      month: date.format("MM"),
      date: date.format("DD"),
      day: date.format("dddd"),
    });
    date.add(1, "day");
  }

  return calendar;

}