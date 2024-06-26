import { PagesHeader } from "@/components/Headers/Header";
import React from "react";
import Image from "next/image";
import { Button1 } from "@/components/Buttons/Buttons";
import CartQuantityBox from "@/components/CartQuantityBox/CartQuantityBox";
import ProductSection from "@/components/ProductSection/ProductSection";
import Presentation from "@/components/Presentation/Presentation";
import { earphonesData, productsFeatures, yx1RelatedProducts } from "../earphonesData";


const page = () => {
  return (
    <>
      <PagesHeader />
      <main className="min-h-screen w-[1110px] mx-auto">
        <section className="flex w-full items-center max-auto mt-24">
          <div className="flex items-center justify-center w-1/2">
            <figure>
              <Image src={earphonesData.image} alt="Headphones" />
            </figure>
          </div>
          <div className="flex flex-col items-center justify-between w-1/2">
            <div className="h-auto flex flex-col gap-y-5 w-5/6">
              <p className="text-primary-brown-mid opacity-70 tracking-[.45em]">
                NEW PRODUCT
              </p>
              <h2 className="text-5xl font-bold uppercase">
                {earphonesData.title}
              </h2>
              <p className="opacity-55 w-full">
                {earphonesData.description}
              </p>
              <p className="font-bold my-6">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(earphonesData.price)}
              </p>
              <div className="flex gap-5">
                <CartQuantityBox />
                <Button1 cart />
              </div>
            </div>
          </div>
        </section>
                
        <section className=" mt-20 grid grid-cols-[60%_40%]">
          <div className="w-full">
            <h3 className="text-3xl font-bold pb-10">FEATURES</h3>
            <article className="font-medium opacity-50">
              <p>{productsFeatures.yx1.features1}</p>
              <p className="mt-10">{productsFeatures.yx1.features2}</p>
            </article>
          </div>

          <div className="translate-x-40">
            <h3 className="text-3xl font-bold uppercase pb-10">
              In the box
            </h3>
            <ul className="flex flex-col gap-4 items-center mx-auto w-full">
              {earphonesData.content.map((item, index) => (
                <li key={index} className="grid grid-cols-[20%_80%] w-full">
                  <p className="opacity-70 text-primary-brown-mid">
                    {Object.keys(item)[0]}
                  </p>
                  <p className="opacity-70">{Object.values(item)[0]}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex gap-5 justify-center mt-36">
            <div className="flex flex-col justify-between">
                <figure className="rounded-lg overflow-hidden">
                    <Image src={earphonesData.picGrid.pic1} alt="Phone guy" />
                </figure>
                <figure className="rounded-lg overflow-hidden">
                    <Image src={earphonesData.picGrid.pic2} alt="Phone table" />
                </figure>
            </div>
            <div>
                <figure className="rounded-lg overflow-hidden">
                    <Image src={earphonesData.picGrid.pic3} alt="Phone picture" />
                </figure>
            </div>
        </section>
        <p className="text-2xl font-bold my-10 w-full text-center mt-36"> YOU MAY ALSO LIKE </p>
        <section className="flex items-center justify-center mb-20">
        {yx1RelatedProducts.map((product) => (
            <div key={product.title} className="flex flex-col justify-center items-center">
                <div className="flex flex-col w-3/4 items-center gap-7">
                    <figure className="rounded-lg overflow-hidden">
                        <Image src={product.image} alt={product.title} />
                    </figure>
                    <p className="text-2xl tracking-widest font-bold"> {product.title} </p>
                    <Button1 />
                </div>
            </div>
        ))}
        </section>
            
        <ProductSection />
        <Presentation />

      </main>
    </>
  );
};

export default page;
