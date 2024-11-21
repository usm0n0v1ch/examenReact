import styles from './style.module.css';

export default function Basket({ onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <i className={`fas fa-shopping-cart ${styles.icon}`}></i>
      <div>Корзина</div>
    </div>
  );
}
