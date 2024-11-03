import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from './productList.module.css';

const ProductList = () => {
  const context = useContext(CartContext);
  if (!context) return null;

  context.items = [
    { id: 1, name: "product1", price: 50, quantity: 6 },
    { id: 2, name: "product2", price: 50, quantity: 6 },
    { id: 3, name: "product3", price: 100, quantity: 4 },
    { id: 4, name: "product4", price: 150, quantity: 3 },
    { id: 5, name: "product5", price: 200, quantity: 2 },
    { id: 6, name: "product6", price: 50, quantity: 6 },
    { id: 7, name: "product7", price: 100, quantity: 4 }
  ];

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {context.items.map((item) => (
          <div className={styles.card} key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}₪</p>
            <button onClick={() => context.addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
