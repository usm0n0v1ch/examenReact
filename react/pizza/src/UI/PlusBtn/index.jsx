

import styles from './style.module.css';


export default function PlusBtn({onClick}) { 
    return (
        <div onClick={onClick} className={styles.container}>
            +
        </div>
    );
}