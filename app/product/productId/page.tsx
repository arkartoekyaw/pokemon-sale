import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log("params", params);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
