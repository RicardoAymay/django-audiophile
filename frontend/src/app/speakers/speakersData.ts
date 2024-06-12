import zx9 from "../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7 from "../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import markI from "../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import x59 from "../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import bigSound from "../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import table from "../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import twoSounds from "../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import bigSoundZx7 from "../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import studio from "../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import tableSound from "../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

export const zx9Data = {
    title: "ZX9 SPEAKER",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: zx9,
    href: "/speakers/zx9-speaker",
    price: 4500,
    picGrid: {
        pic1: bigSound,
        pic2: table,
        pic3: twoSounds,
    },
    content: [{"2x": "Spreaker Unit"}, {"2x": "Speaker Cloth Panel"}, {"1x": "User Manual"}, {"1x": "3.5mm 5m Audio Cable"}, {"1x": "10m Optical Cable"}],
};

export const zx7Data = {
    title: "ZX7 SPEAKER",
    description: "Stream high quality sound wirelessly with minimal loss. The ZX7 speaker offers a truly full range audio experience. Connect to any device with a 3.5mm port.",
    image: zx7,
    href: "/speakers/zx7-speaker",
    price: 3500,
    picGrid: {
        pic1: bigSoundZx7,
        pic2: studio,
        pic3: tableSound,
    },
    content: [{"2x": "Spreaker Unit"}, {"2x": "Speaker Cloth Panel"}, {"1x": "User Manual"}, {"1x": "3.5mm 5m Audio Cable"}, {"1x": "10m Optical Cable"}],
};

export const productsFeatures = {
    zx9: {
        features1: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)",
        features2: "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."

    },
    zx7: {
        features1: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        features2: "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
    }
}

export const relatedProductsZx9 = [
   { 
        title: "ZX7 SPEAKER",
        image: zx7
    },
    {
        title: "XX99 MARK I",
        image: markI
    },
    {
        title: "XX59",
        image: x59
    }
];