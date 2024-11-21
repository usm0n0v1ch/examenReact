
import styles from './style.module.css';

export default function InBasket({ onClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <div>В корзину</div>
      <i className={`fas fa-shopping-cart ${styles.icon}`}></i>
    </div>
  );
}
