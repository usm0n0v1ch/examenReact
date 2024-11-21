import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css';
import PlusBtn from '../../UI/PlusBtn';
import MinusBtn from '../../UI/MinusBtn';
import { incrementItem, decrementItem, clearBasket } from '../../redux/basketSlice';

export default function BasketModal({ onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);

  const formatter = new Intl.NumberFormat('uz-UZ', {
    style: 'currency',
    currency: 'UZS',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
    useGrouping: false, 
  });

  const totalBasketPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
 
    dispatch(clearBasket());
  
    alert('Заказ подтвержден');
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleAndCloseBtn}>
          <div className={styles.title}>Корзина</div>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.content}>
          {items.length > 0 ? (
            <>
              {items.map((item) => {
                const totalPrice = item.price * item.quantity;
                const formattedPrice = formatter.format(totalPrice);
                return (
                  <div key={item.id} className={styles.item}>
                    <div>{item.name}</div>
                    <div>{formattedPrice}</div>
                    <div className={styles.quantity}>
                      <MinusBtn
                        onClick={() => dispatch(decrementItem({ id: item.id }))}
                      />
                      {item.quantity}
                      <PlusBtn
                        onClick={() => dispatch(incrementItem({ id: item.id }))} 
                      />
                    </div>
                  </div>
                );
              })}
              <div className={styles.totalPrice}>
                <div>
                  Итого: {formatter.format(totalBasketPrice)}
                </div>
                <div>
                  <button className={styles.confirmOrderBtn} onClick={handleConfirmOrder}>
                    Подтвердить заказ
                  </button>
                </div>
                
              </div>
              
            </>
          ) : (
            <div className={styles.empty}>Корзина пуста</div>
          )}
        </div>
      </div>
    </div>
  );
}
