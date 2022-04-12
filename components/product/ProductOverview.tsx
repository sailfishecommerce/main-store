import { ProductProps } from "@/types";
import ProductDetail from "./ProductDetail";
import ProductMagnifier from "./ProductMagnifier";
import ProductReview from "./ProductReview";

export default function ProductOverview({product}:ProductProps) {
  return (
    <div className="flex items-center">
      <ProductMagnifier product={product} />
      <ProductDetail />
      <ProductReview />
    </div>
  )
}
