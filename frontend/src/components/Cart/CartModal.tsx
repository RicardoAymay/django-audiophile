"use client;"
import Image from 'next/image'
import React from 'react'
import { ButtonCheckout } from '../Buttons/Buttons'
type CartModalProps = {
  productQuantity: number,
  cartItems: ItemProps[]
}
type ItemProps = {
  id: number,
  image: string
  name: string
  price: number
  quantity: number
}


const CartModal = ({productQuantity, cartItems}: CartModalProps) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  return (
  <div className='w-screen h-full z-20'>
    <div className='absolute flex flex-col max-w-96 z-30'>

      <div className='w-full'>
        <p>Cart {productQuantity}</p>
        <button>Remove all</button>
      </div>

      <div>
        {cartItems.map((item: ItemProps) => {
          return (
            <div key={item.id} className='flex'>
              <figure>
                <Image width={64} src={item.image} alt={item.name} />
              </figure>
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <div className='w-24 bg-primary-audio-light'>
                <button className='w-1/3'>-</button>
                <p className='w-1/3'>{item.quantity}</p>
                <button className='w-1/3'>+</button>
              </div>
            </div>
          )
        })}
      </div>

      <div>
        <p>Total</p>
        <p className="font-bold my-6">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </p>
      </div>
      <ButtonCheckout />
    </div>
  </div>
  )
}

export default CartModal