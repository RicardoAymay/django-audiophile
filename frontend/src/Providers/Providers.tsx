'use client;'
import { CartProvider } from "@/contexts/cartContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
    }