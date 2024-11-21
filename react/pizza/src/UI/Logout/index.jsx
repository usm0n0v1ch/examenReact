import { useDispatch } from 'react-redux';  // Импортируем useDispatch
import styles from './style.module.css';
import { setUser } from '../../redux/userSlice';

export default function Logout() {
    const dispatch = useDispatch();  // Получаем dispatch для отправки действий

    const handleLogout = () => {
        // Очистить localStorage
        localStorage.clear();
        
        // Отправляем действие для очистки пользователя из Redux
        dispatch(setUser({ username: '', password: '' }));
    };

    return (
        <div onClick={handleLogout} className={styles.container}>
            Выйти
        </div>
    );
}
