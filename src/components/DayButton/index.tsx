'use client';

import styles from '@/components/styles.module.scss';
import { format } from 'date-fns';

interface Props {
    date: Date;
    active: boolean;
    onClick: () => void;
    showMonthLabel: string | null;
}

export default function DayButton({ date, active, onClick, showMonthLabel }: Props) {
    return (
        <div className={styles.day_wrapper}>
            {showMonthLabel && (
                <div className={styles.month_label}>{showMonthLabel}</div>
            )}

            <button
                type="button"
                onClick={onClick}
                className={active ? styles.day_active : styles.day}
            >
                <span className={styles.day_week}>{format(date, 'EEE')}</span>
                <span className={styles.day_num}>{format(date, 'd')}</span>
            </button>
        </div>
    );
}
