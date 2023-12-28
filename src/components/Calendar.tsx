import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import ComboBox from "./ComboBox";
import { CalendarCell, generateCalendar } from "../utils/calendarUtils";

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
  const [calendar, setCalendar] = useState<CalendarCell[][]>([]);

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) =>
    setYear(e.target.value);

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted year and month:", year, month);
    if (!year.trim()) {
      setError(true);
    } else {
      setError(false);
      const monthName = months[parseInt(month) - 1];
      const newCalendar = generateCalendar(year, monthName, months);
      setCalendar(newCalendar);
    }
  };

  return (
    <div className="flex flex-col p-10 border-4 rounded-3xl border-[#7E6EF8]">
      <div className="flex pb-5 border-b-4 border-[#800799] w-full">
        <form onSubmit={handleSubmit} className="flex flex-row gap-5">
          <ComboBox
            value={month}
            label="Mesec"
            onChange={handleMonthChange}
            months={months}
          />
          <Input
            label="Leto"
            type="number"
            value={year}
            name="year"
            error={error}
            onChange={handleYearChange}
            placeholder="Vpiši leto"
          />
          <button
            type="submit"
            className="text-[#DFDCFD] font-bold px-4 py-3 bg-[#7E6EF8] rounded-full"
          >
            Generiraj koledar
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center pt-5">
        {calendar.length > 0 && (
          <table className="w-full text-[#DFDCFD]">
            <thead>
              <tr>
                <th>Ned</th>
                <th>Pon</th>
                <th>Tor</th>
                <th>Sre</th>
                <th>Čet</th>
                <th>Pet</th>
                <th>Sob</th>
              </tr>
            </thead>
            <tbody className="text-[50px] text-center">
              {calendar.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, columnIndex) => (
                    <td
                      key={columnIndex}
                      className={columnIndex === 0 ? "text-[#800799]" : ""}
                    >
                      {cell.day}
                      {cell.holiday && (
                        <div className="text-[11px] text-[#F41BDD]">
                          {cell.holiday}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Calendar;
