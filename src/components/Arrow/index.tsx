'use client';

import styles from './styles.module.scss';

type ArrowProps = {
  className?: string;
  direction: 'left' | 'right';
  onClick?: () => void;
};

export default function Arrow({ direction, onClick }: ArrowProps) {
  return (
    <button type="button" onClick={onClick} className={styles.arrow}>
      {direction === 'left' ? (
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  );
}
