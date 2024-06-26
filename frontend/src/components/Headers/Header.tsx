import Image from "next/image";
import cartIcon from "../../../assets/shared/desktop/icon-cart.svg";

import { Button1 } from "@/components/Buttons/Buttons";
import mark2headphones from "../../../assets/home/desktop/image-hero.jpg";
import logo from "../../../assets/shared/desktop/logo.svg";
import { Navbar, NavbarPages } from "../Navbar/Navbar";


export const Header = () => {
  return (
    <header className="bg-neutral-900 flex w-screen flex-col min-h-96">
      <div className="w-[1110px] h-full flex flex-col mx-auto mt-0 relative">
        <div className="max-w-[1440px] h-20 flex mx-auto mt-0 items-center justify-between w-full absolute z-10 border-b-[1px] border-b-[#979797]">
          <h1 className="text-white font-black text-2xl text-pretty">
            <Image src={logo} alt="audiophile" />
          </h1>
          <Navbar />
          <Image src={cartIcon} alt="Access your cart" />
        </div>
        
        <div className="w-full h-auto min-h-40 flex items-center">
          <div className="w-5/12 h-auto flex flex-col gap-y-5 absolute z-10">
            <p className="text-white opacity-35 tracking-[.45em] text-lg">
              NEW PRODUCT
            </p>
            <h2 className="text-white text-5xl font-bold uppercase">
              XX99 Mark II Headphones
            </h2>
            <p className="text-white opacity-35 text-lg">
              Experience natural, lifelike audio and exceptional <br></br> build quality
              made for the passionate music <br></br> enthusiast.
            </p>
            <Button1 href="/headphones/xx99-mark-II-headphones"/>
          </div>

          <div className="flex flex-1">
            <Image
              src={mark2headphones}
              alt="XX99 Mark II Headphones"
            />
          </div> 
        </div>
      </div>
    </header>
  )
}


interface iPagesHeaderProps {
  bigtitle?: string
}

export const PagesHeader = ({bigtitle}: iPagesHeaderProps ) => {
  if (!bigtitle) {
    return (
      <header className="bg-neutral-900 flex w-screen flex-col h-24 justify-center">
        <div className="max-w-[1440px] h-20 flex mx-auto mt-0 items-center justify-between w-full">
          <h1>
            <Image src={logo} alt="audiophile" />
          </h1>
          <NavbarPages />
          <button>
            <Image src={cartIcon} alt="Access your cart" />
          </button>
        </div>
      </header>
    )
  }
  else{
  return (
    <header className="bg-neutral-900 flex w-screen flex-col h-96">
      <div className="max-w-[1440px] h-20 flex mx-auto mt-0 items-center justify-between w-full border-b-[1px] border-b-[#979797]">
        <h1>
          <Image src={logo} alt="audiophile" />
        </h1>
        <NavbarPages />
        <Image src={cartIcon} alt="Access your cart" />
      </div>
      
        <div className="w-full max-h-full flex items-center justify-center h-full">
          <h1 className="text-white font-semibold tracking-wider text-5xl">{bigtitle}</h1>
        </div>
    </header>
  )
}
}



