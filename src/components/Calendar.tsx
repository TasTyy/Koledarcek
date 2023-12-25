import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";

function Calendar() {
  const months = [
    "Januar",
    "Februar",
    "Marec",
    "April",
    "Maj",
    "Junij",
    "Julij",
    "Avgust",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [error, setError] = useState(false);

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value);

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!year.trim()) {
      setError(true);
    } else setError(false);
  };

  return (
    <div className="flex">
      <div className="flex flex-row">
        <form onSubmit={handleSubmit}>
          <select value={month} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={index + 1} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <Input
            label="Leto"
            type="number"
            value={year}
            name="year"
            error={error}
            onChange={handleYearChange}
            placeholder="Vpiši leto"
          ></Input>
        </form>
      </div>
    </div>
  );
}

export default Calendar;
