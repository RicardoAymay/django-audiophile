'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import CartQuantityBox from '../CartQuantityBox/CartQuantityBox';
import { ButtonAddtoCart } from '../Buttons/CartButtons';
import { ProductTypeData } from './ProductPage';
import { CartProducts } from '@/contexts/cartContext';

interface UpperSectionProps {
productTypeData: ProductTypeData;
}    

const UpperSection = ({productTypeData}: UpperSectionProps) => {
    let [quantity, setQuantity] = useState(1);
    let increment = () => {
        quantity+=1
        setQuantity(quantity);
    }

    let decrement = () => {
        if(quantity > 1) {
            quantity-=1
            setQuantity(quantity);
        }
    }

    const addToCart = () => { 
        console.log(`Added ${quantity} items to the cart.`);
      };

    return (
        <section className="flex w-full items-center max-auto mt-24">
            <div className="flex items-center justify-center w-1/2">
                <figure>
                    <Image src={productTypeData.image} alt="Headphones" />
                </figure>
            </div>
            <div className="flex flex-col items-center justify-between w-1/2">
                <div className="h-auto flex flex-col gap-y-5 w-5/6">
                    <p className="text-primary-brown-mid opacity-70 tracking-[.45em]">
                        NEW PRODUCT
                    </p>
                    <h2 className="text-5xl font-bold uppercase">
                        {productTypeData.title}
                    </h2>
                    <p className="opacity-55 w-full">
                        {productTypeData.description}
                    </p>
                    <p className="font-bold my-6">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(productTypeData.price)}
                    </p>
                    <div className="flex gap-5">
                        <CartQuantityBox quantity={quantity} increment={increment} decrement={decrement} />
                        <ButtonAddtoCart addToCart={addToCart}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpperSection