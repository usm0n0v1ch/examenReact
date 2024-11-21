

import styles from './style.module.css';


export default function MinusBtn({ onClick }) {
    return (
        <div onClick={onClick} className={styles.container}>
            -
        </div>
    );
}