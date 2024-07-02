'use client';

interface ButtonAddtoCartProps {
  addToCart: () => void;
}

export const ButtonAddtoCart = ({ addToCart }: ButtonAddtoCartProps) => {
  return (
    <button onClick={addToCart} className="border flex items-center border-primary-brown-mid font-semibold bg-primary-brown-mid text-white h-12 tracking-wider px-5 hover:bg-primary-beige hover:border-primary-beige transition w-40">
      ADD TO CART
    </button>
  ) 
};





