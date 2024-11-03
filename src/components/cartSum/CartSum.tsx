import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartSum = () => {
    const context = useContext(CartContext);
    if (!context) return null;

    const totalPrice = context.items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
        <h2>Cart Summary</h2>
        <p>Total Price: {totalPrice}</p>
    </div>
  )
}

export default CartSum