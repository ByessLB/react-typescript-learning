import { useEffect, useRef, useState } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {
  // ? déclarer un state permettant de stocker la date et l'heure actuelle

  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const intervalRef = useRef<number | null>(null);

  /**
   * ? fonction permettant de démarrer l'horloge
   */
  function handleStartClick() {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  /**
   * ? fonction permettant de stopper l'horloge
   */
  function handleStopClick() {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
  }

  return (
    <div className={styles.clockContainer}>
      {
        <>
          <h2>Il est {time}</h2>
          <button onClick={handleStartClick}>Démarre le temps</button>
          <button onClick={handleStopClick}>Arrête le temps</button>
        </>
      }
    </div>
  );
};

export default ClockPage;
