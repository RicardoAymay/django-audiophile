import { PagesHeader } from "@/components/Header/Header";
import zx9 from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7 from "../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import Image from "next/image";
import { Button1 } from "@/components/Buttons/Buttons";
import ProductSection from "@/components/ProductSection/ProductSection";
import Presentation from "@/components/Presentation/Presentation";

const Speakers = () => {

    const zx9Data = {
    title: "ZX9 SPEAKER",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: zx9,
};
const zx7Data = {
    title: "ZX7 SPEAKER",
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 speaker offers a truly full range audio experience. Connect to any device with a 3.5mm port.",
    image: zx7,
};
  const speakers = [zx9Data, zx7Data];

  return (
    <>
      <PagesHeader bigtitle="HEADPHONES" />
      <main className="max-w-[1110px] mx-auto flex flex-col gap-20">
        {speakers.map((speakers, index) => (
          index % 2 === 0 ? (
          <div key={speakers.title} className="flex w-full items-center max-auto mt-24 h-[560px]">

            <div className="flex items-center justify-center w-1/2">
              <figure className="w-11/12">
                <Image src={speakers.image} alt="Headphones" />
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
                  {speakers.title}
                </h2>
                <p className="opacity-55 w-5/6">{speakers.description}</p>
                <Button1 />
              </div>
            </div>


          </div>
          ) : (
            <div key={speakers.title} className="flex w-full items-center max-auto mt-14 h-[560px] flex-row-reverse">
            <div className="flex items-center justify-center w-1/2">
              <figure className="w-11/12">
                <Image src={speakers.image} alt="Headphones" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-end w-1/2">
              <div className="h-auto flex flex-col gap-y-5 w-3/4">
                <h2 className="text-5xl font-bold uppercase">
                  {speakers.title}
                </h2>
                <p className="opacity-55">{speakers.description}</p>
                <Button1 />
              </div>
            </div>
          </div>
        )
        ))}
        <ProductSection />
        <Presentation />
      </main>
    </>
  );
};

export default Speakers;
