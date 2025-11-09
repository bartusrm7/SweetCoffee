import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
	const [cartArrayData, setCartArrayData] = useState([]);

	return <CartContext.Provider value={{ cartArrayData, setCartArrayData }}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
