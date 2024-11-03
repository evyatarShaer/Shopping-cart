import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartIcon = () => {
    const context = useContext(CartContext);
    if (!context) return null;

  return (
    <div>CartIcon</div>
  )
}

export default CartIcon