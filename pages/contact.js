import styles from '../styles/contact.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
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
        <h1>Contact Us</h1>
        {submitted ? (
          <div className={styles.success}>Thank you for reaching out! We will get back to you soon.</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>Message
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send</button>
          </form>
        )}
        <div className={styles.info}>
          <h2>Asia Travel</h2>
          <p>Email: info@asiatravel.com</p>
          <p>Phone: +1 234 567 8900</p>
          <p>Address: 123 Asia St, Travel City, World</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
