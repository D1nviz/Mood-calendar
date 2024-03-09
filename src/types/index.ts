import { months } from "@/configs/months";
import { IconType } from "react-icons";

export type LinkT = {
  label: string;
  path: string;
  Icon: IconType;
};

export type DateT = {
  id: string;
  year: string;
  month: string;
  date: string;
  day: string;
};



export type MonthKeyT = keyof typeof months;
export type MonthValueT= (typeof months)[keyof typeof months];
