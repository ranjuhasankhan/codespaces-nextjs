import styles from '../styles/login.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (replace with real auth logic)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    alert('Login successful! (Demo only)');
  };

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Email
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label>Password
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
