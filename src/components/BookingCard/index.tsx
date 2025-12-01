'use client';

import styles from '@/components/styles.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import clock from '../../../public/clock.svg';
import model from '../../../public/model.svg';

import ConfirmButton from '@/components/ConfirmButton';
import DayList from '@/components/DayList';
import Header from '@/components/Header';
import TimeList from '@/components/TimeList';
import { useBookingDates } from '../../hooks/useBookingDates';
import { useBookingTimes } from '../../hooks/useBookingTimes';

export default function BookingCard() {
  const daysRef = useRef<HTMLDivElement>(null);
  const timesRef = useRef<HTMLDivElement>(null);

  const { days, selectedDate, selectDate, isSelected: isDaySelected } = useBookingDates();

  const {
    times,
    selectedTime,
    selectTime,
    isDisabled,
    isSelected: isTimeSelected,
  } = useBookingTimes(selectedDate);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    const ts = Math.floor(selectedTime.getTime() / 1000);
    alert(`Confirmed timestamp: ${ts}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.intro_text}>
          <h1 className={styles.intro_title}>Cool session</h1>
          <p className={styles.intro_subtitle}>Additional type</p>
          <span className={styles.intro_time}>
            <Image src={clock} alt="Clock" />
            30 min
          </span>
        </div>

        <div className={styles.intro_model}>
          <Image src={model} alt="Model" className={styles.model_image} />
        </div>
      </div>

      <div className={styles.card}>
        <Header />

        <DayList
          days={days}
          isSelected={isDaySelected}
          onSelect={(d) => {
            selectDate(d);
            selectTime(null);
          }}
          containerRef={daysRef}
        />

        {selectedDate && (
          <TimeList
            times={times}
            isDisabled={isDisabled}
            isSelected={isTimeSelected}
            onSelect={selectTime}
            containerRef={timesRef}
          />
        )}

        <ConfirmButton disabled={!selectedDate || !selectedTime} onConfirm={handleConfirm} />
      </div>
    </div>
  );
}
