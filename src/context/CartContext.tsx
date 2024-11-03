import { createContext, ReactNode, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        const existingItem = items.find((i) => i.id === item.id);
        if (existingItem) {
            setItems(items.map((i) => (i.id === item.id? {...i, quantity: i.quantity + 1 } : i)));
        } else {
            setItems([...items, {...item, quantity: 1 }]);
        }
        console.log("Cart updated:", items);
    };

    const removeFromCart = (id: number) => {
        const updatedItems = items.filter((i) => i.id!== id);
        setItems(updatedItems);
        console.log("Cart updated:", updatedItems);
    };
    
    const getTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    
    const getItemCount = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const contextValue: CartContextType = {
        items,
        addToCart,
        removeFromCart,
        getTotal,
        getItemCount,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;