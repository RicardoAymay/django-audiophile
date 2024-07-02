"use client";

import { useState } from "react";

interface CartQuantityBoxProps {
    quantity: number;
    increment: () => void;
    decrement: () => void;
  }

const CartQuantityBox = ({quantity, increment, decrement}: CartQuantityBoxProps) => {

  return (
    <div>
        <div className="flex items-center w-[120px] h-12 bg-primary-audio-light">
            <button className="w-10 h-8 bg-primary-brown-light opacity-30 hover:opacity-80 text-black font-bold hover:text-primary-brown-mid" onClick={decrement}>-</button>
            <p className="w-10 h-8 text-primary-brown-light text-xl font-bold flex items-center justify-center">{quantity}</p>
            <button className="w-10 h-8 bg-primary-brown-light opacity-30 hover:opacity-80 text-black font-bold hover:text-primary-brown-mid" onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default CartQuantityBox