import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";

import { DateT } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createCalendar = (month: string) => {
  const startDate = new Date(new Date().getFullYear(), +month, 1);
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1);

  const endDate = new Date(new Date().getFullYear(), +month + 1, 0);
  endDate.setDate(endDate.getDate() - endDate.getDay() + 7);

  const calendar: DateT[] = [];
  let date = new Date(startDate);

  while (date <= endDate) {
    calendar.push({
      id: nanoid(),
      year: date.getFullYear().toString(),
      month: (date.getMonth() + 1).toString().padStart(2, "0"),
      date: date.getDate().toString().padStart(2, "0"),
      day: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][date.getDay()],
    });
    date.setDate(date.getDate() + 1);
  }

  return calendar;
};
export const valDateTString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const getCurrentDate = (): Omit<DateT, "id"> => {
  const date = new Date();
  return {
    year: date.getFullYear().toString(),
    month: date.getMonth().toString(),
    day: date.getDate().toString(),
    date: date.toString(),
  };
};

export const increaseDate = (date: Omit<DateT, "id">): Omit<DateT, "id"> => {
  if (date.month === "11") {
    return {
      ...date,
      month: "0",
      year: (Number(date.year) + 1).toString(),
    };
  }
  return {
    ...date,
    month: (Number(date.month) + 1).toString(),
  };
};

export const decreaseDate = (date: Omit<DateT, "id">): Omit<DateT, "id"> => {
  if (date.month === "0") {
    return {
      ...date,
      month: "11",
      year: (Number(date.year) - 1).toString(),
    };
  }
  return {
    ...date,
    month: (Number(date.month) - 1).toString(),
  };
};
