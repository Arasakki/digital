import { useEffect, useState } from "react";
import TimeLine from "./components/timeline/index";
import { format, subDays } from "date-fns";
import { IDateContr } from "./types";



function App() {
  const days = 357;
  const today = new Date();
  const dataRange = [];
  const [contributions, setContributions] = useState<IDateContr[]>([]);
  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    dataRange.push(format(date, "yyyy-MM-dd"));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dpg.gg/test/calendar.json");
        const data = await response.json();
        const newData = Object.entries(data).map(([date, count]) => ({
          date,
          count: count as number,
        }));

        setContributions(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <TimeLine
        days={days}
        dataRange={dataRange}
        contributions={contributions}
      />
    </div>
  );
}

export default App;
