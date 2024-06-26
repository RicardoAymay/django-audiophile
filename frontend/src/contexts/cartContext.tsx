'use client'
import React, { useContext, createContext, use } from "react";

interface contextInterface {
    children: React.ReactNode;
}

interface typeProducts {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

interface CartContextType {
    cart: typeProducts[];
    setCart: React.Dispatch<React.SetStateAction<typeProducts[]>>;
    cartModal: boolean;
    setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
    };

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: contextInterface) => {
    const [cartModal, setCartModal] = React.useState<boolean>(false);
    const [cart, setCart] = React.useState<typeProducts[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart, cartModal, setCartModal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);