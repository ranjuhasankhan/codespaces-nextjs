import styles from '../styles/destinations.module.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const countries = [
  { name: 'Japan', description: 'Experience cherry blossoms, Mount Fuji, and vibrant cities like Tokyo and Kyoto.' },
  { name: 'Thailand', description: 'Enjoy tropical beaches, ancient temples, and delicious street food.' },
  { name: 'Vietnam', description: 'Cruise Ha Long Bay, explore Hanoi, and savor unique cuisine.' },
  { name: 'South Korea', description: 'Visit Seoul, Jeju Island, and discover K-culture and history.' },
  { name: 'China', description: 'Walk the Great Wall, see the Terracotta Army, and explore bustling cities.' },
  { name: 'Singapore', description: 'Marvel at Gardens by the Bay and enjoy a modern city-state experience.' },
  { name: 'Malaysia', description: 'Discover Kuala Lumpur, Penang, and lush rainforests.' },
  { name: 'Indonesia', description: 'Relax in Bali, visit Jakarta, and explore diverse islands.' },
  { name: 'India', description: 'See the Taj Mahal, vibrant festivals, and rich heritage.' },
  { name: 'Nepal', description: 'Trek the Himalayas and visit ancient temples in Kathmandu.' },
];

export default function Destinations() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1>Asian Travel Destinations</h1>
        <div className={styles.countryList}>
          {countries.map((country) => (
            <div className={styles.countryCard} key={country.name}>
              <h2>{country.name}</h2>
              <p>{country.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
