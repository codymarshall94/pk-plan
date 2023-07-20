import Image from "next/image";
import { useState } from "react";

const DateDropdown = ({
  dates,
  selectDay,
}: {
  dates: any;
  selectDay: (day: string) => void;
}) => {
  const [selectedDay, setSelectedDay] = useState<any>(dates[0].day);
  const datesArr = dates.map((day: any) => day.date.toDateString());

  const handleSelectDay = (day: string) => {
    dates.filter((date: any) => {
      if (date.date.toDateString() === day) {
        setSelectedDay(date.date.toDateString());
        selectDay(date);
      }
    });
  };

  return (
    <div className="bg-white flex justify-between items-center p-2">
      <select
        name="day"
        id="day"
        className="p-2 border-2 rounded m-2 border-black"
        value={selectedDay}
        onChange={(e) => handleSelectDay(e.target.value)}
      >
        {datesArr.map((date: any) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <Image
        src="/icons/ellipsis.png"
        width={30}
        height={30}
        alt="more options"
      />
    </div>
  );
};

export default DateDropdown;
