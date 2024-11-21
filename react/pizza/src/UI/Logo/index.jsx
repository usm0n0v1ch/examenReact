

import styles from './style.module.css';
export default function Logo() {
  return (
    <div className={styles.container}>
      <i className={`fas fa-truck-fast ${styles.icon}`}></i>
      <div className={styles.text}>
        <div className={styles.firstLine}>Delivery</div>
        <div className={styles.secondLine}>Food</div>
      </div>
    </div>
  )
}