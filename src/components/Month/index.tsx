import { FC } from "react";
import s from "./index.module.scss";
import { addDays } from "date-fns";
interface IMonth {
  monthNumber: number;
  startDate: Date;
}

const Month: FC<IMonth> = ({ monthNumber, startDate }: IMonth) => {
  const months = [
    "Янв.",
    "Февр.",
    "Март",
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
  ];
  const date = addDays(startDate, monthNumber * 7);
  const weekNumber = Math.ceil(date.getDate() / 7);
  if ((weekNumber - 1) % 4 === 1) {
    return <div className={s.Month}>{months[date.getMonth()]}</div>;
  } else {
    return <div className={s.Month}></div>;
  }
};

export default Month;
