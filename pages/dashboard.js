import styles from '../styles/dashboard.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Dashboard() {
  const received = [
    { id: 1, from: 'John Doe', amount: '$1,200', date: '2025-09-01' },
    { id: 2, from: 'Jane Lee', amount: '$950', date: '2025-09-10' },
    { id: 3, from: 'Akira Tanaka', amount: '$2,000', date: '2025-09-15' },
  ];
  const payouts = [
    { id: 1, to: 'Hotel Sakura', amount: '$800', date: '2025-09-05' },
    { id: 2, to: 'Bangkok Tours', amount: '$500', date: '2025-09-12' },
    { id: 3, to: 'Bali Resort', amount: '$1,100', date: '2025-09-18' },
  ];
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <p>Welcome to your Asia Travel dashboard. Here you can manage your bookings, view saved destinations, and update your profile.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>My Bookings</h2>
            <p>View and manage your travel bookings.</p>
          </div>
          <div className={styles.card}>
            <h2>Saved Destinations</h2>
            <p>See your favorite Asian destinations.</p>
          </div>
          <div className={styles.card}>
            <h2>Profile</h2>
            <p>Update your personal information and preferences.</p>
          </div>
        </div>
        <div className={styles.financeSection}>
          <div className={styles.financeBlock}>
            <h2>Received</h2>
            <table className={styles.financeTable}>
              <thead>
                <tr><th>From</th><th>Amount</th><th>Date</th></tr>
              </thead>
              <tbody>
                {received.map(item => (
                  <tr key={item.id}>
                    <td>{item.from}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.financeBlock}>
            <h2>Payout</h2>
            <table className={styles.financeTable}>
              <thead>
                <tr><th>To</th><th>Amount</th><th>Date</th></tr>
              </thead>
              <tbody>
                {payouts.map(item => (
                  <tr key={item.id}>
                    <td>{item.to}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
