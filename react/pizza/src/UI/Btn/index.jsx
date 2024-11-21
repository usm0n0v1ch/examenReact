import styles from './style.module.css';

export default function Btn({text, onClick, type}) {
  return (
    <button type={type} onClick={onClick} className={styles.container}>
      {text}
    </button>
  )
}