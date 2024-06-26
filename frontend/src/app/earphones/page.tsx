import { PagesHeader } from "@/components/Headers/Header";
import yx1 from "../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import { Button1 } from "@/components/Buttons/Buttons";
import ProductSection from "@/components/ProductSection/ProductSection";
import Image from "next/image";
import Presentation from "@/components/Presentation/Presentation";


const Speakers = () => {

    const zx9Data = {
    title: "YX1 WIRELESS EARPHONES",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Discover ultimate sound that adapts to you.",
    image: yx1,
    href: "/earphones/yx1-wireless-earphones",
};

  const earphones = [zx9Data];

  return (
    <>
      <PagesHeader bigtitle="EARPHONES" />
      <main className="max-w-[1110px] mx-auto flex flex-col gap-20">
        {earphones.map((earphones, index) => (
          index % 2 === 0 ? (
          <div key={earphones.title} className="flex w-full items-center max-auto mt-24 h-[560px]">

            <div className="flex items-center justify-center w-1/2">
              <figure className="w-11/12">
                <Image src={earphones.image} alt="Headphones" />
              </figure>
            </div>


            <div className="flex flex-col items-center justify-between w-1/2">
              <div className="h-auto flex flex-col gap-y-5 w-5/6">
                {index === 0 && (
                <p className="text-primary-brown-mid opacity-70 tracking-[.45em]">
                  NEW PRODUCT
                </p>
                )  
                }
                <h2 className="text-5xl font-bold uppercase">
                  {earphones.title}
                </h2>
                <p className="opacity-55 w-5/6">{earphones.description}</p>
                <Button1 href={earphones.href} />
              </div>
            </div>


          </div>
          ) : (
            <div key={earphones.title} className="flex w-full items-center max-auto mt-14 h-[560px] flex-row-reverse">
            <div className="flex items-center justify-center w-1/2">
              <figure className="w-11/12">
                <Image src={earphones.image} alt="Headphones" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-end w-1/2">
              <div className="h-auto flex flex-col gap-y-5 w-3/4">
                <h2 className="text-5xl font-bold uppercase">
                  {earphones.title}
                </h2>
                <p className="opacity-55">{earphones.description}</p>
                <Button1 href={earphones.href} />
              </div>
            </div>
          </div>
        )
        ))}
        <ProductSection />
        <Presentation  />
      </main>
    </>
  );
};

export default Speakers;
