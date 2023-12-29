import holidays from "../assets/holidays.json";

export type CalendarCell = {
  day: string;
  holiday?: string;
};

// Function to generate calendar grid for given year and month (as well as the second option where you just choose the date)
export function generateCalendar(
  year: string,
  month: string,
  months: string[]
): CalendarCell[][] {
  // Find the index of the month in the months array
  const monthIndex = months.findIndex((m) => m === month);

  // Get the day of the week for the first day of month
  const firstDayOfMonth = new Date(parseInt(year), monthIndex, 1).getDay();

  // Calculate offset to align the first day of month in calendar grid
  // If the first day is Sunday (0), set offset to -6 to start the calendar from previous monday
  const dayOffset = firstDayOfMonth === 0 ? -6 : 1 - firstDayOfMonth;

  // Get the total number of days in the month
  const daysInMonth = new Date(parseInt(year), monthIndex + 1, 0).getDate();

  // Initialize a counter for the calendar days, starting from the calculated offset
  let dayCounter = dayOffset;

  // Initialize the calendar grid, an array of arrays representing weeks and days
  const newCalendar: CalendarCell[][] = [];

  // Create each week row for the calendar
  for (let i = 0; i < 6; i++) {
    const row: CalendarCell[] = [];

    // Populate each day in the week
    for (let j = 0; j < 7; j++) {
      if (dayCounter > 0 && dayCounter <= daysInMonth) {
        const formattedDay = `${dayCounter}`;

        // Generate the key to check if the day is a holiday
        const holidayKey = `${monthIndex + 1}-${formattedDay}`;

        // Get the holiday name, if the day is a holiday
        const holidayName = holidays[holidayKey as keyof typeof holidays];

        // Add the day to the week row, including any holiday information
        row.push({ day: formattedDay, holiday: holidayName });
      } else {
        // For days outside the current month, add empty cells
        row.push({ day: "" });
      }
      dayCounter++;
    }
    // Add the completed week row to the calendar grid
    newCalendar.push(row);
  }

  // For debugging
  console.log(newCalendar);
  return newCalendar;
}
