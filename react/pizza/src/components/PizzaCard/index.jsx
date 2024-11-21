import { useSelector, useDispatch } from 'react-redux';  
import { addToBasket } from '../../redux/basketSlice';  
import InBasket from "../../UI/InBasket";
import styles from './style.module.css';

export default function PizzaCard({ id, photo, name, description, price, quantity }) {
  const dispatch = useDispatch();  

  const username = useSelector((state) => state.user.username);

  const handleAddToBasket = () => {
    if (!username) {
      alert('Необходимо авторизоваться, чтобы добавить товар в корзину.');
      return;
    }

    const pizza = {
      id,
      photo,
      name,
      description,
      price,
      quantity,
    };

    dispatch(addToBasket(pizza));
  };

  return (
    <div key={id} className={styles.container}>
      <img className={styles.image} src={photo} alt={name} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.btns}>
        <InBasket onClick={handleAddToBasket} />
        <div className={styles.price}>{price} сум</div>
      </div>
    </div>
  );
}
