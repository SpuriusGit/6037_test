import { getTime, isBefore, isSameDay, setHours, setMinutes, startOfDay } from 'date-fns';
import { useMemo, useState } from 'react';

export function useBookingTimes(selectedDate: Date | null) {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const now = new Date();

  const times = useMemo(() => {
    if (!selectedDate) return [];
    const result: Date[] = [];
    const base = startOfDay(selectedDate);

    for (let h = 0; h < 24; h += 1) {
      for (let m = 0; m < 60; m += 15) {
        result.push(setMinutes(setHours(base, h), m));
      }
    }

    return result;
  }, [selectedDate]);

  const isDisabled = (t: Date) =>
    selectedDate && isSameDay(selectedDate, now) ? isBefore(t, now) : false;

  const isSelected = (t: Date) => {
    if (!selectedTime) return false;
    return getTime(selectedTime) === getTime(t);
  };

  const selectTime = (t: Date | null) => {
    if (t === null) {
      setSelectedTime(null);
      return;
    }
    if (!isDisabled(t)) {
      setSelectedTime(t);
    }
  };

  return {
    times,
    selectedTime,
    selectTime,
    isDisabled,
    isSelected,
  };
}
