import { ProductProps } from "@/types";
import ProductDetail from "@/components/product/ProductDetail";
import ProductMagnifier from "@/components/product/ProductMagnifier";
import ProductReview from "@/components/product/ProductReview";
import ProductBreadcrumb from "@/components/bread-crumb/ProductBreadcrumb";

export default function ProductOverview({product}:ProductProps) {
  return (
    <div className="flex items-center">
      <ProductBreadcrumb breadcrumbItem="Blackmores Vitamin B12 (Cyanocobalamin) 100mcg 75 Tablets" />
      <ProductMagnifier product={product} />
      <ProductDetail product={product} />
      <ProductReview />
    </div>
  );
}
