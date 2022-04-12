import { ProductProps } from "@/types";
import ProductDetail from "@/components/product/ProductDetail";
import ProductMagnifier from "@/components/product/ProductMagnifier";
import ProductReview from "@/components/product/ProductReview";
import ProductBreadcrumb from "@/components/bread-crumb/ProductBreadcrumb";

export default function ProductOverview({ product }: ProductProps) {
  console.log("product", product);
  return (
    <div className="flex flex-col items-start">
      <ProductBreadcrumb breadcrumbItem={product.name} link={product.slug} />
      <div className="flex justify-start">
        <ProductMagnifier product={product} />
        <ProductDetail product={product} />
      </div>
      <ProductReview />
    </div>
  );
}
