'use client';

import styles from '@/components/styles.module.scss';

interface Props {
  disabled: boolean;
  onConfirm: () => void;
}

export default function ConfirmButton({ disabled, onConfirm }: Props) {
  return (
    <div className={styles.confirm_wrapper}>
      <button
        type="button"
        disabled={disabled}
        onClick={onConfirm}
        className={disabled ? styles.confirm_disabled : styles.confirm}
      >
        Confirm
      </button>
    </div>
  );
}
