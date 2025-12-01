'use client';
import Arrow from '@/components/Arrow';
import DayButton from '@/components/DayButton';
import styles from '@/components/styles.module.scss';
import { format } from 'date-fns';
import { RefObject } from 'react';

interface Props {
  days: Date[];
  isSelected: (d: Date) => boolean;
  onSelect: (d: Date) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function DayList({ days, isSelected, onSelect, containerRef }: Props) {
  return (
    <div className={styles.row}>
      <Arrow
        direction="left"
        onClick={() => containerRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}
      />

      <div ref={containerRef} className={styles.list}>
        {days.map((d, i) => {
          const isFirst = i === 0 || d.getDate() === 1;
          const monthLabel = isFirst ? format(d, 'MMM') : null;

          return (
            <DayButton
              key={d.toISOString()}
              date={d}
              active={isSelected(d)}
              onClick={() => onSelect(d)}
              showMonthLabel={monthLabel}
            />
          );
        })}
      </div>

      <Arrow
        direction="right"
        onClick={() => containerRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
      />
    </div>
  );
}
