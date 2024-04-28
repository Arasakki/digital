import { FC } from "react";
import s from "./index.module.scss";
interface ITooltip {
  style?: React.CSSProperties;
  className?: string;
  count?: number;
  date?: Date;
}

const Tooltip: FC<ITooltip> = ({ style, className, count, date }: ITooltip) => {
  return (
    <div className={`${s.Tooltip} ${className}`} style={style}>
      <p>
        {count && count !== 0 ? `${count} contributions` : "No contributions"}
      </p>
      <p className={s.Tooltip__date}>
        {date
          ? new Intl.DateTimeFormat("ru-RU", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(date)
          : ""}
      </p>
      <div className={s.arrow_box}></div>
    </div>
  );
};

export default Tooltip;
