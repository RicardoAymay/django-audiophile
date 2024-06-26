import markII from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import markI from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import x59 from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import phoneGuy from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import phoneTable from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import phonePicture from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import zx9 from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import mIhang from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import mItable from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import mIphone from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import x59Girl from "../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import books from "../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import finger from "../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";



export const markIdata = {
  title: "XX99 MARK I HEADPHONES",
  description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  price: 1750,
  image: markI,
  content: [{"1x": "Headphone Unit"}, {"2x": "Replacement Earcups"}, {"1x": "User Manual"}, {"1x": "3.5mm 5m Audio Cable"}],
  picGrid: {
    pic1: mIhang,
    pic2: mItable,
    pic3: mIphone
  }
}

export const markIIdata = {
    title: "XX99 MARK II HEADPHONES",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    image: markII,
    content : [{"1x": "Headphone Unit"}, {"2x": "Replacement Earcups"}, {"1x": "User Manual"}, {"1x": "3.5mm 5m Audio Cable"}, {"1x": "Travel Bag"}],
    picGrid: {
      pic1: phoneGuy,
      pic2: phoneTable,
      pic3: phonePicture
    }
}

export const x59data = {
    title: "XX59 HEADPHONES",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    image: x59,
    content: [{"1x": "Headphone Unit"}, {"2x": "Replacement Earcups"}, {"1x": "User Manual"}, {"1x": "3.5mm 5m Audio Cable"}],
    picGrid: {
      pic1: x59Girl,
      pic2: books,
      pic3: finger
    }
  }

export const relatedProductsMarkII = [
  {
    title: "XX99 MARK I",
    image: markI,
  },
  {
    title: "XX59",
    image: x59,
  },
  {
    title: "ZX9 SPEAKER",
    image: zx9,
  },
];

export const relatedProductsMarkI = [
  {
    title: "XX99 MARK II",
    image: markII,
  },
  {
    title: "XX59",
    image: x59,
  },
  {
    title: "ZX9 SPEAKER",
    image: zx9,
  },
];

export const relatedProductsX59 = [
  {
    title: "XX99 MARK II",
    image: markII,
  },
  {
    title: "XX99 MARK I",
    image: markI,
  },
  {
    title: "ZX9 SPEAKER",
    image: zx9,
  },
];

export const productsFeatures = {
    markII: {
        features1: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
        features2: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones are the ultimate in sound and comfort."
    },
    markI: {
        features1: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",  
        features2: "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
          },
    x59: {
        features1: "The earcups are ergonomically designed to be ultra-comfortable and breathable. The lightweight construction means you can enjoy your music for hours. XX59 headphones ensure that you stay comfortable during long listening sessions.",
        features2: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 20-hour battery life, the XX59 headphones are the perfect tool for listening."
    }
}

export const headphonesData = {
  markI: markIdata,
  markII: markIIdata,
  x59: x59data
}
