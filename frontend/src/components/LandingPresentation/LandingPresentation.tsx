import React from 'react'
import best from "../../../assets/shared/desktop/image-best-gear.jpg"
import Image from 'next/image'
const LandingPresentation = () => {

  return (
    <section className='w-full'>
        <h2 className='sr-only'>Landing presentation</h2>
        <div className='w-full bg-inherit rounded-lg overflow-clip relative mt-28 flex'>
            <div className='w-1/2 flex flex-col  justify-center gap-8'>
                <p className='text text-5xl font-bold uppercase'>Bringing you the <span className='text-primary-brown-mid'>best</span> audio gear</p>
                <article className='text-slate-500 leading-relaxed text-base'>
                Located at the heart of New York City, Audiophile is the premier <br></br> store for high end headphones, 
                earphones, speakers, and audio <br></br> accessories. We have a large showroom and luxury <br></br> demonstration 
                rooms available for you to browse and <br></br> experience a wide range of  our products. Stop by our store 
                to <br></br> meet some of  the fantastic people who make Audiophile the <br></br>best place to buy your portable audio 
                equipment.
                </article>
            </div>
            <div className='w-1/2 flex justify-end'>
                <figure className='rounded-lg overflow-hidden w-fit'>
                    <Image src={best} alt='Audiophile'/>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default LandingPresentation
