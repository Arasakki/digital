import s from "./index.module.scss";
import Cell from "../Cell";
import Week from "../Week";
import Month from "../Month";
import { IDateContr } from "../../types";
import { FC } from "react";
interface ITimeLine {
  days: number;
  dataRange: string[];
  contributions: IDateContr[];
}

const TimeLine: FC<ITimeLine> = ({
  days,
  dataRange,
  contributions,
}: ITimeLine) => {
  const cells = Array.from(new Array(days));
  const weeks = Array.from(new Array(7));
  const months = Array.from(new Array(Math.floor(days / 7)));

  return (
    <div className={s.timeline}>
      <div className={s.timeline__months}>
        {months.map((_, index) => (
          <Month
            key={index}
            monthNumber={index}
            startDate={new Date(dataRange[0])}
          />
        ))}
      </div>
      <div className={s.timeline__body}>
        <div className={s.timeline__body_weeks}>
          {weeks.map((_, index) => (
            <Week key={index} indexWeek={index} />
          ))}
        </div>
        <div className={s.timeline__body_cells}>
          {cells.map((_, index) => (
            <Cell
              contributions={contributions}
              key={index}
              indexCell={index}
              startDate={new Date(dataRange[0])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
