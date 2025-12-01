import { addDays, isSameDay, startOfDay } from 'date-fns';
import { useMemo, useState } from 'react';

export function useBookingDates() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const days = useMemo(() => {
    const result: Date[] = [];
    const totalDays = 6 * 7 + 1;
    for (let i = 0; i < totalDays; i += 1) {
      result.push(addDays(today, i));
    }
    return result;
  }, [today]);

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const isSelected = (date: Date) => (selectedDate ? isSameDay(date, selectedDate) : false);

  return {
    days,
    selectedDate,
    selectDate,
    isSelected,
  };
}
