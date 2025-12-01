import styles from '@/components/styles.module.scss';
import Image from 'next/image';
import avatar from './avatar.png';

export default function Header() {
  return (
    <div className={styles.card_header}>
      <Image src={avatar} alt="Avatar" width={120} height={120} className={styles.avatar} />

      <div className={styles.card_header__text}>
        <h2>Book a Session</h2>
        <p>Choose a date and time that is convenient for you to e-meet your stylist</p>
      </div>
    </div>
  );
}
