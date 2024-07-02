import { PagesHeader } from "@/components/Headers/Header";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button1 } from "@/components/Buttons/Buttons";
import CartQuantityBox from "@/components/CartQuantityBox/CartQuantityBox";

import ProductSection from "@/components/ProductSection/ProductSection";
import Presentation from "@/components/Presentation/Presentation";
import { ButtonAddtoCart } from "@/components/Buttons/CartButtons";
import { title } from "process";
import { CartProducts } from "@/contexts/cartContext";
import UpperSection from "./UpperSection";

export interface ProductTypeData {
  title: string;
  description: string;
  image: StaticImageData;
  price: number;
  content: ContentItem[];
  picGrid: { pic1: StaticImageData; pic2: StaticImageData; pic3: StaticImageData };
}

interface ContentItem {
  [key: string]: string | undefined;
}

interface Features {
  features1: string;
  features2: string;
}

interface ProductsFeatures {
  [key: string]: Features;
}

type ProductPageProps = {
  productTypeData: ProductTypeData;
  productsFeatures: ProductsFeatures;
  relatedProducts: RelatedProducts[];
  productKey: string;
  productData: CartProducts;
}

interface RelatedProducts {
  title: string;
  image: StaticImageData;
}

const ProductPage = ({productTypeData, productsFeatures, relatedProducts, productKey, productData}: ProductPageProps) => {
  return (
    <>
      <PagesHeader />
      <main className="min-h-screen w-[1110px] mx-auto">
        <UpperSection productTypeData={productTypeData}/>        
        <section className=" mt-20 grid grid-cols-[60%_40%]">
          <div className="w-full">
            <h3 className="text-3xl font-bold pb-10">FEATURES</h3>
            <article>
              <p>{productsFeatures[productKey].features1}</p>
              <p className="mt-14">{productsFeatures[productKey].features2}</p>
            </article>
          </div>

          <div className="translate-x-40">
            <h3 className="text-3xl font-bold uppercase pb-10">
              In the box
            </h3>
            <ul className="flex flex-col gap-4 items-center mx-auto w-full">
              {productTypeData.content.map((item, index) => (
                <li key={index} className="grid grid-cols-[20%_80%] w-full">
                  <p className="opacity-70 text-primary-brown-mid">
                    {Object.keys(item)}
                  </p>
                  <p className="opacity-70">{Object.values(item)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex gap-5 justify-center mt-36">
            <div className="flex flex-col justify-between">
                <figure className="rounded-lg overflow-hidden">
                    <Image src={productTypeData.picGrid.pic1} alt="Phone guy" />
                </figure>
                <figure className="rounded-lg overflow-hidden">
                    <Image src={productTypeData.picGrid.pic2} alt="Phone table" />
                </figure>
            </div>
            <div>
                <figure className="rounded-lg overflow-hidden">
                    <Image src={productTypeData.picGrid.pic3} alt="Phone picture" />
                </figure>
            </div>
        </section>
        <p className="text-2xl font-bold my-10 w-full text-center mt-36"> YOU MAY ALSO LIKE </p>
        <section className="flex items-center justify-center mb-20">
        {relatedProducts.map((product) => (
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
  )
}

export default ProductPage

