'use client'
import { StaticImageData } from "next/image";
import React, { useContext, createContext, use } from "react";

interface contextInterface {
    children: React.ReactNode;
}

export interface CartProducts {
    name: string;
    price: number;
    image: StaticImageData;
    quantity: number;
};

interface CartContextType {
    cart: CartProducts[];
    setCart: React.Dispatch<React.SetStateAction<CartProducts[]>>;
    cartModal: boolean;
    setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
    };

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: contextInterface) => {
    const [cartModal, setCartModal] = React.useState<boolean>(false);
    const [cart, setCart] = React.useState<CartProducts[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart, cartModal, setCartModal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
  };