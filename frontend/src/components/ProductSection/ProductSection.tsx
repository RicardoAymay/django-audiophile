import Image, { StaticImageData } from "next/image";
import thumbEar from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import thumbHead from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import thumbSpeaker from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import { Button3 } from "../Buttons/Buttons";

interface ProductProps {
  src: StaticImageData;
  alt: string;
  title: string;
  href: string;
}

const Product = ({ src, alt, title, href }: ProductProps) => {
  return (
    <div className="w-3/12 flex flex-col min-w-80 h-52 bg-primary-audio-light mt-36 rounded-lg">

      <div className="flex h-auto items-center justify-center flex-col relative w-full -translate-y-16 space-y-4">
        <Image src={src} alt={alt} className="w-7/12 max-h-44" />
      </div>

      <div className="flex flex-col -translate-y-16 items-center">
        <h3 className="uppercase tracking-widest font-extrabold text-lg mb-6">
          {title}
        </h3>
        <Button3 href={href}/>
      </div>

    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="w-full flex items-center justify-between">
      <h2 className="sr-only">Product types</h2>
      <Product
        src={thumbHead}
        alt="Go to the headphones section"
        title="Headphones"
        href="/headphones"
      />
        <Product
          src={thumbSpeaker}
          alt="Go to the speakers section"
          title="Speakers"
          href="/speakers"
        />
      <Product
        src={thumbEar}
        alt="Go to the earphones section"
        title="Earphones"
        href="/earphones"
      />
    </section>
  );
};

export default ProductSection;
