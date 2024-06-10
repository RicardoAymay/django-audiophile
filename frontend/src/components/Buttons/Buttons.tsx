import Image from "next/image";
import arrow from "../../../assets/shared/desktop/icon-arrow-right.svg";
import Link from "next/link";


interface iButton2Props {
  href: string;
  black?: boolean;
}

interface iButton1Props {
  href: string;
  cart?: boolean;
}

type Button3Props = {
  href: string;
};


export const Button1 = ({cart}: iButton1Props) => {
  return (
  <button className="border border-primary-brown-mid font-semibold bg-primary-brown-mid text-white h-12 tracking-wider px-5 hover:bg-primary-beige hover:border-primary-beige transition w-40">
      {cart ? "ADD TO CART" : "SEE PRODUCT"}
    </button>
  );
}


export const Button2 = ( { black, href }: iButton2Props ) => {
 if(!black){
  return (
    <Link href={href} className="border border-black bg-white hover:bg-black hover:text-white transition px-5 font-bold h-12 tracking-wider">
      SEE PRODUCT
    </Link>
  );
 }
 else{
  return (
    <Link href={href} className="border border-black bg-black text-white hover:bg-white hover:text-black transition p-5 font-bold h-12 tracking-wider flex items-center">
      SEE PRODUCT
    </Link>
  );
 }
};


export const Button3 = ({href}: Button3Props) => {

  return (
    <Link href={href} className="bg-inherit w-20 flex font-bold items-center justify-center overflow-hidden">
      <p className="text-primary-audio-dark opacity-50 hover:text-primary-brown-mid hover:opacity-100 transition">SHOP</p>
      <Image src={arrow} alt="arrow" className="relative right-[-15px]"/>
    </Link>
  );
};

export const ButtonInherit = () => {
  return (
    <button className="border bg-inherit w-[168px] border-black hover:bg-black hover:text-white transition px-5 font-bold h-12 tracking-wider">
      SEE PRODUCT
    </button>
  );
}
