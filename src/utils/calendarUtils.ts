import holidays from "../assets/holidays.json";

export type CalendarCell = {
  day: string;
  holiday?: string;
};

export function generateCalendar(
  year: string,
  month: string,
  months: string[]
): CalendarCell[][] {
  const monthIndex = months.findIndex((m) => m === month);
  const firstDayOfMonth = new Date(parseInt(year), monthIndex, 1).getDay();
  const dayOffset = firstDayOfMonth === 0 ? -6 : 1 - firstDayOfMonth;
  const daysInMonth = new Date(parseInt(year), monthIndex + 1, 0).getDate();
  let dayCounter = dayOffset;
  const newCalendar: CalendarCell[][] = [];

  for (let i = 0; i < 6; i++) {
    const row: CalendarCell[] = [];
    for (let j = 0; j < 7; j++) {
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        const formattedDay = `${dayCounter}`;
        const holidayKey = `${monthIndex + 1}-${formattedDay}`;
        const holidayName = holidays[holidayKey as keyof typeof holidays];
        row.push({ day: formattedDay, holiday: holidayName });
      } else {
        row.push({ day: "" });
      }
      dayCounter++;
    }
    newCalendar.push(row);
  }

  // For debugging
  console.log(newCalendar);
  return newCalendar;
}
