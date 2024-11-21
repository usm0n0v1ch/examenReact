import PizzaCard from "../../components/PizzaCard";
import { useState, useEffect } from "react";
import styles from './style.module.css';

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pizza/")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Поиск пиццы по имени..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      
      <div className={styles.pizzaList}>
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              id={pizza.id}
              photo={pizza.photo}
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
              quantity={pizza.quantity}
            />
          ))
        ) : (
          <div className={styles.notFound}>Нет таких пицц</div>
        )}
      </div>
    </div>
  );
}
