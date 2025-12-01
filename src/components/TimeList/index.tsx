'use client';

import Arrow from '@/components/Arrow';
import TimeButton from '@/components/TimeButton';
import styles from '@/components/styles.module.scss';
import { RefObject } from 'react';

interface Props {
  times: Date[];
  isSelected: (t: Date) => boolean;
  isDisabled: (t: Date) => boolean;
  onSelect: (t: Date) => void;
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function TimeList({ times, isSelected, isDisabled, onSelect, containerRef }: Props) {
  return (
    <div className={`${styles.row} ${styles.time_row}`}>
      <Arrow
        direction="left"
        onClick={() => containerRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}
      />

      <div ref={containerRef} className={styles.list}>
        {times.map((t) => (
          <TimeButton
            key={t.toISOString()}
            time={t}
            active={isSelected(t)}
            disabled={isDisabled(t)}
            onClick={() => onSelect(t)}
          />
        ))}
      </div>

      <Arrow
        direction="right"
        onClick={() => containerRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
      />
    </div>
  );
}
