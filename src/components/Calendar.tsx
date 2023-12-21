import { useState } from "react";
import { getDaysInMonth, renderDays } from "../utils/calendarUtils";

function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="mr-2 border rounded p-1"
        >
          {/* Populate the combo box with month options */}
          {/* You can dynamically generate the options based on your needs */}
          <option value={1}>January</option>
          <option value={2}>February</option>
          {/* ... add options for all months ... */}
        </select>
        <input
          type="text"
          value={selectedYear}
          onChange={handleYearChange}
          placeholder="Enter year"
          className="border rounded p-1"
        />
      </div>
      <div>{renderDays(selectedMonth, selectedYear)}</div>
    </div>
  );
}

export default Calendar;
