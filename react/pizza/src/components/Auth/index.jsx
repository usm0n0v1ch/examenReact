import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import Btn from '../../UI/Btn';
import styles from './style.module.css';

export default function Auth({ onClose }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: login, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        dispatch(setUser({ username: data.user.username, password }));
       
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
       
        if (typeof onClose === 'function') {
          onClose(); // 
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Ошибка авторизации');
      }
    } catch (err) {
      console.error('Ошибка запроса:', err);
      setError('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.authModal}>
        <div className={styles.divForCloseBtn}>
          <button className={styles.closeAuthBtn} onClick={onClose}>x</button>
        </div>
        
        <h2 className={styles.authModalTitle}>Авторизация</h2>
        {error && <p className={styles.authError}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.authInputField}
            type="text"
            name="login"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            className={styles.authInputField}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Btn type="submit" className={styles.btn} text={loading ? 'Загрузка...' : 'Войти'} />
        </form>
      </div>
    </div>
  );
}
