import Image from "next/image"
import zx9 from "../../../assets/home/desktop/image-speaker-zx9.png"
import zx7 from "../../../assets/home/desktop/image-speaker-zx7.jpg"
import circles from "../../../assets/home/desktop/pattern-circles.svg"
import yx1 from "../../../assets/home/desktop/image-earphones-yx1.jpg"
import { Button1, Button2, ButtonInherit } from "../Buttons/Buttons"
const FeaturedProducts = () => {
    
  return (
    <section className="flex flex-col w-full h-auto min-h-[800px] relative">
        <h2 className="sr-only">Featured products</h2>


        <div className="w-full flex h-[560px] border mt-44 bg-primary-brown-mid rounded-lg overflow-clip relative">
              <Image src={circles} className="absolute z-20 w-[80%] -translate-x-[8.5%]"  alt="Circles"/>
          <div className="w-1/2 flex items-end justify-end relative top-3">
              <Image src={zx9} className="absolute z-30 w-[380px]" alt="ZX9 Speaker your ultimate sound system."/>  
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center space-y-5 relative">
            <div className="w-3/4 flex flex-col items-start justify-center space-y-5 translate-x-14 absolute z-30">
              <h3 className="text-white text-6xl tracking-wide uppercase font-bold w-1/2">ZX9 Speaker</h3>
              <p className="text-white w-full">Upgrade to premium speakers that are <br></br> phenomenally built to deliver truly remarkable <br></br> sound.</p>
              <Button2 href="/speakers/zx9-speaker" black/>
            </div>
          </div>
        </div>
  

        <figure className="relative w-fit bg-[#979797] border flex mt-14 rounded-lg overflow-hidden">
          <div className="absolute w-1/3 h-full flex flex-col ms-24 justify-center gap-10">
            <p className="text-3xl tracking-wider font-bold">ZX7 SPEAKER</p>
            <ButtonInherit href="/speakers/zx7-speaker"/>
          </div>
            <Image src={zx7} alt="ZX7 Speaker" />
        </figure>


        <div className="mt-14 flex justify-between">
          <figure className="rounded-lg overflow-hidden">
            <Image src={yx1} alt="YX1 Earphones" />
          </figure>
            <div className=" flex flex-col flex-1 rounded-lg bg-primary-audio-lightest ms-10 justify-center ps-16 gap-8">
              <p className="text-3xl font-bold">YX1 EARPHONES</p> 
              <ButtonInherit href="earphones/yx1-wireless-earphones"/>
             
            </div>
            
        </div>
    </section>
  )
}

export default FeaturedProducts