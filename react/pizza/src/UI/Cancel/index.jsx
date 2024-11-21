
import styles from './style.module.css';

export default function Cancel({onClick}) {
    return (
        <div onClick={onClick} className={styles.container}>
            Отмена
        </div>
    );
}