import Image from "next/image";

const dateOptions = [
  { id: 1, day: "Monday" },
  { id: 2, day: "Tuesday" },
  { id: 3, day: "Wednesday" },
  { id: 4, day: "Thursday" },
  { id: 5, day: "Friday" },
  { id: 6, day: "Saturday" },
  { id: 7, day: "Sunday" },
];

const DateDropdown = () => {
  return (
    <div className="bg-white flex justify-between items-center w-1/4 p-2">
      <select
        name="day"
        id="day"
        className="p-2 border-2 rounded m-2 border-black"
      >
        {dateOptions.map((option) => (
          <option key={option.id} value={option.day}>
            {option.day}
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
