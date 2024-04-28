import { FC, useState } from "react";
import s from "./index.module.scss";
import { addDays } from "date-fns";
import { IDateContr } from "../../types";
import Tooltip from "../Tooltip";
interface ICell {
  indexCell: number;
  startDate: Date;
  contributions: IDateContr[];
}

const Cell: FC<ICell> = ({ indexCell, startDate, contributions }: ICell) => {
  const date = addDays(startDate, indexCell);
  const [tooltipActive, setTooltipActive] = useState<boolean>(false);
  const contribution = contributions.find(
    (contribution) => new Date(contribution.date).getTime() === date.getTime()
  );
  let color: string = "";
  if (contribution && contribution?.count === 0) {
    color = "";
  } else if (
    contribution &&
    contribution?.count > 0 &&
    contribution?.count <= 9
  ) {
    color = "#ACD5F2";
  } else if (
    contribution &&
    contribution?.count > 9 &&
    contribution?.count <= 19
  ) {
    color = "#7FA8C9";
  } else if (
    contribution &&
    contribution?.count > 19 &&
    contribution?.count < 29
  ) {
    color = "#527BA0";
  } else if (contribution && contribution?.count > 30) {
    color = "#254E77";
  }
  return (
    <>
      <div
        className={`${s.Cell}`}
        style={{ backgroundColor: color }}
        onClick={() => {
          console.log(date);
          console.log(contribution, "contribution");
        }}
        onMouseEnter={() => {
          setTooltipActive(true);
        }}
        onMouseLeave={() => {
          setTooltipActive(false);
        }}
      ></div>
      <div className={s.Cell__tooltip}>
        <Tooltip
          count={contribution?.count}
          date={date}
          className={`${s.Cell__tooltip_el}`}
          style={{ display: tooltipActive ? "flex" : "none" }}
        />
      </div>
    </>
  );
};
export default Cell;
