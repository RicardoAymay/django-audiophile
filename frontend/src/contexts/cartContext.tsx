import React, { useContext, createContext } from "react";
interface contextInterface {
    children: React.ReactNode;
}

type typeProducts = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};
type CartContextType = {
    cart: any;
    setCart: any;
    };

const CartContext = createContext({});

export const CartProvider = ({ children }: contextInterface) => {
    const [cartModal, setCartModal] = React.useState<boolean>(false);
    const [cart, setCart] = React.useState<typeProducts[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};