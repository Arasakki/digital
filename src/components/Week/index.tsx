import React, { useState } from "react";
import s from "./index.module.scss";
interface IWeek {
  indexWeek: number;
  startDate?: Date;
}

const Week: React.FC<IWeek> = ({ indexWeek, startDate }: IWeek) => {
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const dayOfWeek = weekDays[indexWeek];
  if (dayOfWeek === "Пн" || dayOfWeek === "Ср" || dayOfWeek === "Пт") {
    return <div className={s.Week}>{dayOfWeek}</div>;
  } else {
    return <div className={s.Week}></div>;
  }
};

export default Week;
