import { PagesHeader } from "@/components/Header/Header";
import markI from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import markII from "../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import x59 from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import Image from "next/image";
import { Button1 } from "@/components/Buttons/Buttons";
import ProductSection from "@/components/ProductSection/ProductSection";
import Presentation from "@/components/Presentation/Presentation";


const Headphones = () => {
  const markIdata = {
    title: "XX99 Mark I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: markI,
    href: "/headphones/xx99-mark-one-headphones",
  };

  const markIIdata = {
    title: "XX99 Mark II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: markII,
    href: "/headphones/xx99-mark-two-headphones",
  };

  const x59data = {
    title: "XX59 HEADPHONES",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: x59,
    href: "/headphones/xx59-headphones",
  };
  const headphones = [markIIdata, markIdata, x59data];

  return (
    <>
      <PagesHeader bigtitle="HEADPHONES" />
      <main className="max-w-[1110px] mx-auto flex flex-col gap-20">
        {headphones.map((headphone, index) => (
          index % 2 === 0 ? (
          <div key={headphone.title} className="flex w-full items-center max-auto mt-24 h-[560px]">

            <div className="flex items-center justify-center w-1/2">
              <figure className="w-11/12">
                <Image src={headphone.image} alt="Headphones" />
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
                  {headphone.title}
                </h2>
                <p className="opacity-55 w-5/6">{headphone.description}</p>
                <Button1 href={headphone.href} />
              </div>
            </div>


          </div>
          ) : (
            <div key={headphone.title} className="flex w-full items-center max-auto mt-14 h-[560px] flex-row-reverse">
            <div className="flex items-center justify-center w-1/2">
              <figure className="w-11/12">
                <Image src={headphone.image} alt="Headphones" />
              </figure>
            </div>
            <div className="flex flex-col items-center justify-end w-1/2">
              <div className="h-auto flex flex-col gap-y-5 w-3/4">
                <h2 className="text-5xl font-bold uppercase">
                  {headphone.title}
                </h2>
                <p className="opacity-55">{headphone.description}</p>
                <Button1 href={headphone.href}/>
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

export default Headphones;
