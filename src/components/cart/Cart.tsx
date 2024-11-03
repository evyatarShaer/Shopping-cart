import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
    const context = useContext(CartContext);
    if (!context) return null;
    
  return (
    <div>Cart</div>
  )
}

export default Cart