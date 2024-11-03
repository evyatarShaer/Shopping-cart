import { CartContextProvider } from "./context/CartContext";
import styles from "./App.module.css";
import ProductList from "./components/prodact/ProductList";

function App() {
  return (
    <div className={styles.app}>
      <CartContextProvider>
        <ProductList />
      </CartContextProvider>
    </div>
  );
}

export default App;
