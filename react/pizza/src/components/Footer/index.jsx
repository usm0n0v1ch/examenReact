import Logo from "../../UI/Logo";
import styles from "./style.module.css";



export default function Footer(){
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div><Logo/></div>
                <div>Ресторанам</div>
                <div>Курьерам</div>
                <div>Пресс-центр</div>
                <div>Контакты</div>
            </div>
            <div className={styles.right}>
                <div><i class="fab fa-facebook-square"></i></div>
                <div><i class="fab fa-twitter-square"></i></div>
                <div><i class="fab fa-instagram"></i></div>

            </div>
        </div>
    )
}