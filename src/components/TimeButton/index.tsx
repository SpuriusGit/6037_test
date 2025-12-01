'use client';

import styles from '@/components/styles.module.scss';
import { format } from 'date-fns';

interface Props {
  time: Date;
  disabled: boolean;
  active: boolean;
  onClick: () => void;
}

export default function TimeButton({ time, disabled, active, onClick }: Props) {
  const className = disabled ? styles.time_disabled : active ? styles.time_active : styles.time;

  return (
    <button type="button" disabled={disabled} onClick={onClick} className={className}>
      {format(time, 'h:mm a')}
    </button>
  );
}
