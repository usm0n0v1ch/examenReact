import styles from './style.module.css';

export default function AuthBtn({ onClick }) {
  return (
    <button onClick={onClick} className={styles.authBtn}>
      <i className={`fa fa-user ${styles.authBtnIcon}`}></i>
      <div>Войти</div>
    </button>
  );
}
