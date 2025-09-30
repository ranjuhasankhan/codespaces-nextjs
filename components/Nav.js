import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Asia Travel</div>
      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/destinations">Destinations</Link></li>
        <li><Link href="/booking">Booking</Link></li>
        <li><Link href="/contact">Contact</Link></li>
  <li><Link href="/dashboard">Dashboard</Link></li>
  <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
