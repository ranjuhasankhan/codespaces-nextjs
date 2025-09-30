import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import WeatherWidget from '../components/WeatherWidget'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Asia Travel</h1>
      <p>Discover the best destinations, book your next adventure, and check the latest weather in top Asian cities!</p>
      <a href="/login" className={styles.loginBtn}>Login</a>
      <WeatherWidget />
      <hr className={styles.hr} />
      {/* ...existing homepage content can be added here as needed ... */}
    </main>
  )
}

export default Home
