import { PagesHeader } from "@/components/Header/Header";
import Image from "next/image";
import { Button1 } from "@/components/Buttons/Buttons";
import ProductSection from "@/components/ProductSection/ProductSection";
import Presentation from "@/components/Presentation/Presentation";
import { zx7Data, zx9Data } from "./speakersData";

const Speakers = () => {

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
                <Button1 href={speakers.href} />
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
                <Button1 href={speakers.href}/>
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
