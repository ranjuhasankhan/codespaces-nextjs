import styles from '../styles/booking.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    travelers: 1,
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1>Book Your Trip</h1>
        {submitted ? (
          <div className={styles.success}>Thank you for your booking request! We will contact you soon.</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>Destination
              <input name="destination" value={form.destination} onChange={handleChange} required />
            </label>
            <label>Date
              <input name="date" type="date" value={form.date} onChange={handleChange} required />
            </label>
            <label>Number of Travelers
              <input name="travelers" type="number" min="1" value={form.travelers} onChange={handleChange} required />
            </label>
            <label>Notes
              <textarea name="notes" value={form.notes} onChange={handleChange} />
            </label>
            <button type="submit">Book Now</button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
