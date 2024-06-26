import ProductPage from "@/components/ProductPage/ProductPage";
import { headphonesData, markIIdata, productsFeatures, relatedProductsMarkII } from "@/app/headphones/headphonesData"

const page = () => {
  return (
    <ProductPage productTypeData={headphonesData.markII} productsFeatures={productsFeatures} relatedProducts={relatedProductsMarkII} productKey="markII"/>
  );
};

export default page;
