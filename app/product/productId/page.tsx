import ProductCard from "@/app/components/products/ProductCard";
import { product } from "@/utils/product";
// import ProductDetails from "./ProductDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return (
    <div>
      <ProductCard data={product} />
    </div>
  );
};

export default Product;
