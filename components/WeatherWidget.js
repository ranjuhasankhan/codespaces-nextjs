import { useEffect, useState } from 'react';
import styles from './WeatherWidget.module.css';

const cities = [
  { name: 'Tokyo', country: 'JP' },
  { name: 'Bangkok', country: 'TH' },
  { name: 'Hanoi', country: 'VN' },
  { name: 'Seoul', country: 'KR' },
  { name: 'Beijing', country: 'CN' },
];

export default function WeatherWidget() {
  const [city, setCity] = useState(cities[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      // Demo: Use static data. Replace with real API for production.
      setTimeout(() => {
        setWeather({ temp: 27, desc: 'Partly Cloudy', icon: '🌤️' });
        setLoading(false);
      }, 800);
    }
    fetchWeather();
  }, [city]);

  return (
    <div className={styles.widget}>
      <h3>Weather in
        <select value={city.name} onChange={e => setCity(cities.find(c => c.name === e.target.value))}>
          {cities.map(c => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </h3>
      {loading ? (
        <div>Loading...</div>
      ) : weather ? (
        <div className={styles.info}>
          <span className={styles.icon}>{weather.icon}</span>
          <span className={styles.temp}>{weather.temp}&deg;C</span>
          <span className={styles.desc}>{weather.desc}</span>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
