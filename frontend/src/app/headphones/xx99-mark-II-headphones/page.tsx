import ProductPage from "@/components/ProductPage/ProductPage";
import { headphonesData, markIIdata, productsFeatures, relatedProductsMarkII } from "@/app/headphones/headphonesData"

const productData = {
  image: headphonesData.markII.image,
  name: "XX99 MKII",
  quantity: 1,
  price: 2999
}

const page = () => {
  return (
    <ProductPage productTypeData={headphonesData.markII} productsFeatures={productsFeatures} relatedProducts={relatedProductsMarkII} productKey='markII' productData={productData}/>
  );
};

export default page;
